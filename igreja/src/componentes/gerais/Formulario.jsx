import { useState } from 'react'
import style from './Formulario.module.css'


function Formulario(){
    const [nome, setNome] = useState()
    const [mensagem, setMensagem] = useState()

    function enviarFormulario(e){
        e.preventDefault()
        let dados = {
            nome: nome,
            mensagem: mensagem
        } 
    }

    return (
            <form action='' onSubmit={enviarFormulario} className={style.formulario}>
                <div className="form-group">
                    <label for="nome">Nome:</label>
                    <input onChange={ (e) => setNome(e.target.value) } type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
                </div>
                <div className="form-group">
                    <label for="mensagem">Mensagem</label>
                    <textarea onChange={ (e) => setMensagem(e.target.value) } className="form-control" id="mensagem" rows="3" placeholder="Digite sua mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Enviar</button>
            </form>
    )
}

export default Formulario