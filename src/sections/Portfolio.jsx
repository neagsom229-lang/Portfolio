import { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(projects.length - 1);
  const active = projects[activeIndex];
  const count = projects.length;

  return (
    <section id="work" className="portfolio section">
      <div className="container section-title work-gallery-title-row">
        <div>
          <span className="eyebrow">Selected Work</span>
          <h2>Work Gallery<span className="blink-caret">|</span></h2>
          <p>A collection of systems, digital projects, and technical work I&apos;ve built.</p>
        </div>
        <Link to="/portfolio" className="btn-outline-modern work-gallery-more-btn">
          View More Projects <i className="bi bi-box-arrow-up-right"></i>
        </Link>
      </div>

      <div className="container">
        <div className="work-gallery-stage">
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                className={`work-card${isActive ? ' is-active' : ''}`}
                style={{
                  transform: `translateX(calc(-50% + ${offset * 140}px)) translateY(${isActive ? -14 : 0}px) scale(${isActive ? 1.04 : 0.94})`,
                  zIndex: count - Math.abs(offset),
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="work-card-placeholder">
                    <i className="bi bi-globe2"></i>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="work-gallery-info">
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          {active.url ? (
            <a href={active.url} target="_blank" rel="noopener noreferrer">
              View Project <i className="bi bi-arrow-up-right"></i>
            </a>
          ) : (
            <span style={{ color: 'var(--text-faint)', fontSize: 13 }}>Link coming soon</span>
          )}
        </div>
      </div>
    </section>
  );
}
