import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - FIXED
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "AEsAC3UstlEZRZPAS",
  SERVICE_ID: "service_v4kcdkg",
  TEMPLATE_ID: "template_t98woo3",
  TO_EMAIL: "chheangsamnang.wu@gmail.com", // ✅ This must exist
};

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

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // ✅ LOG THIS to verify it exists
    console.log('TO_EMAIL:', EMAILJS_CONFIG.TO_EMAIL);

    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL, // ✅ Must be a valid email string
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    console.log('📤 Sending with params:', templateParams); // ✅ Check what's being sent

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent successfully:', response);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('❌ Email send failed:', {
        status: error.status,
        text: error.text,
        message: error.message,
      });
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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

          {status === 'error' && (
            <p className="message-popup-status message-popup-status-error">
              <i className="bi bi-exclamation-circle"></i> Failed to send. Please try again later.
            </p>
          )}

          <button
            type="submit"
            className="message-popup-send"
            disabled={status === 'loading' || status === 'sent'}
          >
            {status === 'loading' ? (
              <>Sending <i className="bi bi-hourglass-split"></i></>
            ) : status === 'sent' ? (
              <>Sent <i className="bi bi-check-circle"></i></>
            ) : (
              <>Send Message <i className="bi bi-arrow-right"></i></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}