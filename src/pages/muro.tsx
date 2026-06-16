import "../App.css";

const dedicatorias = [
  {
    nombre: "Mi mamá",
    mensaje:
      "Me enseñó que pedir ayuda también es parte de crecer.",
    autor: "Anónimo",
  },
  {
    nombre: "Mi mejor amigx",
    mensaje:
      "Me ayudó cuando no sabía qué hacer con mi primer trabajo.",
    autor: "Adultx Inexpertx",
  },
  {
    nombre: "Mi yo del pasado",
    mensaje:
      "No sabía nada, pero se atrevió a empezar.",
    autor: "Alguien aprendiendo",
  },
];

export default function Muro() {
  return (
    <main className="page">
      <section className="pageHero darkHero">
        <p className="kicker">Muro de lxs Inexpertxs</p>

        <h1>
          Dicen que nadie llega solo a la adultez.
        </h1>

        <p>
          Aquí celebramos a quienes nos dieron una mano, una frase, un empujón o
          un abrazo cuando todo era confuso.
        </p>
      </section>

      <section className="section">
        <h2>Buscar dedicatoria</h2>

        <input
          className="searchInput"
          type="text"
          placeholder="Busca una dedicatoria..."
        />
      </section>

      <section className="section">
        <h2>Dedicatorias</h2>

        <div className="grid">
          {dedicatorias.map((item, index) => (
            <article className="card" key={index}>
              <h3>{item.nombre}</h3>

              <p>
                “{item.mensaje}”
              </p>

              <small>
                — {item.autor}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Agregar dedicatoria</h2>

        <form className="contactForm">
          <input
            type="text"
            placeholder="Nombre de quien te inspiró"
          />

          <textarea
            rows={6}
            placeholder="Escribe por qué agradeces su ayuda"
          />

          <input
            type="text"
            placeholder="Tu nombre (opcional)"
          />

          <input
            type="text"
            placeholder="Instagram o referencia (opcional)"
          />

          <button
            type="submit"
            className="btnPrimary"
          >
            Compartir agradecimiento
          </button>
        </form>
      </section>
    </main>
  );
}