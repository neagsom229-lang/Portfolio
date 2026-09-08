import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero.jsx';
import Portfolio from '../sections/Portfolio.jsx';
import Services from '../sections/Services.jsx';
import About from '../sections/About.jsx';
import Awards from '../sections/Awards.jsx';
import Trainings from '../sections/Trainings.jsx';
import Resume from '../sections/Resume.jsx';
import Contact from '../sections/Contact.jsx';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;
    // Wait a tick so the homepage sections exist before we scroll to one.
    const timer = setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Awards />
      <Trainings />
      <Resume />
      <Contact />
    </>
  );
}
