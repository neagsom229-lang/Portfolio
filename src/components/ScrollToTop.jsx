import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position to the top whenever the route changes,
// since each route now renders different page content.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
