import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


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
            <header className="p-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="w-64 h-64" id="logo">
                        <Link to="#">
                            <img src={Logo} alt="minha logo" className="w-full h-full" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex">
                        <ul className="flex space-x-10">
                            <li><a href="#logo" className="text-white transition-transform hover:scale-105">Início</a></li>
                            <li><a href="#especiliadades" className="text-white transition-transform hover:scale-105">Especialidades</a></li>
                            <li><a href="#sobre" className="text-white transition-transform hover:scale-105">Sobre</a></li>
                            <li><a href="#projetos" className="text-white transition-transform hover:scale-105">Projetos</a></li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <a href="#contato">
                            <button className="px-10 py-2 text-lg font-semibold bg-green-500 text-black rounded-full transition-transform hover:scale-105">Contato</button>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-green-500 text-3xl">☰</button>
                        <ul id="nav-menu-mobile-content" className="hidden flex-col space-y-4 bg-black p-4 absolute top-0 right-0">
                            <li><a href="#logo" className="text-white">Início</a></li>
                            <li><a href="#especiliadades" className="text-white">Especialidades</a></li>
                            <li><a href="#sobre" className="text-white">Sobre</a></li>
                            <li><a href="#projetos" className="text-white">Projetos</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
