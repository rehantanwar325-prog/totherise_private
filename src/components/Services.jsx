import { useState } from 'react';
import { Globe, Bot, TrendingUp, Smartphone, Laptop } from 'lucide-react';
const services = [
    {
        icon: <Globe size={40} />,
        title: 'Web Development',
        description: 'Custom websites, modern web apps, e-commerce stores, and CMS solutions built with cutting-edge technologies.',
        features: ['React & Next.js', 'E-Commerce', 'Progressive Web Apps', 'API Integration'],
    },
    {
        icon: <Bot size={40} />,
        title: 'AI Automation',
        description: 'Intelligent chatbots, workflow automation, and AI-powered integrations that save hours of manual work.',
        features: ['AI Chatbots', 'Workflow Automation', 'Data Analytics', 'Custom AI Models'],
    },
    {
        icon: <TrendingUp size={40} />,
        title: 'Digital Marketing',
        description: 'Data-driven SEO, social media campaigns, PPC advertising, and content strategies that drive real results.',
        features: ['SEO Optimization', 'Social Media', 'PPC Campaigns', 'Content Strategy'],
    },
    {
        icon: <Smartphone size={40} />,
        title: 'App Development',
        description: 'High-performance iOS and Android applications with seamless user experiences and robust backend systems.',
        features: ['iOS & Android', 'React Native', 'Flutter', 'Cloud Integration'],
    },
    {
        icon: <Laptop size={40} />,
        title: 'Custom Software',
        description: 'Tailor-made software solutions designed to solve unique business challenges and streamline complex operations.',
        features: ['Enterprise ERP', 'SaaS Development', 'Desktop Apps', 'Legacy Migration'],
    },
];

export default function Services() {
  const [tiltStates, setTiltStates] = useState({});

  const handleMouseMove = (id, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;
    
    setTiltStates(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeave = (id) => {
    setTiltStates(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
    <section id="services" className="svcs">
      <div className="container">
        <div className="svcs__header reveal">
          <div className="section-badge">
            <span className="section-badge-dot" />
            Our Services
          </div>
          <h2 className="section-title section-title--dark">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle section-subtitle--dark">
            End-to-end digital solutions tailored to grow your business, automate your workflows, and amplify your reach.
          </p>
        </div>

        <div className="svcs__grid">
          {services.map((s, idx) => (
            <div 
              key={s.title} 
              className={`svcs__card reveal-scale delay-${idx + 1}`}
              onMouseMove={(e) => handleMouseMove(idx, e)}
              onMouseLeave={() => handleMouseLeave(idx)}
              style={{
                transform: tiltStates[idx] 
                  ? `perspective(1000px) rotateX(${tiltStates[idx].x}deg) rotateY(${tiltStates[idx].y}deg)` 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
              }}
            >
              <div className="svcs__card-icon">{s.icon}</div>
              <h3 className="svcs__card-title">{s.title}</h3>
              <p className="svcs__card-desc">{s.description}</p>
              <div className="svcs__tags">
                {s.features.map((t) => (
                  <span key={t} className="svcs__tag">{t}</span>
                ))}
              </div>
              <a href="#contact" className="svcs__link">
                Learn More <span className="svcs__link-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

            <style>{`
        .abt {
          background: transparent;
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }
        .svcs {
          background: transparent;
          padding: 120px 0;
          position: relative;
          z-index: 1;
        }
        .svcs__header {
          margin-bottom: 70px;
          text-align: center;
        }
        .svcs__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .svcs__card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
        }
        .svcs__card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-surface);
          opacity: 0.5;
          pointer-events: none;
        }
        .svcs__card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--purple);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 
                      0 0 20px var(--purple-glow);
        }
        .svcs__card-icon {
          font-size: 3rem;
          margin-bottom: 24px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
        }
        .svcs__card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 16px;
        }
        .svcs__card-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .svcs__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }
        .svcs__tag {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-light-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid var(--border-dark);
          transition: var(--transition-smooth);
        }
        .svcs__card:hover .svcs__tag {
          border-color: rgba(139, 92, 246, 0.3);
          background: rgba(139, 92, 246, 0.1);
          color: var(--text-white);
        }
        .svcs__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--purple);
          transition: var(--transition-smooth);
        }
        .svcs__link:hover {
          color: var(--pink);
          gap: 10px;
        }
        .svcs__link-arrow {
          transition: var(--transition-smooth);
        }

        @media (max-width: 768px) {
          .svcs { padding: 60px 0; }
          .svcs__header { margin-bottom: 40px; }
          .svcs__grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; gap: 20px; }
          .svcs__card { padding: 28px 20px; }
          .svcs__card-icon { font-size: 2.4rem; margin-bottom: 16px; }
          .svcs__card-title { font-size: 1.2rem; }
        }
      `}</style>
        </section>
    );
}
