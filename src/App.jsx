import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve to keep it visible after scrolling past
          observer.unobserve(entry.target);        
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <CustomCursor />
      <Background3D />
      <div className="perspective-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <TechStack />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
