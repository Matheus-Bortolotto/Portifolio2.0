import React from 'react';
import Logo from '../../assets/logo.png'


function Header() {
    return (
        <>
            <header>
                <div className="interface">
                    <div className="logo" id="logo">
                        <a href="#">
                            <img src={Logo} alt="minha logo" />
                        </a>
                    </div>

                    <nav className="menu-desktop">
                        <ul>
                            <li><a href="#logo">Início</a></li>
                            <li><a href="#especiliadades">Especialidades</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                        </ul>
                    </nav>

                    <div className="btn-contato">
                        <a href="#Contato">
                            <button>Contato</button>
                        </a>
                    </div>

                    <div className="btn-abrir-menu" id="btn-menu">
                        <i className="bi bi-list"></i>
                    </div>

                    <div className="menu-mobile" id="menu-mobile">
                        <div className="btn-fechar">
                            <i className="bi bi-x-lg"></i>
                        </div>

                        <nav>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#especiliadades">Especialidades</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#projetos">Projetos</a></li>
                                <li><a href="#linkContato">Contato</a></li>
                            </ul>
                        </nav>

                    </div>
                    <div className="overlay-menu" id="overlay-menu"></div>
                </div>
            </header>
        </>
    )
}

export default Header;