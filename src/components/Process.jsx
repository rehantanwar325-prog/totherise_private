import { Search, Target, Settings, Rocket } from 'lucide-react';
const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We dive deep into your business goals, audience, and challenges to create a solid foundation for success.',
        icon: <Search size={32} />,
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'We craft a tailored strategy combining the right tech, marketing channels, and automation workflows.',
        icon: <Target size={32} />,
    },
    {
        number: '03',
        title: 'Development',
        description: 'Our engineers build, integrate, and deploy using modern stacks — clean code, scalable systems.',
        icon: <Settings size={32} />,
    },
    {
        number: '04',
        title: 'Launch & Grow',
        description: 'We launch your project, monitor performance, optimize continuously, and provide ongoing support.',
        icon: <Rocket size={32} />,
    },
];

export default function Process() {
    return (
        <section id="process" className="prc">
            <div className="container prc__inner">
                <div className="prc__header reveal">
                    <div className="section-badge" style={{ margin: '0 auto 24px' }}>
                        <span className="section-badge-dot" />
                        Our Process
                    </div>
                    <h2 className="section-title section-title--dark">
                        Your Journey with <span className="text-gradient">Us</span>
                    </h2>
                    <p className="section-subtitle section-subtitle--dark">
                        A proven 4-step process that takes you from idea to launch efficiently.
                    </p>
                </div>

                <div className="prc__timeline">
                    {steps.map((step, i) => (
                        <div key={step.number} className={`prc__step reveal-scale delay-${i + 1}`}>
                            <div className="prc__step-num">{step.number}</div>
                            <div className="prc__step-line" />
                            <div className="prc__step-content">
                                <span className="prc__step-icon">{step.icon}</span>
                                <h3 className="prc__step-title">{step.title}</h3>
                                <p className="prc__step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .prc {
          background: transparent;
          padding: 120px 0;
          position: relative;
          z-index: 1;
        }
        .prc__header {
          text-align: center;
          margin-bottom: 70px;
        }
        .prc__header .section-subtitle {
          margin: 0 auto;
        }
        .prc__header .section-badge {
          margin: 0 auto 24px;
        }
        .prc__timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .prc__step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .prc__step-num {
          width: 54px; height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          background: var(--gradient-primary);
          margin-bottom: 0;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 20px var(--purple-glow);
          border: 2px solid rgba(255,255,255,0.2);
        }
        .prc__step-line {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, var(--purple), transparent);
          opacity: 0.6;
        }
        .prc__step-content {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 40px 24px;
          width: 100%;
          transition: var(--transition-smooth);
          backdrop-filter: blur(8px);
          position: relative;
        }
        .prc__step-content:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--purple);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 
                      0 0 20px var(--purple-glow);
        }
        .prc__step-icon {
          font-size: 2.2rem;
          display: block;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
        }
        .prc__step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 12px;
        }
        .prc__step-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .prc__timeline { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .prc__timeline { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; }
          .prc { padding: 60px 0; }
        }
      `}</style>
        </section>
    );
}
