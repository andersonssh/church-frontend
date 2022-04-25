import style from './Quiz.module.css'
import {useState, useEffect} from 'react'
import api from '../../services/api'

const POINTS_FOR_CORRECT_ANSWER = 100
const SESSION_ID = Math.floor(Date.now() * Math.random()).toString(36)
let currentQuestionIndex = 0
let pointsForCorrectAnswer = POINTS_FOR_CORRECT_ANSWER
let pointsForStopping = 0
let pointsForIncorrectAnswer = 0
let isQuizActive = false
let finalScore = 0
let quizMode = 'Ranqueado'


function resetVariables(){
    pointsForStopping = 0
    pointsForCorrectAnswer = POINTS_FOR_CORRECT_ANSWER
    pointsForIncorrectAnswer = 0
    currentQuestionIndex = 0
    finalScore = 0
    isQuizActive = false
}
function generateBlockEnd(status){
    let message = ''
    if (status == 'finished'){
        message = (
        <>
            <div className={style.finished_quiz + ' h2'}>
                Você acertou todas as questões! <br />PARABÉNS!!
            </div>
        </>
        )
    }else if (status == 'stopped'){
        message = (
        <>
            <div className={style.stopped_quiz + ' h2'}>
                Você resolveu parar...
            </div>
        </>
        )
    }else if (status == 'error'){
        message = (
        <>
            <div className={style.error_quiz + ' h2'}>
                Você errou!
            </div>
        </>
        )
    }
    return (
        <div className={style.text_center}>  
            {message}
            <div className={style.block_final_score}>Você conseguiu: <span className={style.final_score}>{finalScore} </span>pontos!</div>
        </div>
    )
}
function isCorrectAnswer(clickedAlternativeIndex, correctAlternativeIndex){
    return clickedAlternativeIndex == correctAlternativeIndex
}
function setVariablesForTheNextQuestion(){
    pointsForStopping = pointsForCorrectAnswer
    pointsForCorrectAnswer += POINTS_FOR_CORRECT_ANSWER
    pointsForIncorrectAnswer = Math.trunc(pointsForStopping / 2)
    currentQuestionIndex++
}
function disableAlternatives(n_alternatives){
    for(let i = 0; i < n_alternatives; i++){
        document.querySelector('#index-'+ i).disabled=true
    }
}
function paintClickedAlternative(obj_clickedButton, isCorrectAnswer, clickedAlternativeIndex){
    if (isCorrectAnswer){
        obj_clickedButton.classList.add(style.correct_alternative)
    }else{
        obj_clickedButton.classList.add(style.incorrect_alternative)
    }

}
function stylizeAlternatives(n_alternatives, clickedAlternativeIndex){
    for(let i = 0; i < n_alternatives; i++){
        let alternative = document.querySelector('#index-' + i)
        if(i != clickedAlternativeIndex){
            alternative.classList.add(style.disabled_button)
        }
        alternative.classList.remove(style.alternative_button_hover)
    }
}

