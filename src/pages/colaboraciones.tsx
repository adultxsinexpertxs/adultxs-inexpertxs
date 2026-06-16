export default function Colaboraciones() {
  const aliados = [
    "Mala Kaffe",
    "La Redención Mezcal",
    "Verde",
    "Café Cien CDMX",
  ];

  const comunidad = [
    "Arte",
    "Música",
    "Diseño",
    "Gastronomía",
    "Finanzas",
    "Experiencias",
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Conexiones reales</p>
        <h1 className="h1">Colaboraciones</h1>
        <p className="lead">
          Aquí están los cruces con otras personas, proyectos y marcas que
          no son perfectos, pero sí sinceros.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-2">
          <article className="card">
            <span className="tag">Aliadxs</span>
            <ul className="clean-list">
              {aliados.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <span className="tag">Proyectos de la comunidad</span>
            <ul className="clean-list">
              {comunidad.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}