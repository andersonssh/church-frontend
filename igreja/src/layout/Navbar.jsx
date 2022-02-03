import { Link } from 'react-router-dom'
import logoIgreja from '../imagens/logo-igreja.png'
import logoDbv from '../imagens/logo-dbv.png'
import './layout.css'
import { useState } from 'react'

function Navbar({menu}){
    const [submenu, setSubmenu] = useState('off')

    // funcao para adicionar eventos aos botoes é rodada sempre que o menu e alterado
    function adicionaEventoAosLinksDoMenu(){
        setTimeout(() => {
            // Adiciona evento para fechar menu apos clique no item
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                // caminho para os links a serem monitorados
                document.querySelectorAll('#menu-principal .nav-item a')
            );
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });    
        }, 1);
        
    }
    function mudaSubmenu(){
        if (submenu === 'off'){
            setSubmenu('submenu-ativo')
        }else{
            setSubmenu('off')
        }
    }
        
        
    

    return (
        <nav className="navbar fixed-top navbar-expand-md">
            
            {menu === 'igreja' && (
                <>
                    <Link className="logo-principal" exact="true" to="/"><img src={logoIgreja} alt="logo do site" /></Link>
                    <button id="botao-menu" className="navbar-toggler botao-menu-principal" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div id="menu-principal" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/meditacoes">Meditações</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/galeria">Galeria</Link>
                            </li>
                            <li className={'nav-item ' + submenu} onClick={mudaSubmenu}>
                                <span className="link"> Diversão <i className="fal fa-angle-down"></i></span>
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
                     {adicionaEventoAosLinksDoMenu()}

                </>
            )}
            {menu === 'dbv' && (
                
                <>
                    <Link className="logo-principal" to="/desbravadores"><img src={logoDbv} alt="logo do site" /></Link>
                    <button id="botao-menu" className="navbar-toggler botao-menu-principal" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div id="menu-principal" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/desbravadores">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/desbravadores/especialidades">Especialidades</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/desbravadores/nosso-clube">Nosso Clube</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/desbravadores/contato">Contato</Link>
                            </li>
                            <li className='nav-item botao-troca-site'>
                                <Link to="/">
                                    <button>Igreja</button>
                                </Link>
                            </li>
                        </ul>
                     </div>
                     {adicionaEventoAosLinksDoMenu()}
                </>
            )}
        </nav>
    )
}

export default Navbar