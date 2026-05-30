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
        >
          CERRAR
        </button>

        <h2>¿YA ERES INEXPERTX?</h2>

        <p>
          Genera tu credencial oficial de Adultxs Inexpertxs.
        </p>

        <a
          className="ai-main-link"
          href="/credencial.html"
        >
          QUIERO MI CREDENCIAL
        </a>

      </div>
    </div>
  );
}

