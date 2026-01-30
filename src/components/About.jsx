import React from 'react';
import portraitImg from '../assets/cintia-portrait-new.jpg';
import './About.css';

const About = () => {
    return (
        <section id="sobre" className="about">
            <div className="container about-container">
                <div className="about-grid">
                    <div className="about-image reveal reveal-left">
                        <div className="image-frame">
                            <img src={portraitImg} alt="Cíntia Camargoh" className="profile-photo" />
                        </div>
                    </div>
                    <div className="about-content reveal reveal-right">
                        <h2 className="section-title"><span className="white-text">Cíntia</span> Camargoh</h2>
                        <p className="lead">
                            Com 5 anos de experiência e sólida formação acadêmica, dedico minha carreira a oferecer soluções jurídicas estratégicas e humanizadas.
                        </p>
                        <div className="credentials">
                            <div className="credential-item">
                                <strong>Formação:</strong> Direito pela Faculdade Dom Helder Câmara.
                            </div>
                            <div className="credential-item">
                                <strong>Pós-graduação:</strong> Mediação de Conflitos.
                            </div>
                            <div className="credential-item">
                                <strong>Especializações:</strong> Direito e Processo do Trabalho, Família, Sucessões e Trânsito.
                            </div>
                            <div className="credential-item">
                                <strong>Atuação Institucional:</strong> Membro das Comissões de Direito do Trabalho e Compliance da <a href="https://www.oabmg.org.br/Consulta/DadosInscrito/MjI2MDg1" target="_blank" rel="noopener noreferrer" className="gold-link">OAB/MG-231.840</a> (Subseção Venda Nova).
                            </div>
                        </div>
                        <p>
                            Minha atuação é pautada pela transparência, ética e pelo compromisso com a prevenção de litígios através de estratégias de compliance e mediação, sempre buscando o melhor resultado para meus clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
