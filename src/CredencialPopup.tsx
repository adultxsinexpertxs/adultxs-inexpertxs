import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./CredencialPopup.css";

export default function CredencialPopup() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(true);
  const [generated, setGenerated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [memberNumber, setMemberNumber] = useState("");

  const sendRegistration = async (newMemberNumber: string) => {
    try {
      await fetch("https://formsubmit.co/ajax/adultosinexpertos@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          correo: email,
          instagram: instagram,
          numero_socio: newMemberNumber,
          proyecto: "Adultxs Inexpertxs",
        }),
      });
    } catch (error) {
      console.error("Error al enviar registro:", error);
    }
  };

  const generateCard = async () => {
    if (!name.trim()) {
      alert("Escribe tu nombre");
      return;
    }

    const random = Math.floor(100000 + Math.random() * 900000);
    const newMemberNumber = `AI-${random}`;

    setMemberNumber(newMemberNumber);
    setGenerated(true);
    setOpen(false);

    await sendRegistration(newMemberNumber);
  };

  const createImage = async () => {
    if (!cardRef.current) return null;

    return await html2canvas(cardRef.current, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
    });
  };

  const downloadImage = async () => {
    const canvas = await createImage();
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "credencial-adultxs-inexpertxs.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const shareImage = async () => {
    const canvas = await createImage();
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], "credencial-adultxs-inexpertxs.png", {
        type: "image/png",
      });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Mi credencial Adultxs Inexpertxs",
          text: "Ya tengo mi credencial de Adultxs Inexpertxs.",
          files: [file],
        });
      } else {
        alert("Descarga la imagen y súbela manualmente a Instagram Stories.");
        downloadImage();
      }
    }, "image/png");
  };

  return (
    <>
      {open && (
        <div className="ai-popup-overlay">
          <div className="ai-popup-box">
            <button className="ai-close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h2>¿YA ERES INEXPERTX?</h2>
            <p>Llena tus datos y descarga tu credencial oficial.</p>

            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Tu Instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />

            <button className="ai-main-btn" onClick={generateCard}>
              GENERAR CREDENCIAL
            </button>
          </div>
        </div>
      )}

      {generated && (
        <section className="ai-card-section">
          <h2>TU CREDENCIAL</h2>

          <div className="ai-member-card" ref={cardRef}>
            <div className="ai-side-text">ADULTX INEXPERTX</div>

            <img className="ai-small-logo" src="/A_I-04.png" alt="Logo" />

            <img className="ai-big-logo" src="/A_I-04.png" alt="Logo" />

            <div className="ai-card-info">
              <h3>{name.toUpperCase()}</h3>
              <p>SOCIO #{memberNumber}</p>
            </div>
          </div>

          <div className="ai-card-actions">
            <button onClick={downloadImage}>DESCARGAR IMAGEN</button>
            <button onClick={shareImage}>COMPARTIR EN STORIES</button>
          </div>
        </section>
      )}
    </>
  );
}