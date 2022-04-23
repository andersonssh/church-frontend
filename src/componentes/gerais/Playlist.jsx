import style from './Playlist.module.css'

function Playlist({playlists}){
    // playlists recebe lista no formato
    // [['titulo', 'link'], ['titulo', 'link']]

    let listaPlaylists = []

    for (let i = 0; i < playlists.length; i++){
        listaPlaylists.push(
                <div className={'col-sm-6 col-md-4 col-lg-3 ' + style.item}>
                    <div className={style.titulo}>
                        {playlists[i][0]}
                    </div>
                    <a href={playlists[i][1]} target="_blank"><button className={style.botao}><i class="fab fa-youtube"></i> Ver no Youtube</button></a>
                </div>
        )
    }
    return (
        <>
            <h2 className='text-center mb-5'>Coleções de Vídeos e Músicas</h2>
            <div className={style.playlist}>
                <div className='row justify-content-center'>
                    {listaPlaylists}
                </div>
            </div>
        </>
    )

}

export default Playlist