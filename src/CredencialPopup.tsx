import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./CredencialPopup.css";

export default function CredencialPopup() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(true);
  const [generated, setGenerated] = useState(false);
  const [name, setName] = useState("");
  const [memberNumber, setMemberNumber] = useState("");

  const generateCard = () => {
    if (!name.trim()) {
      alert("Escribe tu nombre");
      return;
    }

    const random = Math.floor(100000 + Math.random() * 900000);
    setMemberNumber(`AI-${random}`);
    setGenerated(true);
    setOpen(false);
  };

  const createImage = async () => {
    if (!cardRef.current) return null;

    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      backgroundColor: null,
    });

    return canvas;
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

      const file = new File(
        [blob],
        "credencial-adultxs-inexpertxs.png",
        { type: "image/png" }
      );

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Mi credencial Adultxs Inexpertxs",
          text: "Ya tengo mi credencial de Adultxs Inexpertxs.",
          files: [file],
        });
      } else {
        alert("Tu navegador no permite compartir directo. Descarga la imagen y súbela a Instagram.");
        downloadImage();
      }
    }, "image/png");
  };

  return (
    <>
      <button className="open-card-btn" onClick={() => setOpen(true)}>
        QUIERO MI CREDENCIAL
      </button>

      {open && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setOpen(false)}>
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

            <button onClick={generateCard}>
              GENERAR CREDENCIAL
            </button>
          </div>
        </div>
      )}

      {generated && (
        <section className="card-section">
          <h2>TU CREDENCIAL</h2>

          <div className="member-card" ref={cardRef}>
            <div className="side-text">ADULTX INEXPERTX</div>

            <img
              className="small-logo"
              src="/A_I-04.png"
              alt="Adultxs Inexpertxs"
            />

            <img
              className="big-logo"
              src="/A_I-04.png"
              alt="Adultxs Inexpertxs"
            />

            <div className="card-info">
              <h3>{name.toUpperCase()}</h3>
              <p>SOCIO #{memberNumber}</p>
            </div>
          </div>

          <div className="card-actions">
            <button onClick={downloadImage}>DESCARGAR IMAGEN</button>
            <button onClick={shareImage}>COMPARTIR EN INSTAGRAM</button>
          </div>
        </section>
      )}
    </>
  );
}