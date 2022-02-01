import { Link } from 'react-router-dom'
import logoIgreja from '../imagens/logo-igreja.png'
import logoDbv from '../imagens/logo-dbv.png'
import './layout.css'

function Navbar({menu}){

    return (
        <nav className="navbar fixed-top navbar-expand-sm">    
            
            {menu === 'igreja' && (
                <>
                    <Link exact className="logo-principal" to="/"><img src={logoIgreja} alt="logo do site" /></Link>
                    <button id="botao-menu" className="navbar-toggler botao-menu-principal" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div id="menu-principal" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/"><i className="fas fa-home"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/meditacoes">Meditações</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/midias">Mídias</Link>
                            </li>
                            <li className="nav-item item-com-submenu">
                                <a href="#">Diversão <i class="fal fa-angle-down"></i></a>
                                <ul className='navbar-nav'>
                                    <li className="nav-item"><Link to="/quiz">Quiz</Link></li>
                                    <li className='nav-item'><Link to="/jogos">Jogos</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato">Contato</Link>
                            </li>
                            <li className='nav-item botao-troca-site'>
                                <Link to="/desbravadores">
                                    <button>Desbravadores</button>
                                </Link>
                            </li>
                        </ul>
                     </div>
                </>
            )}
            {menu === 'dbv' && (
                
                <>
                    <Link exact className="logo" to="/desbravadores"><img src={logoDbv} alt="logo do site" /><i className="fas fa-bars"></i></Link>
                    <button id="botao-menu" className="navbar-toggler botao-menu-principal" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div id="menu-principal" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#top" className="nav-link">Início</a>
                            </li>
                            <li className="nav-item">
                                <a href="#experiencia" className="nav-link">Experiência</a>
                            </li>
                            <li className="nav-item">
                                <a href="#certificados" className="nav-link desative-menu">Certificações</a>
                            </li>
                            <li className="nav-item">
                                <a href="#habilidades" className="nav-link">Habilidades</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projetos" className="nav-link">Projetos</a>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar