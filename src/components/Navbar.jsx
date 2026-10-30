import { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import useEscapeKey from '../hooks/useEscapeKey';
import useMediaQuery from '../hooks/useMediaQuery';
import { navItems } from '../data/navigation';

export default function Navbar({ onContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery('(min-width: 901px)');

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  // Close everything after route changes, Escape, or growing to desktop width.
  useEffect(closeAll, [pathname, closeAll]);
  useEffect(() => {
    if (isDesktop) closeAll();
  }, [isDesktop, closeAll]);
  useEscapeKey(closeAll, menuOpen || openDropdown !== null);

  // Tap outside the navbar to close the mobile menu.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onDown = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [menuOpen]);

  const handleContact = () => {
    closeAll();
    onContact();
  };

  return (
    <nav className={`navbar${menuOpen ? ' open' : ''}`} aria-label="Main">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-mark">AJ</span>
          <span className="brand-name-solo">Portfolio</span>
        </div>

        <button
          type="button"
          className="nav-toggle-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <div className="links" id="nav-links">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <NavLink key={item.to} to={item.to} end>
                {item.label}
              </NavLink>
            ) : (
              <Dropdown
                key={item.id}
                item={item}
                open={openDropdown === item.id}
                onToggle={(next) => setOpenDropdown(next ? item.id : null)}
                onNavigate={closeAll}
              />
            )
          )}
          <button type="button" className="links-button" onClick={handleContact}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
