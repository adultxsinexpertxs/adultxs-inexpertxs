import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

const KEY = "adultxs-original-drop-announcement-seen";
const SERVICE_ID = "service_1e5bts8";
const TEMPLATE_ID = "template_l88dy68";
const PUBLIC_KEY = "nKbNsYsJlPL9MffMx";

export default function OriginalDropPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const dialog = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || sessionStorage.getItem(KEY)) return;
    let timer: number | undefined;
    const check = () => {
      const progress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progress < 0.3 || timer) return;
      timer = window.setTimeout(() => {
        timer = undefined;
        if (document.querySelector(".credential-modal-overlay")) return;
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
    const onKey = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape" && status !== "sending") close(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", onKey); };
  }, [open, status]);

  function close() {
    if (status === "sending") return;
    sessionStorage.setItem(KEY, "seen");
    setOpen(false);
    window.requestAnimationFrame(() => lastFocus.current?.focus());
  }
  function onOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) close();
  }
  function onDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialog.current) return;
    const nodes = dialog.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled])');
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (document.activeElement === dialog.current) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || company || !consent || name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setStatus("sending");
    try {
      // Existing contact email template: delivers a labeled notification to the team inbox.
      // This is NOT a subscriber database or an automated marketing mailing list.
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: "REGISTRO DE INTERÉS — PREVENTA PLAYERA ORIGINAL. Solicita aviso de novedades del próximo drop. Consentimiento explícito para recibir avisos de esta preventa: SÍ.",
      }, PUBLIC_KEY);
      setStatus("success");
      sessionStorage.setItem(KEY, "seen");
    } catch {
      setStatus("error");
    }
  }

  if (!open || pathname !== "/") return null;
  return <div className="drop-overlay" onMouseDown={onOverlayClick}>
    <div className="drop-dialog" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="drop-title" aria-describedby="drop-description" tabIndex={-1} onKeyDown={onDialogKeyDown}>
      <button className="drop-close" onClick={close} aria-label="Cerrar registro de preventa" disabled={status === "sending"}>×</button>
      <div className="drop-image"><img src="/images/merch/playera-frente.png" alt="Playera original negra de Adultxs Inexpertxs" /></div>
      <div className="drop-copy">
        <p className="drop-kicker">EL CLUB / PRÓXIMO DROP / MODELO ORIGINAL</p>
        {status === "success" ? <>
          <h2 id="drop-title">YA ESTÁS<br/>EN LA LISTA.</h2>
          <p id="drop-description">Recibimos tu registro de interés. Te avisaremos cuando haya novedades de la preventa.</p>
          <button className="drop-primary" type="button" onClick={close}>SEGUIR EXPLORANDO <span aria-hidden="true">↗</span></button>
        </> : <>
          <h2 id="drop-title">LA ORIGINAL<br/>ESTÁ DE VUELTA.</h2>
          <p id="drop-description">La playera con la que empezó todo prepara su regreso. Déjanos tus datos para enterarte de la preventa.</p>
          <form className="drop-form" onSubmit={submit}>
            <div className="drop-honeypot" aria-hidden="true"><label htmlFor="drop-company">Empresa</label><input id="drop-company" value={company} onChange={e=>setCompany(e.target.value)} tabIndex={-1} autoComplete="off"/></div>
            <label htmlFor="drop-name">TU NOMBRE</label>
            <input id="drop-name" type="text" autoComplete="name" required minLength={2} maxLength={100} value={name} onChange={e=>setName(e.target.value)} disabled={status==="sending"} placeholder="¿Cómo te llamas?"/>
            <label htmlFor="drop-email">TU CORREO</label>
            <input id="drop-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} disabled={status==="sending"} placeholder="tu@correo.com"/>
            <label className="drop-consent"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} disabled={status==="sending"}/><span>Acepto recibir por correo información sobre la preventa de la playera original. <Link to="/aviso-privacidad" onClick={close}>Aviso de privacidad</Link>.</span></label>
            <button className="drop-primary" type="submit" disabled={status==="sending"}>{status==="sending"?"REGISTRANDO...":"QUIERO ENTERARME PRIMERO"} <span aria-hidden="true">↗</span></button>
            {status==="error" && <p className="drop-error" role="alert">No pudimos completar tu registro. Intenta de nuevo.</p>}
          </form>
          <p className="drop-note">Sin fecha ni precio anunciados. Este registro no es una compra ni una reserva.</p>
          <button className="drop-secondary" onClick={close}>SEGUIR EXPLORANDO</button>
        </>}
      </div>
    </div>
  </div>;
}
