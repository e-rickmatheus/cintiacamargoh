import React from 'react';
import './Differentiators.css';

const Differentiators = () => {
    return (
        <section className="differentiators">
            <div className="container">
                <div className="diff-grid">
                    <div className="diff-item reveal">
                        <span className="diff-number">01</span>
                        <h3>Clareza Jurídica</h3>
                        <p>Tradução do "juridiquês" para uma linguagem simples e acessível.</p>
                    </div>
                    <div className="diff-item reveal">
                        <span className="diff-number">02</span>
                        <h3>Foco Preventivo</h3>
                        <p>Estratégias voltadas para evitar conflitos e proteger seu patrimônio.</p>
                    </div>
                    <div className="diff-item reveal">
                        <span className="diff-number">03</span>
                        <h3>Atendimento Humanizado</h3>
                        <p>Escuta ativa e acompanhamento próximo em cada etapa do processo.</p>
                    </div>
                    <div className="diff-item reveal">
                        <span className="diff-number">04</span>
                        <h3>Excelência Técnica</h3>
                        <p>Atualização constante e rigor profissional reconhecido institucionalmente.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
