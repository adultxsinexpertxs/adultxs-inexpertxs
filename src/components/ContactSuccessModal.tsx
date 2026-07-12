import { type KeyboardEvent, type MouseEvent, type RefObject, useEffect, useRef } from "react";

type ContactSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

export default function ContactSuccessModal({
  isOpen,
  onClose,
  returnFocusRef,
}: ContactSuccessModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const returnFocusElement = returnFocusRef?.current ?? null;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => dialogRef.current?.focus());

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusElement?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose();
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      event.preventDefault();
      dialogRef.current.focus();
    } else if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && (document.activeElement === lastElement || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="credential-modal-overlay" onMouseDown={handleOverlayClick}>
      <div
        ref={dialogRef}
        className="credential-modal contact-success-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-success-title"
        aria-describedby="contact-success-description"
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
      >
        <button
          className="credential-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar confirmación de mensaje enviado"
        >
          ×
        </button>

        <p className="section-label">MENSAJE ENVIADO</p>
        <h2 id="contact-success-title">YA LLEGÓ A NUESTRA BITÁCORA.</h2>
        <div id="contact-success-description" className="contact-success-description">
          <p>Gracias por escribirnos. Leemos cada mensaje con calma y te responderemos lo antes posible.</p>
          <p>Mientras tanto, sigue jugando, creando y equivocándote.</p>
        </div>

        <div className="credential-modal-actions">
          <button className="button button-primary" type="button" onClick={onClose}>
            SEGUIR EXPLORANDO
          </button>
        </div>
      </div>
    </div>
  );
}
