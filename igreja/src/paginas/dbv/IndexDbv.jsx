import Ranking from "../../componentes/dbv/Ranking"
import SlideFotos from '../../componentes/gerais/SlidesFotos'


function Index({setMenu}){
    setMenu('dbv')
    return (
        <div>
            <h1 className="titulo-principal">Desbravadores de lagoa do carneiro</h1>
            <SlideFotos fotoPrincipal={['https://cdn.wallpapersafari.com/21/36/2nHl9g.jpg',  'texto para indexacao']} fotos={[['https://www.teahub.io/photos/full/66-660848_vintage-aesthetic-wallpapers-desktop.jpg', 'texto de ind'], ['https://picjumbo.com/wp-content/uploads/church-of-st-johann-in-ranui-dolomites-italy-free-photo-1080x720.jpg', 'textooo idex alt']]} galeria={[false, '']}/>
            <Ranking />
        </div>
    )
}

export default Index