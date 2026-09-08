import { useState } from 'react';
import { OPEN_MESSAGE_POPUP_EVENT } from '../components/MessagePopup.jsx';
import Contact from '../sections/Contact.jsx';
import projects from '../data/projects.js';
import beyondCode from '../data/beyondCode.js';

const TABS = [
  { id: 'technical', label: 'Technical' },
  { id: 'digital', label: 'Digital' },
];

function TechnicalProjectRow({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`tech-project-row${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="tech-project-row-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="tech-project-row-main">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="tech-project-row-side">
          <div className="tech-project-tags">
            {(project.tags || []).map((tag) => (
              <span key={tag} className="tech-project-tag">{tag}</span>
            ))}
          </div>
          <i className={`bi bi-chevron-down tech-project-expand${open ? ' is-open' : ''}`}></i>
        </div>
      </button>

      {open && (
        <div className="tech-project-row-expanded">
          {project.image && (
            <img src={project.image} alt={project.title} loading="lazy" />
          )}
          <div>
            <p className="tech-project-category">{project.category}</p>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="tech-project-visit">
                Visit Project <i className="bi bi-arrow-up-right"></i>
              </a>
            ) : (
              <span className="tech-project-visit tech-project-visit-disabled">Link coming soon</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function BeyondCodeCard({ item }) {
  return (
    <div className="beyond-code-card">
      {item.image ? (
        <img src={item.image} alt={item.title} loading="lazy" />
      ) : (
        <div className="beyond-code-placeholder">
          <i className="bi bi-image"></i>
        </div>
      )}
      <div className="beyond-code-overlay">
        <span className="beyond-code-category">{item.category}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('technical');

  const openMessagePopup = () => {
    window.dispatchEvent(new Event(OPEN_MESSAGE_POPUP_EVENT));
  };

  return (
    <>
      <section className="portfolio-page-hero section">
        <div className="container">
          <span className="eyebrow">Full Archive</span>
          <h1 className="portfolio-page-title">Portfolio</h1>
          <p className="portfolio-page-sub">
            Every project I&apos;ve built — technical systems and the creative, digital work
            alongside them.
          </p>

          <div className="portfolio-page-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={activeTab === tab.id ? 'is-active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === 'technical' && (
        <section id="technical" className="section">
          <div className="container section-title">
            <span className="eyebrow">Technical</span>
            <h2>Technical Projects<span className="blink-caret">|</span></h2>
            <p>Systems, applications, and websites I&apos;ve designed and built end to end.</p>
          </div>

          <div className="container">
            <div className="tech-project-list">
              {projects.map((project) => (
                <TechnicalProjectRow key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'digital' && (
        <section id="digital" className="section">
          <div className="container section-title">
            <span className="eyebrow">Digital</span>
            <h2>Beyond Code<span className="blink-caret">|</span></h2>
            <p>Creative, visual, content, and digital projects alongside my technical work.</p>
          </div>

          <div className="container">
            <div className="beyond-code-grid">
              {beyondCode.map((item) => (
                <BeyondCodeCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="portfolio-cta-banner section">
        <div className="container portfolio-cta-inner">
          <h2>Let&apos;s build something useful.</h2>
          <button type="button" className="btn-hire" onClick={openMessagePopup}>
            Hire Me
          </button>
        </div>
      </section>

      <Contact />
    </>
  );
}
