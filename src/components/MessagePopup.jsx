import { useEffect, useState } from 'react';

// Any button anywhere in the app can open this widget by dispatching:
//   window.dispatchEvent(new Event('open-message-popup'))
// See the "Send Me a Message" button in sections/Contact.jsx.
export const OPEN_MESSAGE_POPUP_EVENT = 'open-message-popup';

export default function MessagePopup() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handleOpen = () => {
      setOpen(true);
      setMinimized(false);
    };
    window.addEventListener(OPEN_MESSAGE_POPUP_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_MESSAGE_POPUP_EVENT, handleOpen);
  }, []);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 700);
  };

  return (
    <div className={`message-popup${minimized ? ' is-minimized' : ''}`} role="dialog" aria-label="Send a message">
      <div className="message-popup-header">
        <span>Send Me a Message</span>
        <div className="message-popup-controls">
          <button
            type="button"
            aria-label={minimized ? 'Expand' : 'Minimize'}
            onClick={() => setMinimized((v) => !v)}
          >
            <i className={`bi ${minimized ? 'bi-chevron-up' : 'bi-dash-lg'}`}></i>
          </button>
          <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>

      {!minimized && (
        <form className="message-popup-body" onSubmit={handleSubmit}>
          <label htmlFor="popup-name">Full Name</label>
          <input
            id="popup-name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="popup-email">Email Address</label>
          <input
            id="popup-email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="popup-message">Message</label>
          <textarea
            id="popup-message"
            name="message"
            rows="4"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          {status === 'sent' && (
            <p className="message-popup-status message-popup-status-sent">
              <i className="bi bi-check-circle"></i> Message sent — thank you!
            </p>
          )}

          <button type="submit" className="message-popup-send" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : (<>Send Message <i className="bi bi-arrow-right"></i></>)}
          </button>
        </form>
      )}
    </div>
  );
}
