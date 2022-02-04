import style from './Missoes.module.css'

function Missoes(){
    let dados = {
        especiais: [
            ['Missão mensal (surpresa)', '300-700'],
        ],
        missoes: [
            ['Tornar o amigo um desbravador', 500],
            ['Realizar um estudo bíblico', 400],
            ['Concluir uma nova especialidade', 200],
            ['Mensalidade em dia', 100],
            ['Frequência', 50],
            ['Participar dos eventos da igreja', 50],
            ['Levar um amigo', 50],
            ['Jogos do clube', '???'],
            ['Pontualidade', 30],
            ['Levar Material COMPLETO', 30],
            ['Apresentação nós', 30]
        ]
    }
        
    let listaMissoes = []
    // adicionando primeiro as missoes especiais
    for (let i = 0; i < dados.especiais.length; i++){
        listaMissoes.push(
            <div className={'col-sm-6 col-md-4 col-lg-3 ' + style.especiais}>
                <div>{dados.especiais[i][0]}</div>
                <div className={style.pontuacao}>{dados.especiais[i][1]} pontos</div>
            </div>
        )
    }

    // adicionando missoes comuns
    for (let i = 0; i < dados.missoes.length; i++){
        listaMissoes.push(
            <div className={'col-sm-6 col-md-4 col-lg-3 ' + style.missoes}>
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
        </div>
    )
}

export default Missoes