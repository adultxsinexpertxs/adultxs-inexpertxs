import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

const KEY = "adultxs-original-drop-announcement-seen";

export default function OriginalDropPopup() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || sessionStorage.getItem(KEY)) return;
    let timer: number | undefined;
    const check = () => {
      const progress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progress < 0.3 || timer) return;
      // Don't compete with the existing club-credential popup.
      timer = window.setTimeout(() => {
        if (document.querySelector(".credential-modal-overlay")) {
          timer = undefined;
          return;
        }
        lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setOpen(true);
        window.removeEventListener("scroll", check);
      }, 750);
    };
    window.addEventListener("scroll", check, { passive: true });
    return () => { window.removeEventListener("scroll", check); if (timer) window.clearTimeout(timer); };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.focus();
    const onKey = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", onKey); };
  }, [open]);

  function close() {
    sessionStorage.setItem(KEY, "seen");
    setOpen(false);
    window.requestAnimationFrame(() => lastFocus.current?.focus());
  }
  function onOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) close();
  }
  function onDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialog.current) return;
    const nodes = dialog.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (document.activeElement === dialog.current) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  if (!open || pathname !== "/") return null;
  return <div className="drop-overlay" onMouseDown={onOverlayClick}>
    <div className="drop-dialog" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="drop-title" aria-describedby="drop-description" tabIndex={-1} onKeyDown={onDialogKeyDown}>
      <button className="drop-close" onClick={close} aria-label="Cerrar anuncio de preventa">×</button>
      <div className="drop-image"><img src="/images/merch/playera-frente.png" alt="Playera original negra de Adultxs Inexpertxs" /></div>
      <div className="drop-copy">
        <p className="drop-kicker">EL CLUB / PRÓXIMO DROP / MODELO ORIGINAL</p>
        <h2 id="drop-title">LA ORIGINAL<br/>ESTÁ DE VUELTA.</h2>
        <p id="drop-description">La playera con la que empezó todo prepara su regreso. La preventa del próximo drop viene en camino.</p>
        <p className="drop-note">Aún sin fecha ni precio anunciados.</p>
        <Link className="drop-primary" to="/merch/playera" onClick={close}>CONOCE LA PLAYERA <span aria-hidden="true">↗</span></Link>
        <button className="drop-secondary" onClick={close}>SEGUIR EXPLORANDO</button>
      </div>
    </div>
  </div>;
}
