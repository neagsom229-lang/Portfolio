import awards from '../data/awards.js';
import awardPhotos from '../data/awardPhotos.js';

const PLACEHOLDER_TILES = 6;

export default function Awards() {
  const tiles = Array.from({ length: PLACEHOLDER_TILES }, (_, i) => awardPhotos[i] || null);

  return (
    <section id="awards" className="awards section">
      <div className="container section-title">
        <span className="eyebrow">Recognition</span>
        <h2>Awards and Achievements<span className="blink-caret">|</span></h2>
        <p>A collection of academic and professional recognitions — add your own photos and certificates here.</p>
      </div>

      <div className="container">
        <div className="awards-layout">
          <div className="awards-photo-grid">
            {tiles.map((src, i) =>
              src ? (
                <img key={i} src={src} alt="" className="awards-photo" />
              ) : (
                <div key={i} className="awards-photo awards-photo-placeholder">
                  <i className="bi bi-image"></i>
                  <span>Add photo</span>
                </div>
              )
            )}
          </div>

          <div className="awards-list">
            {awards.map((award) => (
              <a
                key={award.id}
                href={award.link || undefined}
                target={award.link ? '_blank' : undefined}
                rel={award.link ? 'noopener noreferrer' : undefined}
                className={`awards-card${award.link ? '' : ' awards-card-static'}`}
                onClick={(e) => { if (!award.link) e.preventDefault(); }}
              >
                <span className="awards-card-icon"><i className={award.icon}></i></span>
                <span className="awards-card-title">{award.title}</span>
                {award.link && <i className="bi bi-box-arrow-up-right"></i>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
