import style from './Quiz.module.css'
import {useState} from 'react'
import { click } from '@testing-library/user-event/dist/click'

const POINTS_FOR_CORRECT_ANSWER = 100
let currentQuestionIndex = 0
let pointsForCorrectAnswer = POINTS_FOR_CORRECT_ANSWER
let pointsForStopping = 0
let pointsForIncorrectAnswer = 0
let isQuizActive = false
let finalScore = 0

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
                Você completou todas as questões! PARABÉNS!!
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
        <>  
            {message}
            <div className={style.block_final_score}>Sua pontuação final foi: <span className={style.final_score}>{finalScore}</span></div>
        </>
    )
}
function isCorrectAnswer(clickedAlternativeIndex, correctAlternativeIndex){
    return clickedAlternativeIndex == correctAlternativeIndex
}
function setVariablesForTheNextQuestion(){
    pointsForStopping = pointsForCorrectAnswer
    pointsForCorrectAnswer += POINTS_FOR_CORRECT_ANSWER
    pointsForIncorrectAnswer = Math.trunc(pointsForStopping / 4)
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

function Quiz(){
    let questions = [
        {question: 'questao 1 OK!', alternatives: ['item 1', 'item 2'],
        correct_alternative_index: 1},
        {question: 'questao 2', alternatives: ['item 1q2', 'item 2q2', 'item 3q2'],
        correct_alternative_index: 1},
        {question: 'questao 3', alternatives: ['item 1 q3', 'item 2 q3', 'item 3 q3'],
        correct_alternative_index: 1}
    ]
    const [blockQuestion, setBlockQuestion] = useState()
    const [isQuizActive, setIsQuizActive] = useState(false)

    function changeForTheNextQuestion(question){
        let command = question.question
        let alternatives = question.alternatives
        let blockQ = []
        blockQ.push(<p>QUESTÃO {currentQuestionIndex + 1}</p>)
        blockQ.push(<p>{command}</p>)
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
        document.querySelector('#start-button').style.display= 'none'
        setIsQuizActive(true)
        changeForTheNextQuestion(questions[currentQuestionIndex])
    }
    function stopQuiz(status){
        setIsQuizActive(false)
        if(status == 'error'){
            console.log('errou!!!!')
            finalScore = pointsForIncorrectAnswer
        }else if (status == 'finished'){
            console.log('finalizou!')
            finalScore = pointsForCorrectAnswer
        }else if (status == 'stopped'){
            finalScore = pointsForStopping
            console.log('PAROU!!!!!!')
        }
        setBlockQuestion(generateBlockEnd(status))
    }
    return (
        <div>

            {blockQuestion}
            <button id="start-button" onClick={() => startQuiz()}>START</button>
            {isQuizActive && (
                <div className={style.status_points}>
                    <div>
                        <span className={style.status_points_error}>ERRAR: {pointsForIncorrectAnswer}</span>
                        <span className={style.status_points_stop}>PARAR: {pointsForStopping}</span>
                        <span className={style.status_points_correct}>ACERTAR: {pointsForCorrectAnswer}</span>
                    </div>
                    <button className={style.stop_button} onClick={()=> stopQuiz('stopped')}>PARAR</button>
                </div>)}
       </div>
    )
}

export default Quiz