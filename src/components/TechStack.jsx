import { Code, Triangle, Brain, Bot, Zap, Globe, Cpu, BarChart, Smartphone, ShoppingBag } from 'lucide-react';
const tools = [
  { name: 'React', icon: <Code size={20} /> },
  { name: 'Next.js', icon: <Triangle size={20} /> },
  { name: 'OpenAI', icon: <Brain size={20} /> },
  { name: 'Claude AI', icon: <Bot size={20} /> },
  { name: 'Make.com', icon: <Zap size={20} /> },
  { name: 'Node.js', icon: <Globe size={20} /> },
  { name: 'Python', icon: <Cpu size={20} /> },
  { name: 'Google Ads', icon: <BarChart size={20} /> },
  { name: 'Meta Ads', icon: <Smartphone size={20} /> },
  { name: 'Shopify', icon: <ShoppingBag size={20} /> },
];

export default function TechStack() {
  return (
    <section className="tech">
      <div className="container tech__inner">
        <div className="tech__header reveal">
          <div className="section-badge">
            <span className="section-badge-dot" />
            Our Tech Stack
          </div>
          <h2 className="section-title section-title--dark">
            Powered by <span className="text-gradient">Best-in-Class</span> Tools
          </h2>
          <p className="section-subtitle section-subtitle--dark" style={{ margin: '0 auto' }}>
            We leverage the latest technologies and AI platforms to build powerful solutions.
          </p>
        </div>

        <div className="tech__marquee">
          <div className="tech__track">
            {[...tools, ...tools].map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="tech__chip">
                <span className="tech__chip-icon">{tool.icon}</span>
                <span className="tech__chip-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tech {
          background: transparent;
          padding: 100px 0;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }
        .tech__header {
          text-align: center;
          margin-bottom: 60px;
        }
        .tech__header .section-badge {
          margin: 0 auto 24px;
        }
        .tech__marquee {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
        }
        .tech__track {
          display: flex;
          gap: 20px;
          animation: marquee 40s linear infinite;
          width: max-content;
          padding: 20px 0;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech__chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 28px;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          backdrop-filter: blur(8px);
          white-space: nowrap;
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }
        .tech__chip:hover {
          border-color: var(--purple);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 
                      0 0 15px var(--purple-glow);
        }
        .tech__chip-icon {
          font-size: 1.5rem;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
        }
        .tech__chip-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-white);
        }
      `}</style>
    </section>
  );
}
