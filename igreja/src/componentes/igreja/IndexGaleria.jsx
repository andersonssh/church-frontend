import style from './IndexGaleria.module.css'
import { Link } from 'react-router-dom'

function IndexGaleria(){
    return (
        <>
            <div className={style.galeria}>
                <div id="slide" className={"carousel slide " + style.fotos}  data-bs-ride="carousel">
                    <div className="carousel-inner">  
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="http://4.bp.blogspot.com/-JZW8KDa4VQI/UAW2EMqPpVI/AAAAAAAAAPQ/JMBR5nxXzbA/s1600/Slide5.JPG" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="http://4.bp.blogspot.com/-GcMQTGRfDnM/T2-BO2p1bmI/AAAAAAAAAMc/CnQxDQwX178/s1600/Slide1.JPG" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className={style.zona_botao_galeria}>
                <Link to="/galeria"><button className={style.botao_galeria}>Ir para a Galeria</button></Link>
            </div>
        </>
    )
}

export default IndexGaleria