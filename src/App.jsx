import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Deliverables from './components/Deliverables';
import WhyVebgenix from './components/WhyVebgenix';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';
import useReveal from './hooks/useReveal';

function App() {
  const [theme, setTheme] = React.useState('dark');
  useReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Scene3D theme={theme} />
      <div className="fixed-background" style={{ zIndex: -1 }}>
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Deliverables />
        <WhyVebgenix />
        <Process />
        <CaseStudies />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
