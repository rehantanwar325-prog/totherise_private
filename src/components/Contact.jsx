import { useState } from 'react';
import { Mail, Phone, MapPin, Check, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [tiltStates, setTiltStates] = useState({});

  const handleMouseMove = (id, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((centerX - x) / centerX) * 8;
    setTiltStates(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeave = (id) => {
    setTiltStates(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rehantanwar325@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New message from ${form.name} via Totherise website`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="ctc">
      <div className="container ctc__inner">
        <div className="ctc__header reveal">
          <div className="section-badge" style={{ margin: '0 auto 24px' }}>
            <span className="section-badge-dot" />
            Contact Us
          </div>
          <h2 className="section-title section-title--dark" style={{ textAlign: 'center' }}>
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="section-subtitle section-subtitle--dark" style={{ textAlign: 'center', margin: '0 auto' }}>
            Have a project in mind? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="ctc__grid">
          <form 
            className="ctc__form reveal-left delay-1" 
            onSubmit={handleSubmit}
            onMouseMove={(e) => handleMouseMove('form', e)}
            onMouseLeave={() => handleMouseLeave('form')}
            style={{
              transform: tiltStates['form'] 
                ? `perspective(1000px) rotateX(${tiltStates['form'].x}deg) rotateY(${tiltStates['form'].y}deg)` 
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
            }}
          >
            <div className="ctc__field">
              <label className="ctc__label" htmlFor="name">Full Name</label>
              <input
                type="text" id="name" name="name" className="ctc__input"
                placeholder="John Doe" value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="ctc__field">
              <label className="ctc__label" htmlFor="email">Email</label>
              <input
                type="email" id="email" name="email" className="ctc__input"
                placeholder="john@example.com" value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="ctc__field">
              <label className="ctc__label" htmlFor="message">Message</label>
              <textarea
                id="message" name="message" className="ctc__input ctc__textarea"
                placeholder="Tell us about your project..." rows={5}
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="btn-primary ctc__submit" disabled={sending}>
              {sending ? 'Sending...' : submitted ? <><Check size={18} /> Message Sent!</> : <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Send Message <ArrowRight size={18} /></span>}
            </button>
            {error && <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
          </form>

          <div className="ctc__info reveal-right delay-2">
            {[
              { 
                icon: <Mail size={24} />, 
                title: 'Email Us', text: 'rehantanwar325@gmail.com', type: 'link', href: 'mailto:rehantanwar325@gmail.com' 
              },
              { 
                icon: <Phone size={24} />, 
                title: 'Call Us', text: '+91 7851039925', type: 'link', href: 'tel:+917851039925' 
              },
              { 
                icon: <MapPin size={24} />, 
                title: 'Located', text: 'India, Rajasthan, Sikar', type: 'text' 
              }
            ].map((info, idx) => (
              <div 
                key={info.title} 
                className="ctc__info-card"
                onMouseMove={(e) => handleMouseMove(`info-${idx}`, e)}
                onMouseLeave={() => handleMouseLeave(`info-${idx}`)}
                style={{
                  transform: tiltStates[`info-${idx}`] 
                    ? `perspective(1000px) rotateX(${tiltStates[`info-${idx}`].x}deg) rotateY(${tiltStates[`info-${idx}`].y}deg)` 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                }}
              >
                <span className="ctc__info-icon">{info.icon}</span>
                <div>
                  <h4 className="ctc__info-title">{info.title}</h4>
                  {info.type === 'link' ? (
                    <a href={info.href} className="ctc__info-text" style={{ textDecoration: 'none' }}>{info.text}</a>
                  ) : (
                    <p className="ctc__info-text">{info.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ctc {
          background: transparent;
          padding: 120px 0;
          position: relative;
          z-index: 1;
        }
        .ctc__header {
          margin-bottom: 70px;
        }
        .ctc__grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ctc__form {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          backdrop-filter: blur(10px);
        }
        .ctc__field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ctc__label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .ctc__input {
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-md);
          color: var(--text-white);
          font-size: 1rem;
          transition: var(--transition-smooth);
        }
        .ctc__input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
        .ctc__input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--purple);
          box-shadow: 0 0 15px var(--purple-glow);
        }
        .ctc__textarea {
          resize: vertical;
          min-height: 150px;
        }
        .ctc__submit {
          width: 100%;
          justify-content: center;
          padding: 18px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          background: var(--gradient-primary);
          box-shadow: 0 4px 15px var(--purple-glow);
        }
        .ctc__submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--purple-glow);
        }
        .ctc__info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ctc__info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 30px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: var(--transition-smooth);
          backdrop-filter: blur(5px);
        }
        .ctc__info-card:hover {
          transform: translateY(-5px);
          border-color: var(--purple);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 
                      0 0 15px var(--purple-glow);
        }
        .ctc__info-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
        }
        .ctc__info-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 4px;
        }
        .ctc__info-text {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .ctc { padding: 60px 0; }
          .ctc__grid { grid-template-columns: 1fr; }
          .ctc__form { padding: 24px 20px; }
        }
      `}</style>
    </section>
  );
}
