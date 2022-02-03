import style from './IndexGaleria.module.css'


function IndexGaleria(){
    return (
        <div className={style.galeria}>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">  
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="http://4.bp.blogspot.com/-JZW8KDa4VQI/UAW2EMqPpVI/AAAAAAAAAPQ/JMBR5nxXzbA/s1600/Slide5.JPG" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="http://4.bp.blogspot.com/-GcMQTGRfDnM/T2-BO2p1bmI/AAAAAAAAAMc/CnQxDQwX178/s1600/Slide1.JPG" class="d-block w-100" alt="..." />
                    </div>
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
            <div className="zona-botao-no-fim">
                <button type="button" class="btn btn-primary botao-no-fim" data-bs-toggle="modal" data-bs-target="#escala">
                Ver Galeria <i className="fal fa-angle-right"></i>
                </button>
            </div>
        </div>

    )
}

export default IndexGaleria