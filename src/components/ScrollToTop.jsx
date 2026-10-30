import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Start every page at the top after navigating. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
