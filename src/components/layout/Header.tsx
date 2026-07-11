import { type MouseEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { mainNavItems } from "../../data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <Link className="brand-link" to="/" onClick={closeMenu} aria-label="Adultxs Inexpertxs">
          <img src="/A_I-04.png" alt="" />
        </Link>

        <button
          className={`menu-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Abrir menú"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        {isOpen ? (
          <div className="menu-overlay" onMouseDown={handleOverlayClick}>
            <div className="menu-panel" id="main-menu" ref={panelRef} role="dialog" aria-modal="true" aria-label="Navegación principal">
              <button className="menu-close" type="button" onClick={closeMenu} aria-label="Cerrar menú">
                Cerrar
              </button>

              <div className="nav-links">
                {mainNavItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
