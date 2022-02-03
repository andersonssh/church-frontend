import style from './ContatoIgreja.module.css'
import Formulario from '../../componentes/gerais/Formulario'


function ContatoIgreja({setMenu}){
    setMenu('igreja')
    return (
        <div className={style.container}>
            <div className='row'>
                <div className="col-sm-6" style={{marginBottom: '40px'}}>
                    <div className={style.endereco}>
                        <h2>R. do Posto - Lagoa do Carneiro, Acaraú - CE, 62580-000</h2>
                        <a href="https://www.google.com.br/maps/place/Igreja+Adventista+do+S%C3%A9timo+Dia/@-3.0404971,-40.0541611,18.25z/data=!4m9!1m2!2m1!1sigreja+adventista+de+lagoa+do+carneiro!3m5!1s0x7ea09b0c902de29:0x2f0a7b1e8da80e08!8m2!3d-3.0400159!4d-40.0540297!15sCiZpZ3JlamEgYWR2ZW50aXN0YSBkZSBsYWdvYSBkbyBjYXJuZWlybyIDiAEBkgEGY2h1cmNo" target="_blank"><button>Ver no mapa</button></a>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={style.form}>
                        <Formulario />
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        
    )
}

export default ContatoIgreja