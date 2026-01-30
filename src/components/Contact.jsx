import React from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contato" className="contact">
            <div className="container">
                <h2 className="section-title">Entre em Contato</h2>
                <div className="contact-grid">
                    <div className="contact-info reveal reveal-left">
                        <h3>Informações de Contato</h3>
                        <p>Estamos prontos para oferecer a melhor orientação jurídica para o seu caso.</p>

                        <div className="contact-links">
                            <a href="https://wa.me/5531971086382?text=Prezada%20Dra.%20C%C3%ADntia%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20atendimento.%20Vi%20seu%20contato%20atrav%C3%A9s%20do%20seu%20site." target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <span className="contact-icon">
                                    <MessageCircle size={24} strokeWidth={1.5} color="#dec067" />
                                </span>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <p>(31) 9.7108-6382</p>
                                </div>
                            </a>

                            <a href="https://www.google.com/maps/search/?api=1&query=R.+da+Bahia,+1148+-+Centro,+Belo+Horizonte+-+MG" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <span className="contact-icon">
                                    <MapPin size={24} strokeWidth={1.5} color="#dec067" />
                                </span>
                                <div>
                                    <strong>Endereço</strong>
                                    <p>R. da Bahia, 1148 - Centro<br />Belo Horizonte - MG</p>
                                </div>
                            </a>

                            <a href="mailto:cintiacamargoh39.adv@gmail.com" className="contact-link-card">
                                <span className="contact-icon">
                                    <Mail size={24} strokeWidth={1.5} color="#dec067" />
                                </span>
                                <div>
                                    <strong>E-mail</strong>
                                    <p>cintiacamargoh39.adv@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="cta-box">
                            <p>Agende uma consulta para uma análise estratégica do seu caso.</p>
                            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2VV1exzU2Y2pBxnF5rZEvyWasrz475wHZmhBCjDWMHPk7azve9pRo0QBioNNyY7d96YhweRQa3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Consulta</a>
                        </div>
                    </div>

                    <div className="contact-map reveal reveal-right">
                        <iframe
                            src="https://maps.google.com/maps?q=R.%20da%20Bahia,%201148%20-%20Centro,%20Belo%20Horizonte%20-%20MG&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px', borderRadius: '4px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa R. da Bahia, 1148"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
