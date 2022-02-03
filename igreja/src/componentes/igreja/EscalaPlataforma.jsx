import style from './EscalaPlataforma.module.css'
import './StyleIgreja.css'
import CopiarTexto from '../gerais/CopiarTexto'


function EscalaPlataforma(){
    const dados = {
        pregador: 'João Evangelista',
        plataforma: 'Lorena sousa e Maria Madalena',
        especial: 'Josias Freitas',
        recepcao: 'Joaquina Maria e Lorena Silveira',
        data: '04/04',
        dia: 'Quarta-Feira'
    }
    
    let escalaParaCopiar = `Escala para o culto de ${dados.dia}\nPregação: ${dados.pregador}\nPlataforma: ${dados.plataforma}\nParte especial: ${dados.especial}\nRecepção: ${dados.recepcao}`
    return (
        <>
        <marquee direction="left">
            <span>Escala</span> - {dados.dia} {dados.data}  <span>Pregador:</span> {dados.pregador} • <span>Plataforma:</span> {dados.plataforma} • <span>Parte Especial:</span> {dados.especial} • <span>Recepção:</span> {dados.recepcao}
        </marquee>
        <div className='zona-botao-no-fim'>
            <button type="button" class="btn btn-primary botao-no-fim" data-bs-toggle="modal" data-bs-target="#escala">
            Ver Escala Completa <i className="fal fa-angle-right"></i>
            </button>
            <div class="modal fade" id="escala" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Escala - {dados.dia} {dados.data} 
                                <span className={style.botao_copiar}>
                                    <CopiarTexto texto={escalaParaCopiar} />
                                </span>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className={style.escala}>
                                    <div className={style.dados}>
                                        <div className='row'>
                                            <div className="col-sm-6">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                        <th scope="col">Pregação</th>
                                                        <th scope="col">Plataforma</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <th>{dados.pregador}</th>
                                                        <td>{dados.plataforma}</td>
                                                        </tr>
                                                    </tbody>
                                            </table>
                                        </div>
                                        <div className="col-sm-6">
                                            <table className="table">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th scope="col">Especial</th>
                                                        <th scope="col">Recepção</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th style={{fontWeight: "400"}}>{dados.especial}</th>
                                                        <td>{dados.recepcao}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default EscalaPlataforma