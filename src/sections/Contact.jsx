import { OPEN_MESSAGE_POPUP_EVENT } from '../components/MessagePopup.jsx';

export default function Contact() {
  const openMessagePopup = () => {
    window.dispatchEvent(new Event(OPEN_MESSAGE_POPUP_EVENT));
  };

  const scrollToResume = (e) => {
    e.preventDefault();
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="row gy-5 align-items-start">
          {/* Left column - mega heading, subtitle, CTAs */}
          <div className="col-lg-6">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="contact-mega">LET&apos;S WORK<br />TOGETHER</h2>
            <p className="contact-mega-sub">Looking for the next problem worth solving.</p>
            <p className="contact-mega-body">
              I&apos;m open to opportunities where I can contribute to software testing, web
              development, IT operations, and digital workflows.
            </p>

            <div className="contact-cta-row">
              <button type="button" className="btn-outline-modern" onClick={openMessagePopup}>
                Send Me a Message
              </button>
              {/* Points to the on-page Resume section by default — swap this
                  href for a real PDF path (e.g. /assets/files/resume.pdf)
                  once you add one to public/assets/files/. */}
              <a href="#resume" className="btn-gradient" onClick={scrollToResume}>
                Download Resume <i className="bi bi-arrow-down"></i>
              </a>
            </div>
          </div>

          {/* Right column - stacked contact cards */}
          <div className="col-lg-6">
            <div className="contact-card-list">
              <a href="mailto:chheangsamnang.wu@gmail.com" className="contact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="contact-card-icon"><i className="bi bi-envelope"></i></span>
                  <div>
                    <p className="contact-card-label">Email</p>
                    <p className="contact-card-value">chheangsamnang.wu@gmail.com</p>
                  </div>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a href="https://github.com/neagsom229-lang" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="contact-card-icon"><i className="bi bi-github"></i></span>
                  <div>
                    <p className="contact-card-label">GitHub</p>
                    <p className="contact-card-value">github.com/neagsom229-lang</p>
                  </div>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a href="https://www.linkedin.com/in/chheang-samnang-b95825406" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="contact-card-icon"><i className="bi bi-linkedin"></i></span>
                  <div>
                    <p className="contact-card-label">LinkedIn</p>
                    <p className="contact-card-value">Chheang Samnang</p>
                  </div>
                </div>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a href="tel:+855979325903" className="contact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="contact-card-icon"><i className="bi bi-telephone"></i></span>
                  <div>
                    <p className="contact-card-label">Phone</p>
                    <p className="contact-card-value">+855 979 325 903</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
