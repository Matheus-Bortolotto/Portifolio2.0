import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MinhaFoto from '../../assets/minha-foto.jpg'
import Projeto1 from '../../assets/projeto1.png'
import Projeto2 from '../../assets/projeto2.png'
import Projeto3 from '../../assets/projeto3.png'
import Projeto4 from '../../assets/projeto4.png'
import Projeto5 from '../../assets/projeto5.png'
import Projeto6 from '../../assets/projeto6.jpeg'
import { BsInstagram } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypeJs } from "react-icons/bs";
import { BsFiletypePy } from "react-icons/bs";
import { BsFiletypeJsx } from "react-icons/bs";
import { BsFiletypeSass } from "react-icons/bs";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Home() {

    useEffect(() => {
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const elements = document.querySelectorAll(".rolagem");
        elements.forEach((element) => myObserver.observe(element));

        return () => {
            elements.forEach((element) => myObserver.unobserve(element));
        };
    }, []);
    return (
        <>
            <main>
                <section className="sobre rolagem" id="sobre">
                    <div className="interface">
                        <div className="flex">
                            <div className="img-sobre">
                                <img src={MinhaFoto} alt="" />
                            </div>

                            <div className="txt-sobre">
                                <h2>MUITO PRAZER, <span>SOU MATHEUS BORTOLOTTO.</span></h2>
                                <p>Graduando em Engenharia de Software, busco oportunidades desafiadoras na área, onde possa aplicar meus conhecimentos acadêmicos e habilidades técnicas, contribuindo para o desenvolvimento de soluções inovadoras e eficientes.</p>
                                <p> Estou motivado a integrar equipes dinâmicas e colaborativas, visando meu crescimento profissional e a entrega de resultados de excelência. </p>
                                <div className="btn-social">
                                    <Link to="https://www.instagram.com/matheus_bortol/"><button><BsInstagram /></button></Link>
                                    <Link to="mailto:matheusbortolol@hotmail.com"><button><BsEnvelope /></button></Link>
                                    <Link to="https://www.linkedin.com/in/matheus-bortolotto-ba4b84298/"><button><BsLinkedin /></button></Link>
                                    <Link to="https://github.com/Matheus-Bortolotto"><button><BsGithub /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="especiliadades rolagem" id="especiliadades">
                    <div className="interface">
                        <h2 className="titulo">MINHAS <span>SKILLS.</span></h2>
                        <div className="flex">
                            <div className="especialidades-box">
                                <BsFiletypeHtml />
                                <h3>HTML</h3>
                                <p>Intemediario/Avançado</p>
                            </div>

                            <div className="especialidades-box">
                                <BsFiletypeCss />
                                <h3>CSS</h3>
                                <p>Intemediario/Avançado</p>
                            </div>

                            <div className="especialidades-box">
                                <BsFiletypeJs />
                                <h3>JAVASCRIPT</h3>
                                <p>Básico</p>
                            </div>
                            <div className="especialidades-box">
                                <BsFiletypePy />
                                <h3>PYTHON</h3>
                                <p>Básico</p>
                            </div>
                            <div className="especialidades-box">
                                <BsFiletypeJsx />
                                <h3>REACT</h3>
                                <p>Básico</p>
                            </div>
                            <div className="especialidades-box">
                                <BsFiletypeSass />
                                <h3>SASS</h3>
                                <p>Básico</p>
                            </div>
                            <div className="especialidades-box">
                                <BsGit />
                                <h3>GIT</h3>
                                <p>Básico</p>
                            </div>
                            <div className="especialidades-box">
                                <BsGithub />
                                <h3>GITHUB</h3>
                                <p>Básico</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio rolagem" id="projetos">
                    <div className="interface">
                        <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
                        <div className="flex">
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto1})` }}>
                                <div className="overlay">
                                    Projeto 1
                                    <Link to="https://bickcraft-iota.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto2})` }}>
                                <div className="overlay">
                                    Projeto 2
                                    <Link to="https://challenge-formula-e-phi.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto3})` }}>
                                <div className="overlay">
                                    Projeto 3
                                    <Link to="https://global-solution-steel.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto4})` }}>
                                <div className="overlay">
                                    Projeto 4
                                    <Link to="https://animais-fantasticos-eosin.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto5})` }}>
                                <div className="overlay">
                                    Projeto 5
                                    <Link to="https://cp2-front-end.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                            <div className="img-port" style={{ backgroundImage: `url(${Projeto6})` }}>
                                <div className="overlay">
                                    Projeto 6
                                    <Link to="https://workshop-de-html-e-css.vercel.app/" className="btn-ver-mais">Ver Mais</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="contato rolagem" id="contato">
                    <div className="interface">
                        <div className="itensContato">
                            <h2 className="titulo">FALE <span>COMIGO.</span></h2>
                            <div className="btn-social imagensContato">
                                <Link to="https://api.whatsapp.com/send/?phone=11940111150&text&type=phone_number&app_absent=0"><button><BsWhatsapp /></button></Link>
                                <Link to="mailto:matheusbortolol@hotmail.com"><button><BsEnvelope /></button></Link>
                                <Link to="https://www.linkedin.com/in/matheus-bortolotto-ba4b84298/"><button><BsLinkedin /></button></Link>
                                <Link to="https://github.com/Matheus-Bortolotto"><button><BsGithub /></button></Link>
                            </div>
                        </div>
                    </div >
                </section >

            </main >
        </>
    )
}

export default Home;