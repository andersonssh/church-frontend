import style from './SlidesFotos.module.css'
import { Link } from 'react-router-dom'

function IndexGaleria({fotoPrincipal, fotos, galeria}){
    // foto principal deve conter [link, alt]
    // fotos[link, alt]
    // isGaleria [trueOUfalse, caminhoParaAGaleria]
    let listaFotos =[]
    // passa links das fotos e gera uma div para o carrousel
    for (let i = 0; i < fotos.length; i++){
        listaFotos.push(
            <div className="carousel-item" data-bs-interval="3000">
                <img src={fotos[i][0]} className="d-block w-100" alt={fotos[i][1]} />
            </div>
        )
    }

    return (
        <>  
            <div className={style.galeria}>
                <div id="carouselExampleInterval" className={"carousel slide " + style.fotos} data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src={fotoPrincipal[0]} class="d-block w-100" alt={fotoPrincipal[1]} />
                        </div>
                        {listaFotos}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
            {galeria[0] === true && (
                <div className={style.zona_botao_galeria}>
                    <Link to={galeria[1]}><button className={style.botao_galeria}>Ir para a Galeria</button></Link>
                </div>
            )}
        </>
    )
}

export default IndexGaleria