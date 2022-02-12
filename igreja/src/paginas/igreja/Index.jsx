// import EscalaPlataforma from "../../componentes/igreja/EscalaPlataforma"
import SlideFotos from "../../componentes/gerais/SlidesFotos"
import style from './Index.module.css'


function Index({setMenu}){
    setMenu('igreja')
    let versiculo = 'Aqui está a perseverança dos santos que obedecem aos mandamentos de Deus e permanecem fiéis a Jesus.'
    return (
        <>
            {/*<EscalaPlataforma />*/}
            <p className="text-center mt-5">"Aqui está a perseverança dos santos que obedecem aos mandamentos de Deus e permanecem fiéis a Jesus." <br />Apocalipse 14:12</p>
            <h1 className="titulo-principal">IGREJA ADVENTISTA DE LAGOA DO CARNEIRO</h1>
            <SlideFotos fotoPrincipal={['https://cdn.wallpapersafari.com/21/36/2nHl9g.jpg',  'texto para indexacao']} fotos={[['https://www.teahub.io/photos/full/66-660848_vintage-aesthetic-wallpapers-desktop.jpg', 'texto de ind'], ['https://picjumbo.com/wp-content/uploads/church-of-st-johann-in-ranui-dolomites-italy-free-photo-1080x720.jpg', 'textooo idex alt']]} galeria={[true, '/galeria']}/>
            
        </>
    )
}

export default Index