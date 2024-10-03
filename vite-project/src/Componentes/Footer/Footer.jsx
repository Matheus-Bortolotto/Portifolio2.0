import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";


function Footer() {
    return (
        <footer className="p-10 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-64 h-64">
                        <img src={Logo} alt="Minha logo" className="w-full h-full" />
                    </div>
                    <div className="flex space-x-4">
                        <Link to="mailto:matheusbortolol@hotmail.com">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsEnvelope className="text-black text-2xl" />
                            </button>
                        </Link>
                        <Link to="https://www.instagram.com/matheus_bortol/">
                            <button className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
                                <BsInstagram className="text-black text-2xl" />
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

                <div className="border-t border-green-500 mt-6 pt-4 text-center">
                    <p><i className="bi bi-envelope-fill"></i> <Link to="mailto:contato@bruno.com.br" className="text-white">matheusbortolol@hotmail.com</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
