import { useState } from "react";
import "./CredencialPopup.css";

export default function CredencialPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="ai-popup-overlay">
      <div className="ai-popup-box">
        <button
          type="button"
          className="ai-close-btn"
          onClick={() => setOpen(false)}
          aria-label="Cerrar popup"
        >
          CERRAR
        </button>

        <h2>¿YA ERES INEXPERTX?</h2>

        <p>
          Saca tu credencial, únete al caos organizado y presume que tú tampoco
          tienes todo resuelto.
        </p>

        <a className="ai-main-link" href="/credencial.html">
          QUIERO MI CREDENCIAL
        </a>
      </div>
    </div>
  );
}