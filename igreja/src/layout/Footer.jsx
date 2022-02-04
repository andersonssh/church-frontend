function Footer(){
    let data = new Date()
    data = data.getFullYear()
    return (

        <div className="rodape">
            <span>Adventistas de Lagoa do Carneiro - Copyright &copy; {data} | Site desenvolvido por <a className="creditos" href="https://andersonssh.github.io" target="_blank">Anderson Araújo</a></span>
        </div>
    )
}

export default Footer