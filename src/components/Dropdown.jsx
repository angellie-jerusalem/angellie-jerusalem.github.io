import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Dropdown({ item, open, onToggle, onNavigate }) {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const contentId = `dropdown-${item.id}`;

  const links = item.featured ? [item.featured, ...item.items] : item.items;
  const isCurrent = links.some((l) => pathname === l.to);

  // Close when clicking anywhere outside this dropdown.
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onToggle(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [open, onToggle]);

  return (
    <div ref={ref} className={`dropdown-menu${open ? ' active' : ''}`}>
      <button
        type="button"
        className={`dropdown-toggle${isCurrent ? ' active' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => onToggle(!open)}
      >
        {item.label}
        <span className="dropdown-arrow" aria-hidden="true">▼</span>
      </button>

      <div className="dropdown-content" id={contentId}>
        {item.featured && (
          <>
            <NavLink
              to={item.featured.to}
              end
              className="dropdown-featured"
              onClick={onNavigate}
              tabIndex={open ? 0 : -1}
            >
              <span className="dd-title">{item.featured.title}</span>
              <span className="sub">{item.featured.sub}</span>
            </NavLink>
            <div className="dropdown-divider" />
          </>
        )}
        {item.items.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={onNavigate} tabIndex={open ? 0 : -1}>
            <span className="dd-label">{link.eyebrow}</span>
            <span className="dd-title">{link.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
