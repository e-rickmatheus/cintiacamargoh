import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="logo-wrapper" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
                            <span className="logo-icon logo-icon-sm"></span>
                            <span className="logo-text"><span className="white-text">Cíntia</span> <span className="gold">Camargoh</span></span>
                        </div>
                        <p className="white-text">Advogada • <a href="https://www.oabmg.org.br/Consulta/DadosInscrito/MjI2MDg1" target="_blank" rel="noopener noreferrer" className="oab-link">OAB/MG-231.840</a></p>
                    </div>
                    <div className="footer-info">
                        <p>© 2026 Cíntia Camargoh. Todos os direitos reservados.</p>
                        <p className="developer-credit">
                            Feito por <a href="https://www.mathrick.com.br/" target="_blank" rel="noopener noreferrer">MATHRICK LAB</a>
                        </p>
                        <p className="legal-disclaimer">
                            Este site tem caráter meramente informativo e institucional, em conformidade com o Código de Ética e Disciplina da OAB.
                            Nenhum conteúdo aqui exposto constitui promessa de resultado jurídico.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
