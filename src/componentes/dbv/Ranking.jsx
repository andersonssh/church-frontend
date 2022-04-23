import { Link } from "react-router-dom"
import style from './Ranking.module.css'
import { useState, useEffect } from 'react'
import api from '../../services/api'


function Ranking(){
    function detalhesDosPontos(nome_dbv, total_de_pontos, detalhes_dos_pontos){
        let blocoDetalhesDosPontos = []
        for(let i = 0; i < detalhes_dos_pontos.length; i++){
            let pontuacao = detalhes_dos_pontos[i].points
            let descricao = detalhes_dos_pontos[i].description
            let cor = 'green';
            if(pontuacao < 0){
                cor = 'red'
            }
            let pontuacao_colorida = <span style={{color: cor}}>{pontuacao > 0 ? '+': ''}{pontuacao}</span>
            blocoDetalhesDosPontos.push(
                <div>{pontuacao_colorida} {'->'} {descricao}</div>
            )
        }
        setTituloModal(
            <div>
                {nome_dbv} com <span style={{color: 'blue'}}>{total_de_pontos}</span> pontos
            </div>
        )
        setInfoModal(blocoDetalhesDosPontos)
    }
    const [tituloModal, setTituloModal] = useState()
    const [infoModal, setInfoModal] = useState()
    const [rank, setRank] = useState([])

    useEffect(() => {
        api.get('/ranking')
        .then((response) => setRank(response.data))
        .catch((err) => {
            console.error('ERRO AO ENVIAR REQUISICAO PARA A API: ' + err)
        })
    }, [])



    let bloco_ranking = []
    for (let i = 0; i < rank.length; i++){
        bloco_ranking.push(
            <tr>
                <th scope="row">{ i + 1 }</th>
                <td>{ rank[i][0] }</td>
                <td>{ rank[i][1]}</td>
                <button className={style.botao_detalhes} onClick={() => detalhesDosPontos(rank[i][0], rank[i][1], rank[i][2])}
                 data-bs-toggle="modal" data-bs-target="#infoRank"><i class="fas fa-info-circle"> Detalhes</i></button>
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
                    { bloco_ranking }
                </tbody>
            </table>    
            </div>
            <div class="modal fade" id="infoRank" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{tituloModal}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {infoModal}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Entendido!</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Ranking