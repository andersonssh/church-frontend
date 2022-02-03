import EscalaPlataforma from "../../componentes/igreja/EscalaPlataforma"
import Galeria from "./Galeria"
import style from './Index.module.css'


function Index({setMenu}){
    setMenu('igreja')
    return (
        <>
            <EscalaPlataforma />
            <h1 className={style.titulo}>IGREJA ADVENTISTA DE LAGOA DO CARNEIRO</h1>
            <Galeria />
            
        </>
    )
}

export default Index