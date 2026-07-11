import { type KeyboardEvent, type MouseEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const SESSION_KEY = "adultxs-credential-modal-seen";
const CREDENTIAL_URL = "/credencial.html";
const OPEN_DELAY_MS = 650;
const CLOSE_ANIMATION_MS = 220;

export default function ClubCredentialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || sessionStorage.getItem(SESSION_KEY) === "seen") {
      return;
    }

    const openTimer = window.setTimeout(() => {
      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setIsOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(openTimer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeModal() {
    sessionStorage.setItem(SESSION_KEY, "seen");
    setIsClosing(true);

    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      previousFocusRef.current?.focus();
    }, CLOSE_ANIMATION_MS);
  }

  function handleCredentialClick() {
    sessionStorage.setItem(SESSION_KEY, "seen");
    setIsOpen(false);
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (document.activeElement === dialogRef.current) {
      event.preventDefault();
      (event.shiftKey ? lastElement : firstElement).focus();
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (!isOpen || location.pathname !== "/") {
    return null;
  }

  return (
    <div
      className={`credential-modal-overlay${isClosing ? " is-closing" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="credential-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-modal-title"
        aria-describedby="credential-modal-description"
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
      >
        <button
          className="credential-modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Cerrar invitación a la credencial"
        >
          ×
        </button>

        <p className="section-label">El club</p>
        <h2 id="credential-modal-title">Tu inexperiencia también merece credencial.</h2>
        <div id="credential-modal-description">
          <p>Únete al Club de lxs Adultxs Inexpertxs y crea tu credencial digital.</p>
          <p>
            No necesitas saberlo todo para pertenecer. Solo tener ganas de seguir jugando,
            aprendiendo, equivocándote y volviendo a intentar.
          </p>
        </div>

        <div className="credential-modal-actions">
          <a className="button button-primary" href={CREDENTIAL_URL} onClick={handleCredentialClick}>
            Quiero mi credencial
          </a>
          <button className="button button-secondary" type="button" onClick={closeModal}>
            Seguir explorando
          </button>
        </div>
      </div>
    </div>
  );
}
