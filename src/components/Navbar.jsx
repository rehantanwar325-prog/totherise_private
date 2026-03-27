import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <svg className="nav__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#navGrad)" />
            <path d="M10 22V12h3v10h-3zM14 22V9h3v13h-3zM18 22V14h3v8h-3zM22 22V11h3v11h-3z" fill="white" opacity="0.95"/>
            <defs><linearGradient id="navGrad" x1="2" y1="2" x2="30" y2="30"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#a855f7"/></linearGradient></defs>
          </svg>
          <span className="nav__logo-text">Totherise</span>
        </a>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-cta" style={{ textAlign: 'center', margin: '12px 0' }}>
            <a href="tel:+917851039925" className="nav__link" style={{ fontSize: '1.1rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} onClick={() => setMenuOpen(false)}>
              <Phone size={20} /> +91 7851039925
            </a>
          </li>
          <li className="nav__mobile-cta">
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
              Let's Talk
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="nav__desktop-actions">
          <a href="tel:+917851039925" style={{ color: 'var(--text-white)', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="nav__desktop-phone">
            <Phone size={18} /> +91 7851039925
          </a>
          <a href="#contact" className="btn-primary nav__desktop-cta">
            Let's Talk
          </a>
        </div>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 40px 24px;
          transition: var(--transition-smooth);
        }
        .nav--scrolled {
          padding: 12px 24px;
          background: rgba(5, 5, 5, 0.4);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid var(--border-dark);
        }
        .nav__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .nav__logo-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        }
        .nav__logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-white);
          letter-spacing: -0.5px;
        }
        .nav__links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .nav__link {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-light-muted);
          transition: var(--transition-smooth);
        }
        .nav__link:hover {
          color: var(--text-white);
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
        .nav__desktop-cta {
          padding: 10px 22px;
          font-size: 0.85rem;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          box-shadow: 0 4px 15px var(--purple-glow);
        }
        .nav__desktop-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--purple-glow);
        }
        .nav__mobile-cta {
          display: none;
        }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 4px;
        }
        .nav__burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-white);
          border-radius: 2px;
          transition: var(--transition-smooth);
        }
        .nav__burger--open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .nav__burger--open span:nth-child(2) { opacity: 0; }
        .nav__burger--open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 768px) {
          .nav { padding: 16px 16px; }
          .nav--scrolled { padding: 10px 16px; }
          .nav__links {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100vh;
            background: rgba(5, 5, 5, 0.98);
            backdrop-filter: blur(24px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 28px;
            transition: var(--transition-smooth);
            opacity: 0;
            pointer-events: none;
            z-index: 999;
          }
          .nav__links--open { opacity: 1; pointer-events: all; }
          .nav__link { font-size: 1.2rem; }
          .nav__desktop-phone { display: none; }
          .nav__desktop-cta { display: none; }
          .nav__mobile-cta { display: block; }
          .nav__burger { display: flex; z-index: 1001; }
          .nav__logo-text { font-size: 1.2rem; }
          .nav__logo-icon { width: 32px; height: 32px; }
        }
      `}</style>
    </nav>
  );
}
