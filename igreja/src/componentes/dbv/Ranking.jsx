import { Link } from "react-router-dom"
import style from './Ranking.module.css'


function Ranking(){
    const dados = {
        pessoas: [
            [1, 'João Cleber', 500],
            [2, 'Maria Souza', 400],
            [3, 'Pedro José', 350],
            [4, 'Maria Freitas', 340]
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