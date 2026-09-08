import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollTop from './ScrollTop.jsx';
import Preloader from './Preloader.jsx';
import ScrollProgress from './ScrollProgress.jsx';
import MessagePopup from './MessagePopup.jsx';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="main">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
      {/* Mounted once here (not per-page) so it persists across route
          changes, matching the reference video where it follows you
          between sections and the standalone Portfolio page. */}
      <MessagePopup />
    </>
  );
}
