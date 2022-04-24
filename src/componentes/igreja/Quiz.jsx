import style from './Quiz.module.css'
import {useState} from 'react'

function Quiz(){
    const POINTS_FOR_CORRECT_ANSWER = 100
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [blockQuestion, setBlockQuestion] = useState()
    const [pointsForCorrectAnswer, setPointsForCorrectAnswer] = useState(POINTS_FOR_CORRECT_ANSWER)
    const [pointsForStopping, setPointsForStopping] = useState(0)
    const [pointsForIncorrectAnswer, setPointsForIncorrectAnswer] = useState(0)
    const [isQuizActive, setIsQuizActive] = useState(true)

    
    return (
        <div>
        <p>Teste</p>
        <button key={'index-1'} id={'index-1'}
            className={style.alternative_button + ' ' +  
            style.alternative_button_hover}>
                <div className={style.alternative_letter}>{String.fromCharCode(0 + 65)}</div>
                <div className={style.alternative_text}>vish</div>
            </button>
        {isQuizActive && (<div className={style.status_points}>
            <div>
                <span className={style.status_points_error}>ERRAR: {pointsForIncorrectAnswer}</span>
                <span className={style.status_points_stop}>PARAR: {pointsForStopping}</span>
                <span className={style.status_points_correct}>ACERTAR: {pointsForCorrectAnswer}</span>
            </div>
            <button className={style.stop_button}>PARAR</button>
        </div>)}
       </div>
    )
}

export default Quiz