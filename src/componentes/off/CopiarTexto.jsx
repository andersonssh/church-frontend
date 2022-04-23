import style from './CopiarTexto.module.css'
import { useState } from 'react'


function CopiarTexto({texto}){
    const [icone, setIcone] = useState('fas fa-copy')
    function acao(){
        copiarTexto()
        trocarIcone()
    }
    function trocarIcone(){
        setIcone(`fas fa-check ${style.ativo}`)
        setTimeout(() => {
            setIcone(`fas fa-copy `)
        }, 3000);
    }
    function copiarTexto() {
        navigator.clipboard.writeText(texto)
    }   
    return (
        <button className={style.botao} onClick={acao}><i className={icone}></i></button>
    )
}

export default CopiarTexto