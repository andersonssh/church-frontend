import EscalaPlataforma from "../../componentes/igreja/EscalaPlataforma"
import IndexGaleria from "../../componentes/igreja/IndexGaleria"
import style from './Index.module.css'


function Index({setMenu}){
    setMenu('igreja')
    return (
        <>
            <EscalaPlataforma />
            <h1 className={style.titulo}>IGREJA ADVENTISTA DE LAGOA DO CARNEIRO</h1>
            <IndexGaleria />
            
        </>
    )
}

export default Index