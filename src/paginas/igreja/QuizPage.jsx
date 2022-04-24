import Quiz from '../../componentes/igreja/Quiz'

function QuizPage({setMenu}){
    setMenu('igreja')


    return (
        <>
        <h1>quiz page</h1>
        <Quiz></Quiz>
        </>
    )
}

export default QuizPage