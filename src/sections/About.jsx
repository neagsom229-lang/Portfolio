import { useEffect, useRef, useState } from 'react';
import TiltCard from '../components/TiltCard.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';

// ============================================
// COUNTER COMPONENT (Stats)
// ============================================
function Counter({ end, icon, label, sublabel }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1000;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <TiltCard className="stats-item" maxTilt={12}>
        <i className={icon}></i>
        <span className="purecounter">{count}</span>
        <p>
          <strong>{label}</strong> <span>{sublabel}</span>
        </p>
      </TiltCard>
    </div>
  );
}

// ============================================
// SKILL BAR COMPONENT (Hard Skills)
// ============================================
function SkillBar({ name, value }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="progress" ref={ref}>
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width}%`, transition: 'width 1s ease-in-out' }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

// ============================================
// SOFT SKILL CARD COMPONENT
// ============================================
function SoftSkillCard({ icon, title, description, delay }) {
  return (
    <div 
      className="col-lg-3 col-md-6"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="soft-skill-card">
        <div className="soft-skill-icon">{icon}</div>
        <h4 className="soft-skill-title">{title}</h4>
        <p className="soft-skill-description">{description}</p>
        <div className="soft-skill-glow"></div>
      </div>
    </div>
  );
}

// ============================================
// MAIN ABOUT COMPONENT
// ============================================
export default function About() {
  const softSkills = [
    {
      icon: '🤝',
      title: 'Collaboration',
      // description: 'Cross-functional teamwork with designers, product managers, and stakeholders',
      delay: 0.05
    },
    {
      icon: '💬',
      title: 'Communication',
      // description: 'Clear technical documentation, presentations, and client-facing conversations',
      delay: 0.12
    },
    {
      icon: '🧠',
      title: 'Problem Solving',
      // description: 'Analytical thinking to break down complex challenges into actionable solutions',
      delay: 0.19
    },
    {
      icon: '🚀',
      title: 'Adaptability',
      // description: 'Fast learner who thrives in agile environments and embraces new technologies',
      delay: 0.26
    },
    {
      icon: '⏱️',
      title: 'Time Management',
      // description: 'Prioritization and delivery of high-quality work within tight deadlines',
      delay: 0.33
    },
    {
      icon: '🎨',
      title: 'Design Thinking',
      // description: 'User-first mindset bridging the gap between design and development',
      delay: 0.40
    },
    {
      icon: '📈',
      title: 'Leadership',
      // description: 'Mentoring junior developers and driving technical decisions',
      delay: 0.47
    },
    {
      icon: '🔍',
      title: 'Attention to Detail',
      // description: 'Pixel-perfect implementations with obsessive quality control',
      delay: 0.54
    }
  ];

  // --- TRAIT SLIDER LOGIC (NEW) ---
  const traitTitles = softSkills.map(skill => skill.title);   // <--- NEW: extract titles
  const [traitIndex, setTraitIndex] = useState(0);            // <--- NEW: current trait

  const handleTraitClick = () => {                            // <--- NEW: click handler
    setTraitIndex((prev) => (prev + 1) % traitTitles.length);
  };
  // --------------------------------

  return (
    <>
      {/* ==========================================
          ABOUT SECTION
          ========================================== */}
      <section id="about" className="about section">
        <div className="container section-title">
          <span className="eyebrow">About Me</span>
          <h2 className="about-kicker">Problem Solver. Digital Generalist.<span className="blink-caret">|</span></h2>
        </div>

        <div className="container">
          <div className="about-profile-row">
            <img
              src="/assets/img/my-profile-img.jpg"
              className="about-avatar"
              alt="Chheang Samnang"
            />
            <div>
              <h3 className="about-name">
                Chheang Samnang <i className="bi bi-patch-check-fill about-verified"></i>
              </h3>
              <div className="about-meta-row">
                <div>
                  <strong>15+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>1 yr</strong>
                  <span>Experience</span>
                </div>
                <div>
                  <strong>2028</strong>
                  <span>BSc Graduating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-body-row">
            <div className="about-body-text">
              <p>
                I am CS student with experience in frontend web development and project
                implementation. Developed e-commerce and booking system applications with
                an emphasis on responsive design and user experience. Continuously improving
                programming and networking skills through academic studies and personal
                projects. Passionate about learning new technologies, solving real-world
                problems, and contributing to innovative development teams.
              </p>
              <p>
                Designed and developed a full-stack web application with responsive UI/UX, secure authentication,
                database management, RESTful APIs, payment integration, inventory management, and an admin
                dashboard for efficient business operations.
              </p>
              <p>
                Want to know more about my experience?{' '}
                <a
                  href="#resume"
                  className="about-resume-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See my journey
                </a>.
              </p>

              <div className="currently-row">
                <div className="currently-item">
                  <span className="icon-box"><i className="bi bi-code-slash"></i></span>
                  <div>
                    <h5>Building</h5>
                    <p>Web &amp; digital projects</p>
                  </div>
                </div>
                <div className="currently-item">
                  <span className="icon-box"><i className="bi bi-search"></i></span>
                  <div>
                    <h5>Exploring</h5>
                    <p>Software testing &amp; QA</p>
                  </div>
                </div>
                <div className="currently-item">
                  <span className="icon-box"><i className="bi bi-rocket-takeoff"></i></span>
                  <div>
                    <h5>Learning</h5>
                    <p>Full-stack development</p>
                  </div>
                </div>
              </div>
            </div>

<div
  className="about-trait-card"
  onClick={handleTraitClick}
  role="button"
  tabIndex={0}
  style={{ cursor: 'pointer' }}
>
  <span className="about-trait-label">Trait</span>
  <span key={traitIndex} className="about-trait-word">
    {traitTitles[traitIndex]}
    <span className="about-trait-sparkle" aria-hidden="true">✦</span>
  </span>

  {/* dots row — optional addition, purely visual */}
  <div className="about-trait-dots" aria-hidden="true">
    {traitTitles.map((_, i) => (
      <span
        key={i}
        className={`about-trait-dot ${i === traitIndex ? 'is-active' : ''}`}
      />
    ))}
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}