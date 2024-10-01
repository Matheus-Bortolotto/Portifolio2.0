import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";


function Footer() {
    return (
        <>
            <footer className="rolagem">
                <div className="interface">
                    <div className="line-footer">
                        <div className="flex">
                            <div className="logo-footer">
                                <img src={Logo} alt="Minha logo"/>
                            </div>
                            <div className="btn-social">
                                <Link to="mailto:matheusbortolol@hotmail.com"><button><BsEnvelope /></button></Link>
                                    <Link to="https://www.instagram.com/matheus_bortol/"><button><BsInstagram /></button></Link>
                                <Link to="https://www.linkedin.com/in/matheus-bortolotto-ba4b84298/"><button><BsLinkedin /></button></Link>
                                <Link to="https://github.com/Matheus-Bortolotto"><button><BsGithub /></button></Link>
                        </div>
                    </div>
                </div>

                <div className="line-footer borda">
                    <p><i className="bi bi-envelope-fill"></i> <Link to="mailto:contato@bruno.com.br">matheusbortolol@hotmail.com</Link></p>
                </div>
            </div>
        </footer >
        </>
    );
};

export default Footer;