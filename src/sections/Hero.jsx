import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Freelancer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero hero-outline">
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          <span>CHHEANG SAMNANG&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <span>CHHEANG SAMNANG&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <span>CHHEANG SAMNANG&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <span>CHHEANG SAMNANG&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        </div>
      </div>

      <img
        src="/assets/img/my-profile-cutout.png"
        alt="Chheang Samnang"
        className="hero-cutout-photo"
      />

      <p className="hero-role">
        I'm <span ref={typedRef} className="typed"></span>
        <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
      </p>

      <div className="hero-cta">
        <button type="button" className="btn-gradient" onClick={() => scrollToId('work')}>
          View My Work <i className="bi bi-arrow-right"></i>
        </button>
        <button type="button" className="btn-outline-modern" onClick={() => scrollToId('contact')}>
          Get In Touch
        </button>
      </div>

      <div className="hero-scroll-cue">
        <span>Scroll Down</span>
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  );
}
