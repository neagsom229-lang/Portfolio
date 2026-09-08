import GradientBlobs from '../components/GradientBlobs.jsx';
import capabilities, { techIcons } from '../data/capabilities.js';

export default function Services() {
  return (
    <section id="services" className="services section">
      <GradientBlobs />

      <div className="container">
        <div className="services-layout">
          <div className="services-intro">
            <span className="eyebrow">My Capabilities</span>
            <h2>What I Can Do<span className="blink-caret">|</span></h2>
            <p>
              I combine technical, problem-solving, and digital skills to build reliable
              systems, test systems, manage data, and support efficient digital workflows.
            </p>

            <div className="services-icon-grid">
              {techIcons.map((tool) => (
                <span key={tool.label} className="services-icon-tile" title={tool.label}>
                  <i className={tool.icon}></i>
                </span>
              ))}
            </div>
          </div>

          <div className="services-cards">
            {capabilities.map((capability, index) => (
              <div className="capability-card" key={capability.id}>
                <div className="capability-card-top">
                  <span className="capability-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="capability-eyebrow">{capability.eyebrow}</span>
                </div>

                <div className="capability-icon">
                  <i className={capability.icon}></i>
                </div>

                <p className="capability-description">{capability.description}</p>

                <div className="capability-deliverables">
                  {capability.deliverables.map((item) => (
                    <span key={item} className="capability-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
