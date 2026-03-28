import { Instagram, Linkedin, TwitterX } from './SocialIcons';
const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = ['Web Development', 'AI Automation', 'Digital Marketing', 'App Development', 'Custom Software'];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container ftr__inner">
        <div className="ftr__grid reveal">
          <div className="ftr__brand">
            <a href="#home" className="ftr__logo" aria-label="Totherise Home">
              <svg className="ftr__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#ftrGrad)" />
                <path d="M10 22V12h3v10h-3zM14 22V9h3v13h-3zM18 22V14h3v8h-3zM22 22V11h3v11h-3z" fill="white" opacity="0.95"/>
                <defs><linearGradient id="ftrGrad" x1="2" y1="2" x2="30" y2="30"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#a855f7"/></linearGradient></defs>
              </svg>
              <span className="ftr__logo-text">Totherise</span>
            </a>
            <p className="ftr__tagline">
              Building the future of digital — one project at a time. Websites, AI, and marketing that drive results.
            </p>
            <div className="ftr__social">
              <a href="#" className="ftr__social-link" aria-label="Twitter"><TwitterX size={18} /></a>
              <a href="#" className="ftr__social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="ftr__social-link" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="ftr__col">
            <h4 className="ftr__col-title">Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="ftr__link">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="ftr__col">
            <h4 className="ftr__col-title">Services</h4>
            <ul>
              {serviceLinks.map((s) => (
                <li key={s}><a href="#services" className="ftr__link">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="ftr__col">
            <h4 className="ftr__col-title">Contact</h4>
            <ul>
              <li className="ftr__contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:rehantanwar325@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>rehantanwar325@gmail.com</a>
              </li>
              <li className="ftr__contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+917851039925" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7851039925</a>
              </li>
              <li className="ftr__contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Sikar, Rajasthan, India
              </li>
            </ul>
          </div>
        </div>

        <div className="ftr__bottom">
          <p>© {new Date().getFullYear()} Totherise. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .ftr {
          background: rgba(5, 5, 5, 0.4);
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--border-dark);
          padding: 100px 0 40px;
          position: relative;
          z-index: 10;
        }
        .ftr__grid {
          display: grid;
          grid-template-columns: 1.6fr 0.8fr 0.8fr 1fr;
          gap: 60px;
          margin-bottom: 70px;
          max-width: 1200px;
          margin: 0 auto 70px;
        }
        .ftr__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .ftr__logo-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        }
        .ftr__logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-white);
          letter-spacing: -0.5px;
        }
        .ftr__tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }
        .ftr__social {
          display: flex;
          gap: 12px;
        }
        .ftr__social-link {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }
        .ftr__social-link:hover {
          border-color: var(--purple);
          color: var(--text-white);
          background: rgba(139, 92, 246, 0.1);
          transform: translateY(-4px);
          box-shadow: 0 0 15px var(--purple-glow);
        }
        .ftr__col-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-white);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }
        .ftr__link {
          display: block;
          font-size: 0.95rem;
          color: var(--text-muted);
          padding: 6px 0;
          transition: var(--transition-smooth);
        }
        .ftr__link:hover {
          color: var(--purple);
          transform: translateX(5px);
        }
        .ftr__contact-item {
          font-size: 0.95rem;
          color: var(--text-muted);
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ftr__bottom {
          border-top: 1px solid var(--border-dark);
          padding-top: 30px;
          text-align: center;
        }
        .ftr__bottom p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .ftr__grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 480px) {
          .ftr__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
