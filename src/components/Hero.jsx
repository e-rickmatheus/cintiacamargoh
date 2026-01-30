import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-lady-justice.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content reveal reveal-left">
                        <h4 className="hero-subtitle">Direito do Trabalho & Compliance</h4>
                        <h1 className="hero-title">
                            Soluções Jurídicas Reais com <span className="gold">Excelência e Ética</span>
                        </h1>
                        <p className="hero-description">
                            Atuação estratégica em Direito do Trabalho, Compliance e Direito de Família.
                            Segurança jurídica e atendimento humanizado com base em Belo Horizonte e atuação nacional.
                        </p>
                        <div className="hero-btns">
                            <a href="https://wa.me/5531971086382?text=Prezada%20Dra.%20C%C3%ADntia%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20atendimento.%20Vi%20seu%20contato%20atrav%C3%A9s%20do%20seu%20site." className="btn btn-primary">Fale Conosco agora</a>
                            <a href="#sobre" className="btn btn-outline">Saiba mais</a>
                        </div>
                    </div>
                    <div className="hero-image-container reveal reveal-right">
                        <img src={heroImage} alt="Lady Justice" className="hero-faded-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
