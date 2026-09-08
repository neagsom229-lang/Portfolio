import { useRef } from 'react';

/**
 * Wraps its children in a card that tilts in 3D following the cursor,
 * with a soft light "glare" that follows the pointer too. Falls back to
 * no movement at all on touch devices (no mousemove events fire there),
 * so it never gets in the way on mobile.
 */
export default function TiltCard({ children, className = '', maxTilt = 10 }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

    const glare = el.querySelector('.tilt-glare');
    if (glare) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.35), transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    const glare = el.querySelector('.tilt-glare');
    if (glare) glare.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span className="tilt-glare" aria-hidden="true"></span>
    </div>
  );
}
