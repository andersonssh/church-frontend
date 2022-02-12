import { Link } from "react-router-dom"
import style from './Ranking.module.css'


function Ranking(){
    const dados = {
        pessoas: [
            [1, 'Luciana', 330],
            [2, 'Andrey', 280],
            [3, 'Jonatas', 240],
            [3, 'Lucivânia', 240],
            [4, 'Cecília', 210],
            [5, 'Ana Glória', 200],
            [5, 'Giliarde', 200],
            [5, 'Andressa', 200],
            [6, 'Pedro Régis', 180],
            [7, 'Ellen', 170],
            [8, 'Bia', 170],
            [9, 'Levi', 160],
            [10, 'Clarice', 150]

        ]
    }

    let ranking = []
    for (let i = 0; i < dados.pessoas.length; i++){
        ranking.push(
            <tr>
                <th scope="row">{ dados.pessoas[i][0] }</th>
                <td>{ dados.pessoas[i][1] }</td>
                <td>{ dados.pessoas[i][2]} </td>
            </tr>
        )
    }
    
    

    return (
        <>
            <h2 className={style.titulo}>Ranking geral</h2>
            <div className={style.ranking}>
                <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Desbravador</th>
                        <th scope="col">Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    { ranking }
                </tbody>
            </table>    
            </div>
        </>
        
    )
}

export default Ranking