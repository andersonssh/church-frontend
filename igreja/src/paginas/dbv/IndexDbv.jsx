import Ranking from "../../componentes/dbv/Ranking"
import SlideFotos from '../../componentes/gerais/SlidesFotos'
import Missoes from "../../componentes/dbv/Missoes"
import Playlist from "../../componentes/gerais/Playlist"

function Index({setMenu}){
    setMenu('dbv')
    return (
        <>
            <p className="text-center">"Só é seguro seguir o coração quando ele te leva para Jesus."<br /> Anônimo</p>
            <h1 className="titulo-principal">DESBRAVADORES DE LAGOA DO CARNEIRO</h1>
            <SlideFotos fotoPrincipal={['https://cdn.wallpapersafari.com/21/36/2nHl9g.jpg',  'texto para indexacao']} fotos={[['https://www.teahub.io/photos/full/66-660848_vintage-aesthetic-wallpapers-desktop.jpg', 'texto de ind'], ['https://picjumbo.com/wp-content/uploads/church-of-st-johann-in-ranui-dolomites-italy-free-photo-1080x720.jpg', 'textooo idex alt']]} galeria={[false, '']}/>
            <div className="p-4"></div>
            <Ranking />
            <div className="p-4"></div>
            <Missoes />
            <div className="p-4"></div>
            <Playlist playlists={[
                ['Músicas para Jovens Adventistas', 'https://youtube.com/playlist?list=PLgHci6NN0_3l72KXoFekPuACeg5GvUgqd'],
                ['Músicas Adventistas em outros idiomas', 'https://youtube.com/playlist?list=PLgHci6NN0_3kgzF-Wir_DlMQHlhiQARlI'],
                ['Vídeos sobre os Desbravadores', 'https://youtube.com/playlist?list=PLgHci6NN0_3k4LB0EI0j8YBAX5Tv1PHYD'],
                ['Vídeos e Animações Reflexivas', 'https://youtube.com/playlist?list=PLgHci6NN0_3nuk9iWpFgwz_gIOTtlQvNb'],
            ]}/>
            <div className="p-4"> </div>
        </>
    )
}

export default Index