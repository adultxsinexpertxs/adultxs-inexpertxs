import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-left">
          <a href="/aviso-privacidad.html">Aviso de privacidad</a>
        </div>

        <p className="footer-center">El club de lxs Adultxs Inexpertxs</p>

        <div className="footer-social">
          <a
            className="footer-icon-link"
            href="https://www.instagram.com/adultxs_inexpertxs/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
          <Link className="footer-icon-link" to="/contactanos" aria-label="Ir a contacto">
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
