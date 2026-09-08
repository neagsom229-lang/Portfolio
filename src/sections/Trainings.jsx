import { useState } from 'react';
import trainings from '../data/trainings.js';

function TrainingRow({ training, reversed }) {
  const images = training.images || [];
  const hasImages = images.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goToIndex = (e, index) => {
    e.stopPropagation(); // prevent media click from firing
    setActiveIndex(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToNext();
    }
  };

  return (
    <div
      className={`training-row${reversed ? ' training-row-reversed' : ''}`}
      data-aos="fade-up"
    >
      <div className="training-media">
        {hasImages ? (
          <div
            className="training-media-slider"
            role="button"
            tabIndex={0}
            onClick={goToNext}
            onKeyDown={handleKeyDown}
            aria-label={`${training.title} photo ${activeIndex + 1} of ${images.length}. Click to see next photo.`}
          >
            <img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${training.title} — photo ${activeIndex + 1} of ${images.length}`}
              loading="lazy"
              className="training-media-img"
            />

            {images.length > 1 && (
              <div className="training-media-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`training-media-dot${index === activeIndex ? ' is-active' : ''}`}
                    onClick={(e) => goToIndex(e, index)}
                    aria-label={`Go to photo ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="training-media-placeholder">
            <i className="bi bi-image"></i>
            <span>Add photo</span>
          </div>
        )}
      </div>

      <div className="training-content">
        <div className="training-heading-row">
          <h3>{training.title}</h3>
          <span className="training-date">{training.date}</span>
        </div>
        <p className="training-org">{training.org}</p>
        <p className="training-description">{training.description}</p>

        {training.certificateUrl ? (
          <a
            href={training.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="training-cert-link"
          >
            {(training.certificateLabel || 'Certificate').toUpperCase()} <i className="bi bi-box-arrow-up-right"></i>
          </a>
        ) : (
          <span className="training-cert-link training-cert-link-disabled">
            {(training.certificateLabel || 'Certificate').toUpperCase()} — add link
          </span>
        )}
      </div>
    </div>
  );
}

export default function Trainings() {
  return (
    <section id="trainings" className="trainings section">
      <div className="container section-title">
        <span className="eyebrow">Skills &amp; Experience</span>
        <h2>Trainings &amp; Activities<span className="blink-caret">|</span></h2>
        <p>Events, Activities, and hands-on trainings I&apos;ve taken part in — add your own as you complete them.</p>
      </div>
      <div className="container">
        <div className="training-list">
          {trainings.map((training, index) => (
            <TrainingRow key={training.id} training={training} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}