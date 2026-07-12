import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Credencial() {
  const [isGenerated, setIsGenerated] = useState(false);
  const [memberName, setMemberName] = useState("NOMBRE");
  const [memberNumber, setMemberNumber] = useState("AI-000000");
  const cardRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const instagramRef = useRef<HTMLInputElement>(null);

  async function sendRegistration(name: string, email: string, instagram: string, number: string) {
    try {
      await fetch("https://formsubmit.co/ajax/20cd713b4c755189d6ceca8f8147e618", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          correo: email,
          instagram,
          numero_socio: number,
          proyecto: "Adultxs Inexpertxs",
        }),
      });
    } catch (error) {
      console.error("No se pudo enviar el registro:", error);
    }
  }

  async function generateCredential() {
    const name = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const instagram = instagramRef.current?.value.trim() ?? "";

    if (!name) {
      alert("Escribe tu nombre.");
      return;
    }

    const random = Math.floor(100000 + Math.random() * 900000);
    const generatedNumber = `AI-${random}`;

    setMemberName(name.toUpperCase());
    setMemberNumber(generatedNumber);
    setIsGenerated(true);

    await sendRegistration(name, email, instagram, generatedNumber);
  }

  async function createCanvas() {
    if (!cardRef.current) {
      throw new Error("No se encontró la credencial.");
    }

    return html2canvas(cardRef.current, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
    });
  }

  async function downloadCard() {
    const canvas = await createCanvas();
    const link = document.createElement("a");

    link.download = "credencial-adultxs-inexpertxs.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function shareCard() {
    const canvas = await createCanvas();

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], "credencial-adultxs-inexpertxs.png", {
        type: "image/png",
      });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Mi credencial Adultxs Inexpertxs",
          text: "Ya tengo mi credencial de Adultxs Inexpertxs.",
          files: [file],
        });
      } else {
        alert("Descarga la imagen y súbela manualmente a Instagram Stories.");
        downloadCard();
      }
    }, "image/png");
  }

  return (
    <main className="credential-page">
      {!isGenerated ? (
        <section className="credential-panel" aria-labelledby="credential-form-title">
          <img className="credential-panel-logo" src="/A_I-04.png" alt="Adultxs Inexpertxs" />
          <h1 id="credential-form-title">Genera tu credencial</h1>
          <p>Llena tus datos y descarga tu credencial oficial de Adultxs Inexpertxs.</p>

          <input ref={nameRef} type="text" placeholder="Tu nombre" />
          <input ref={emailRef} type="email" placeholder="Tu correo" />
          <input ref={instagramRef} type="text" placeholder="Tu Instagram" />

          <button className="button" type="button" onClick={generateCredential}>
            Generar credencial
          </button>

          <Link className="button" to="/">
            Volver al home
          </Link>
        </section>
      ) : (
        <section className="credential-result" aria-labelledby="credential-result-title">
          <h1 id="credential-result-title">Tu credencial</h1>

          <div className="member-card" ref={cardRef}>
            <img className="side-title" src="/side-title.png" alt="Adultx Inexpertx" />
            <img className="big-logo" src="/A_I-04.png" alt="Logo" />

            <div className="card-info">
              <h2>{memberName}</h2>
              <span>SOCIO #{memberNumber}</span>
            </div>
          </div>

          <div className="credential-actions">
            <button className="button" type="button" onClick={downloadCard}>
              Descargar imagen
            </button>
            <button className="button" type="button" onClick={shareCard}>
              Compartir stories
            </button>
          </div>

          <Link className="button" to="/">
            Volver al home
          </Link>
        </section>
      )}
    </main>
  );
}
