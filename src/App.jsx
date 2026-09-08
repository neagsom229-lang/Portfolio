import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Standalone Portfolio page: full project archive (Technical + Beyond Code). */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* Single-page portfolio: every other route renders the same scrolling page. */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
