import Quiz from '../../componentes/igreja/Quiz'
import {useState, useEffect} from 'react'
import style from './QuizPage.module.css'
import api from '../../services/api'


function QuizPage({setMenu}){
    setMenu('igreja')
    const [rank, setRank] = useState([])
    const [fetchRank, setFetchRank] = useState(false)

    function getRanking(){
        api.get('/quiz/ranking')
        .then((response) => setRank(response.data))
        .catch((err) => {
            console.error('ERRO AO ENVIAR REQUISICAO PARA A API: ' + err)
        })

    }
    useEffect(() => {
        getRanking()
    }, [])
    
    let bloco_ranking = []
    for (let i = 0; i < rank.length; i++){
        bloco_ranking.push(
            <tr>
                <th scope="row">{ i + 1 }</th>
                <td>{ rank[i].name }</td>
                <td>{ rank[i].score}</td>
            </tr>
        )
    }
    if (fetchRank){
        setFetchRank(false)
        getRanking()
    }
    return (
        <div className={style.container}>
            <h1 className={'text-center ' + style.title}>QUIZ - BÍBLICO</h1>
            <Quiz setFetchRank={setFetchRank}></Quiz>
            <div className={style.ranking_block}>
                <h2 className=' text-center m-4'>Ranking</h2>
                <div className={style.ranking}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            { bloco_ranking }
                        </tbody>
                    </table> 
                </div>  
            </div>
        </div>
    )
}

export default QuizPage