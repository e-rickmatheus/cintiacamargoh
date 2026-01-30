import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-wrapper">
            <span className="logo-icon logo-icon-sm"></span>
            <div className="logo-text-group">
              <span className="logo-text"><span className="white-text">Cíntia</span> <span className="gold">Camargoh</span></span>
              <span className="logo-sub white-text">ADVOGADA</span>
            </div>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#atuacao">Atuação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="header-cta">
          <a href="https://wa.me/5531971086382?text=Prezada%20Dra.%20C%C3%ADntia%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20atendimento.%20Vi%20seu%20contato%20atrav%C3%A9s%20do%20seu%20site." className="btn btn-outline btn-sm">WhatsApp</a>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2VV1exzU2Y2pBxnF5rZEvyWasrz475wHZmhBCjDWMHPk7azve9pRo0QBioNNyY7d96YhweRQa3" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Agendar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
