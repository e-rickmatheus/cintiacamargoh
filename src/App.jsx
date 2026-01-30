import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Differentiators from './components/Differentiators';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useReveal from './hooks/useReveal';

function App() {
  useReveal();
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Differentiators />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
