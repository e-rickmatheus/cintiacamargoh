import React from 'react';
import { Briefcase, ShieldCheck, Users, Car, Handshake } from 'lucide-react';
import './PracticeAreas.css';

const areas = [
    {
        title: "Direito do Trabalho",
        description: "Atuação focada na defesa de direitos para reclamantes, com análise detalhada de rescisões, horas extras e verbas devidas.",
        icon: <Briefcase size={40} strokeWidth={1.5} color="#dec067" />
    },
    {
        title: "Compliance Trabalhista",
        description: "Consultoria preventiva para empresas, reduzindo riscos jurídicos e promovendo um ambiente de trabalho ético.",
        icon: <ShieldCheck size={40} strokeWidth={1.5} color="#dec067" />
    },
    {
        title: "Direito de Família",
        description: "Divórcio, guarda, pensão alimentícia e sucessões (inventário e partilha) com acolhimento e agilidade.",
        icon: <Users size={40} strokeWidth={1.5} color="#dec067" />
    },
    {
        title: "Direito de Trânsito",
        description: "Defesa contra multas, suspensão e cassação de CNH. Proteção do seu direito de dirigir.",
        icon: <Car size={40} strokeWidth={1.5} color="#dec067" />
    },
    {
        title: "Parcerias Estratégicas",
        description: "Atuação em rede especializada nas áreas Tributária e Criminal para um suporte jurídico completo.",
        icon: <Handshake size={40} strokeWidth={1.5} color="#dec067" />
    }
];

const PracticeAreas = () => {
    // Duplicate areas for infinite scroll effect
    const duplicatedAreas = [...areas, ...areas];

    return (
        <section id="atuacao" className="practice-areas">
            <div className="container-full">
                <h2 className="section-title">Áreas de Atuação</h2>
                <div className="carousel-container">
                    <div className="carousel-track">
                        {duplicatedAreas.map((area, index) => (
                            <div key={index} className="area-card-carousel">
                                <div className="area-icon">{area.icon}</div>
                                <h3 className="area-title">{area.title}</h3>
                                <p className="area-text">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
