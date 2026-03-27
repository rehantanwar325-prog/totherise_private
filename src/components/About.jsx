import { useState } from 'react';
import { Globe, Bot, TrendingUp, Smartphone, Laptop, Shield } from 'lucide-react';

const aboutCards = [
    { icon: <Globe size={24} />, title: 'Web Development', desc: 'Modern, fast, and responsive websites tailored to your brand.' },
    { icon: <Bot size={24} />, title: 'AI Automation', desc: 'Smart systems that automate tasks and boost efficiency.' },
    { icon: <TrendingUp size={24} />, title: 'Digital Marketing', desc: 'Strategies that grow traffic, leads, and revenue.' },
    { icon: <Smartphone size={24} />, title: 'App Development', desc: 'High-performance iOS and Android applications for your business.' },
    { icon: <Laptop size={24} />, title: 'Custom Software', desc: 'Tailor-made solutions to solve your unique business challenges.' },
    { icon: <Shield size={24} />, title: 'Ongoing Support', desc: '24/7 support and optimization to keep you ahead.' },
];

export default function About() {
  const [tiltStates, setTiltStates] = useState({});

  const handleMouseMove = (id, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    setTiltStates(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeave = (id) => {
    setTiltStates(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
        <section id="about" className="abt">
            <div className="container abt__inner">
                <div className="abt__content reveal-left">
                    <div className="section-badge">
                        <span className="section-badge-dot" />
                        About Us
                    </div>
                    <h2 className="section-title section-title--dark">
                        We Help Businesses<br />
                        <span className="text-gradient">Scale with Technology</span>
                    </h2>
                    <p className="abt__text">
                        <strong className="abt__highlight">Totherise</strong> is a team of passionate developers, AI engineers,
                        and digital marketers combining <strong className="abt__highlight">creativity</strong> and <strong className="abt__highlight">technology</strong> to deliver
                        solutions that truly make a difference.
                    </p>
                    <p className="abt__text">
                        We've worked with <strong className="abt__highlight">50+ businesses</strong> across industries — helping them
                        build stunning digital presences, automate operations, and drive measurable growth.
                    </p>
                    <a href="#contact" className="btn-primary abt__cta">
                        Work With Us
                    </a>
                </div>

                <div className="abt__cards reveal-right delay-2">
                    {aboutCards.map((card, idx) => (
                        <div 
                          key={card.title} 
                          className="abt__card"
                          onMouseMove={(e) => handleMouseMove(idx, e)}
                          onMouseLeave={() => handleMouseLeave(idx)}
                          style={{
                            transform: tiltStates[idx] 
                              ? `perspective(1000px) rotateX(${tiltStates[idx].x}deg) rotateY(${tiltStates[idx].y}deg)` 
                              : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                          }}
                        >
                            <span className="abt__card-icon">{card.icon}</span>
                            <div>
                                <h4 className="abt__card-title">{card.title}</h4>
                                <p className="abt__card-desc">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .abt {
          background: transparent;
          padding: 120px 0;
          position: relative;
          z-index: 1;
        }
        .abt__inner {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 70px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .abt__text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .abt__highlight {
          color: var(--purple);
          font-weight: 700;
          text-shadow: 0 0 10px var(--purple-glow);
        }
        .abt__cta {
          margin-top: 30px;
          box-shadow: 0 4px 15px var(--purple-glow);
        }
        .abt__cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .abt__card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 30px 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: var(--transition-smooth);
          backdrop-filter: blur(5px);
        }
        .abt__card:hover {
          border-color: var(--purple);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 
                      0 0 15px var(--purple-glow);
        }
        .abt__card-icon {
          font-size: 2rem;
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
        }
        .abt__card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 6px;
        }
        .abt__card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .abt { padding: 60px 0; }
          .abt__inner {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 8px;
          }
          .abt__text { font-size: 0.95rem; }
          .abt__cards { grid-template-columns: 1fr; }
          .abt__card { padding: 24px 18px; }
          .abt__cta { width: 100%; text-align: center; justify-content: center; }
        }
      `}</style>
        </section>
    );
}
