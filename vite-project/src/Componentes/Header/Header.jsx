import React from 'react';
import Logo from '../../assets/logo.png'


function Header() {

    const toggleMenu = () => {
        const menuContent = document.getElementById("nav-menu-mobile-content");
        if (menuContent.style.display === "flex") {
            menuContent.style.display = "none";
        } else {
            menuContent.style.display = "flex";
        }
    };

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
                        <a href="#contato">
                            <button>Contato</button>
                        </a>
                    </div>

                    <div className="nav-menu-mobile">
                        <button onClick={toggleMenu}>☰</button>

                        <ul id="nav-menu-mobile-content" className="nav-menu-mobile-content">
                            <li><a href="#logo">Início</a></li>
                            <li><a href="#especiliadades">Especialidades</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;