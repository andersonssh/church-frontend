import style from './Footer.module.css'

function Footer(){
    let data = new Date()
    data = data.getFullYear()
    return (

        <footer className={style.rodape}>
            <span>Adventistas de Lagoa do Carneiro - Copyright &copy; {data} | Site desenvolvido por <a className={style.creditos} href="https://andersonssh.github.io" target="_blank">Anderson Araújo</a></span>
        </footer>
    )
}

export default Footer