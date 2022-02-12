import style from './Missoes.module.css'
import { useState } from 'react'


function Missoes(){
    function abrirModal(tipo, indice){
        if (tipo === 'especial'){
            setTituloModal(dados.especiais[indice][0])
            setInfoModal(dados.especiais[indice][3])
        }else if (tipo === 'comum'){
            setTituloModal(dados.missoes[indice][0])
            setInfoModal(dados.missoes[indice][2])
        }
    }

    const [tituloModal, setTituloModal] = useState()
    const [infoModal, setInfoModal] = useState()

    // CRIAR ELEMENTOS 
    let dados = {
        especiais: [
            ['Criar o grito de guerra do clube', '750', (
                <div>
                    O grito de guerra deverá ter pelomenos de 1-2 minutos. Onde também pode ser cantada a versão curta da mesma ou de outra música de pelomenos 30 segundos.
                </div>
            )],
        ],
        missoes: [
            ['Finalizar um estudo bíblico', 900, (
                    <div>
                        <div>Em dupla, dar um estudo bíblico completo para alguém.</div>
                        <div>Caso a pessoa desista por conta própria, será avaliado a quantidade de pontos.</div>
                        <div>A avaliação por desistência só se dará se o estudo tiver tempo mínimo de 2 meses</div> 
                        <div style={{color: 'red'}}>Para mais de 1 estudo bíblico a pontuação pode sofrer alterações.<br />Para maior equilíbrio, apenas estudos apartir de fevereiro de 2022 serão contados.</div>
                    </div>
                )],
            ['Concluir uma nova especialidade', 200, (
                <div>
                    Finalizar uma especialidade sozinho ou em grupo.
                </div>
            )],
            ['Mensalidade em dia', 150, (
                <div>
                    Pagar a mensalidade até o último dia do mês.
                </div>
            )],
            ['Levar um amigo à reunião', 100, (
                <div>Levar um amigo a Reunião dos desbravadores. A pontuação é dada uma vez para cada nova pessoa.</div>
            )],
            ['Participar ativamente dos eventos da igreja', 100, (
                <div>
                    <div>Participar dos eventos promovidos pela igreja. Aqueles que ajudarem e se dedicarem visívelmente além do esperado, poderão atingir mais pontos.</div>
                    <div>Os pontos serão dados de acordo com a formula:</div>

                    <div style={{color: 'red'}}>(100 + 50 * número de dias)</div>
                </div>
            )],
            ['Frequência', 50, (
                <div>
                    Marcar presença em cada reunião que tenha relação com o clube.
                </div>
            )],
            ['Uniforme', 30, (
                <div>
                    Ir para as reuniões com o fardamento completo.
                </div>
            )],
            ['Pontualidade', 30, (
                <div>
                    Chegar nas reuniões no horário correto.
                </div>
            )],
            ['Levar Material COMPLETO', 30, (
                <div>
                    Levar todo o material solicitado para o dia, incluindo materiais que forem solicitados para alguma dinâmica.
                </div>
            )],
            ['Apresentação nós', 30, (
                <div>
                    Em uma única tentativa, apresentar o nó corretamente.
                </div>
            )],
            ['Dinâmicas', '10-50', (
                <div>
                    Pontuação para cada dinâmica individual:
                    <div>1º lugar: 60</div>
                    <div>2º lugar: 40</div>
                    <div>3º lugar: 30</div>
                    <div>4º lugar: 20</div>
                    <div>5º lugar: 10</div>
                    <div>6º lugar +: 10</div>
                    Pontuação para cada dinâmica em grupo:
                    <div>1º lugar: 60</div>
                    <div>2º lugar: 40</div>
                    <div>3º lugar: 20</div>
                    <div>4º lugar + : 20</div>
                </div>
            )]
        ]
    }
        
    let listaMissoes = []
    // adicionando primeiro as missoes especiais
    for (let i = 0; i < dados.especiais.length; i++){
        listaMissoes.push(
            <div onClick={ () => abrirModal('especial', i) }className={'col-sm-6 col-md-4 col-lg-3 ' + style.especiais}>
                <button className={style.botao_info}><i class="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#infoMissao"></i></button>
                <div>{dados.especiais[i][0]}</div>
                <div className={style.pontuacao}>{dados.especiais[i][1]} pontos</div>
            </div>
        )
    }

    // adicionando missoes comuns
    for (let i = 0; i < dados.missoes.length; i++){
        listaMissoes.push(
            <div className={'col-sm-6 col-md-4 col-lg-3 ' + style.missoes}>
                <button onClick={ () => abrirModal('comum', i) } className={style.botao_info} data-bs-toggle="modal" data-bs-target="#infoMissao"><i class="fas fa-info-circle"></i></button>
                <div>{dados.missoes[i][0]}</div>
                <div className={style.pontuacao}>{dados.missoes[i][1]} pontos</div>
            </div>
        )
    }
    return (
        <div>
            <h3 className='text-center mb-5'>Como ganhar pontos?</h3>
            <div className={'mb-3 ' + style.info}>
                <div>
                    <div className={style.info_especial}></div> Missão mensal
                </div>
                <div>
                    <div className={style.info_missao}></div> Missão fixa
                </div>
                
            </div>
            <div className="row justify-content-center mb-5">
                {listaMissoes}
            </div>
            <div class="modal fade" id="infoMissao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
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
        </div>
    )
}

export default Missoes