function Quiz({extraParams, setFetchRank}){
    // extraParams recebe os parametros extra para a rota GET
    const [questions, setQuestions] = useState()
    const [blockQuestion, setBlockQuestion] = useState()
    const [isQuizActive, setIsQuizActive] = useState(false)
    const [name, setName] = useState()
    const [pass, setPass] = useState()

    function fetchQuestions(){
        extraParams = extraParams ? extraParams: ''
        api.get('/quiz' + extraParams)
        .then((response) => setQuestions(response.data))
        .catch((err) => {
            console.error('ERRO AO ENVIAR REQUISICAO PARA A API: ' + err)
        })
    }
    function sendToRanking(){
        api.post('/quiz/ranking', {
            name: name,
            score: finalScore,
            pass: pass.toLowerCase(),
            session_id: SESSION_ID}
        ).then(()=> setFetchRank(true))
        .catch((err) => console.error('ERRO AO ENVIAR REQUISICAO PARA A API: ' + err))
    }
    useEffect(() => {
        fetchQuestions()
    }, [])

    function changeForTheNextQuestion(question){
        let alternatives = question.alternatives
        let blockQ = []
        blockQ.push(
        <div className={style.quiz_top}>
            <p>QUESTÃO {currentQuestionIndex + 1}</p>
            <p className={'quiz-level-' + question.level}>Nível {question.level}</p>
        </div>)

        blockQ.push(<p>{question.question}</p>)
        for(let i = 0; i < alternatives.length; i++){
            blockQ.push(
                <button key={Math.random().toString()} id={'index-' + i}
                className={style.alternative_button + ' ' +  
                style.alternative_button_hover} onClick={()=> markedOptionHandler(i)}>
                    <div className={style.alternative_letter}>{String.fromCharCode(i + 65)}</div>
                    <div className={style.alternative_text}>{alternatives[i]}</div>
                </button>
            )
        }
        setBlockQuestion(
            <>{blockQ}</>
        )
    }
    function markedOptionHandler(clickedAlternativeIndex){
        let obj_clickedButton = document.querySelector('#index-' + clickedAlternativeIndex)
        if (obj_clickedButton.disabled == true){
            return
        }
        let correctAlternativeIndex = questions[currentQuestionIndex].correct_alternative_index
        let isCorrectAlternative = isCorrectAnswer(clickedAlternativeIndex, correctAlternativeIndex)

        paintClickedAlternative(obj_clickedButton, isCorrectAlternative, clickedAlternativeIndex)
        let n_alternatives = questions[currentQuestionIndex].alternatives.length
        disableAlternatives(n_alternatives)
        stylizeAlternatives(n_alternatives, clickedAlternativeIndex)
        setTimeout(() => {
            if (isCorrectAlternative){
                if(questions.length - 1 == currentQuestionIndex){
                    stopQuiz('finished')
                    return
                }else{
                    setVariablesForTheNextQuestion()
                    changeForTheNextQuestion(questions[currentQuestionIndex])
                }

                    
            }else{
                stopQuiz('error')
            }
        }, 1000);
        
        
    }
    function startQuiz(){
        resetVariables()
        document.querySelector('#start-menu').style.display= 'none'
        setIsQuizActive(true)
        changeForTheNextQuestion(questions[currentQuestionIndex])
    }
    function stopQuiz(status){
        setIsQuizActive(false)
        if(status == 'error'){
            finalScore = pointsForIncorrectAnswer
        }else if (status == 'finished'){
            finalScore = pointsForCorrectAnswer
        }else if (status == 'stopped'){
            finalScore = pointsForStopping
        }
        let blockEnd = <div className={style.menu_endblock}>
        {generateBlockEnd(status)}
        <div className={style.restart_button_block}>
            <button className={style.quiz_button} onClick={() => restartQuiz()}>RESTART</button>
        </div>
        </div>
        setBlockQuestion(blockEnd)
        sendToRanking()
    }
    function restartQuiz(){
        document.querySelector('#start-menu').style = ''
        resetVariables()
        setIsQuizActive(false)
        setBlockQuestion()
        fetchQuestions()
    }
    return (
        <div className={style.general_quiz_block}>
            {blockQuestion}
            <div id="start-menu" className={style.text_center}>
                <h3>{quizMode}</h3>
                <div className={style.quiz_form_item}>
                    <div>Seu Nome: </div>
                    <input type="text" maxlength="20" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={style.quiz_form_item}>
                    <div>Nome do ancião da igreja:</div>
                    <input type="text" onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div>
                    <button className={style.quiz_button} onClick={() => startQuiz()}>COMEÇAR</button>
                </div>
            </div>
            {isQuizActive && (
                <div className={style.status_points}>
                    <div>
                        <span className={style.status_points_error}>ERRAR: {pointsForIncorrectAnswer}</span>
                        <span className={style.status_points_stop}>PARAR: {pointsForStopping}</span>
                        <span className={style.status_points_correct}>ACERTAR: {pointsForCorrectAnswer}</span>
                    </div>
                    <button className={style.quiz_button} onClick={()=> stopQuiz('stopped')}>PARAR</button>
                </div>)}
       </div>
    )
}

export default Quiz