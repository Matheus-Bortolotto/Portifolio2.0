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
                    entry.target.classList.add("opacity-100");
                } else {
                    entry.target.classList.remove("opacity-100");
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
        <main>
            {/* Seção Sobre */}
            <section className="py-20 rolagem opacity-0 transition-opacity duration-700" id="sobre">
                <div className="max-w-7xl mx-auto flex gap-16 items-center">
                    <div className="w-64 h-64">
                        <img src={MinhaFoto} alt="" className="w-full h-full" />
                    </div>

                    <div className="text-white space-y-6">
                        <h2 className="text-4xl">MUITO PRAZER, <span className="text-green-500">SOU MATHEUS BORTOLOTTO.</span></h2>
                        <p>Graduando em Engenharia de Software, busco oportunidades desafiadoras na área, onde possa aplicar meus conhecimentos acadêmicos e habilidades técnicas, contribuindo para o desenvolvimento de soluções inovadoras e eficientes.</p>
                        <p>Estou motivado a integrar equipes dinâmicas e colaborativas, visando meu crescimento profissional e a entrega de resultados de excelência.</p>
                        <div className="flex space-x-4">
                            <Link to="https://www.instagram.com/matheus_bortol/">
                                <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                    <BsInstagram className="text-black text-2xl" />
                                </button>
                            </Link>
                            <Link to="mailto:matheusbortolol@hotmail.com">
                                <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                    <BsEnvelope className="text-black text-2xl" />
                                </button>
                            </Link>
                            <Link to="https://www.linkedin.com/in/matheus-bortolotto-ba4b84298/">
                                <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                    <BsLinkedin className="text-black text-2xl" />
                                </button>
                            </Link>
                            <Link to="https://github.com/Matheus-Bortolotto">
                                <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                    <BsGithub className="text-black text-2xl" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Especialidades */}
            <section className="py-20 rolagem opacity-0 transition-opacity duration-700" id="especiliadades">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl text-white mb-10">MINHAS <span className="text-green-500">SKILLS.</span></h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypeHtml className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypeCss className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypeJs className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypePy className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypeJsx className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsFiletypeSass className="text-6xl text-green-500" />
                        </div>
                        <div className="p-10 bg-gray-800 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                            <BsGit className="text-6xl text-green-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Portfólio */}
            <section className="py-20 rolagem opacity-0 transition-opacity duration-700" id="projetos">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl text-white mb-10">MEU <span className="text-green-500">PORTFÓLIO.</span></h2>
                    <div className="flex flex-wrap justify-around gap-8">
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto1})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 1</p>
                                <Link to="https://bickcraft-iota.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto2})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 2</p>
                                <Link to="https://challenge-formula-e-phi.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto3})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 3</p>
                                <Link to="https://global-solution-steel.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto4})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 4</p>
                                <Link to="https://animais-fantasticos-eosin.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto5})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 5</p>
                                <Link to="https://cp2-front-end.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                        <div className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-lg relative" style={{ backgroundImage: `url(${Projeto6})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                                <p className="text-white font-bold text-xl">Projeto 6</p>
                                <Link to="https://workshop-de-html-e-css.vercel.app/" className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg">Ver Mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Contato */}
            <section className="py-20 rolagem opacity-0 transition-opacity duration-700" id="contato">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl text-white mb-10">FALE <span className="text-green-500">COMIGO.</span></h2>
                    <div className="flex justify-center space-x-4">
                        <Link to="https://api.whatsapp.com/send/?phone=11940111150&text&type=phone_number&app_absent=0">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsWhatsapp className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="mailto:matheusbortolol@hotmail.com">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsEnvelope className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://www.linkedin.com/in/matheus-bortolotto-ba4b84298/">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsLinkedin className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://github.com/Matheus-Bortolotto">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsGithub className="text-black text-2xl" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;