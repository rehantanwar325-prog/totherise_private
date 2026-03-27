import { useState } from 'react';
import { Zap, TrendingUp, Bot, Target } from 'lucide-react';

export default function Hero() {
    const [tiltStates, setTiltStates] = useState({});

    const handleMouseMove = (id, e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * (id === 'main' ? 5 : 10);
        const rotateY = ((centerX - x) / centerX) * (id === 'main' ? 5 : 10);
        setTiltStates(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
    };

    const handleMouseLeave = (id) => {
        setTiltStates(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
    };

    return (
        <section id="home" className="hero">
            <div 
              className="hero__content"
              onMouseMove={(e) => handleMouseMove('main', e)}
              onMouseLeave={() => handleMouseLeave('main')}
              style={{
                transform: tiltStates['main'] 
                  ? `perspective(1000px) rotateX(${tiltStates['main'].x}deg) rotateY(${tiltStates['main'].y}deg)` 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
              }}
            >


                <h1 className="hero__title reveal delay-1">
                    Transform Your Business<br />
                    To The <span className="text-gradient">Next Digital Level</span>
                </h1>

                <p className="hero__subtitle reveal delay-2">
                    Custom websites, mobile apps, AI automation, and tailored software
                    solutions for businesses ready to grow and scale fast.
                </p>

                <div className="hero__actions reveal delay-3">
                    <a href="#services" className="btn-primary">
                        Explore Services
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Book a Call
                    </a>
                </div>
            </div>

            {/* Stats strip */}
            <div className="hero__stats reveal delay-4">
                {[
                  { icon: <Zap size={24} />, value: '90%', label: 'Faster Delivery' },
                  { icon: <TrendingUp size={24} />, value: '3x', label: 'Revenue Growth' },
                  { icon: <Bot size={24} />, value: '24/7', label: 'AI Automation' },
                  { icon: <Target size={24} />, value: '150+', label: 'Projects Done' }
                ].map((stat, idx) => (
                  <div 
                    key={stat.label} 
                    className="hero__stat-card"
                    onMouseMove={(e) => handleMouseMove(`stat-${idx}`, e)}
                    onMouseLeave={() => handleMouseLeave(`stat-${idx}`)}
                    style={{
                      transform: tiltStates[`stat-${idx}`] 
                        ? `perspective(1000px) rotateX(${tiltStates[`stat-${idx}`].x}deg) rotateY(${tiltStates[`stat-${idx}`].y}deg)` 
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                    }}
                  >
                      <span className="hero__stat-icon">{stat.icon}</span>
                      <div>
                          <span className="hero__stat-value">{stat.value}</span>
                          <span className="hero__stat-label">{stat.label}</span>
                      </div>
                  </div>
                ))}
            </div>

            <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 160px 24px 60px;
          overflow: hidden;
          background: transparent !important;
        }

        /* ---- Content ---- */
        .hero__content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
        }
        .hero__title {
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 24px;
          letter-spacing: -2px;
          color: var(--text-white);
        }
        .hero__subtitle {
          font-size: 1.1rem;
          color: var(--text-light-muted);
          max-width: 550px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero__actions .btn-primary,
        .hero__actions .btn-secondary {
          padding: 15px 36px;
          font-size: 0.95rem;
          border-radius: var(--radius-md);
        }

        /* ---- Stats strip ---- */
        .hero__stats {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 70px;
          width: 100%;
          max-width: 900px;
        }
        .hero__stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          border-radius: var(--radius-lg);
          background: transparent;
          border: 1px solid var(--border-dark);
          transition: var(--transition-smooth);
          flex: 1;
          min-width: 180px;
          backdrop-filter: blur(5px);
        }
        .hero__stat-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          background: rgba(139, 92, 246, 0.08);
          transform: translateY(-2px);
        }
        .hero__stat-icon {
          font-size: 1.6rem;
        }
        .hero__stat-value {
          display: block;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-white);
        }
        .hero__stat-label {
          font-size: 0.75rem;
          color: var(--text-light-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 16px 40px;
          }
          .hero__title {
            font-size: 2.2rem !important;
            line-height: 1.15;
          }
          .hero__subtitle {
            font-size: 0.95rem !important;
            padding: 0 8px;
          }
          .hero__buttons {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            padding: 0 16px;
          }
          .hero__buttons a, .hero__buttons button {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .hero__stats {
            margin-top: 40px;
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            width: 100%;
            padding: 0 8px;
          }
          .hero__stat-card {
            min-width: unset;
            padding: 14px 12px;
          }
          .hero__pill { display: none; }
        }
      `}</style>
        </section>
    );
}
