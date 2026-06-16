export default function Comunidad() {
  const items = [
    {
      title: "Talento",
      text: "Diseño, música, foto, video y personas que prefieren crear juntas antes que esperarse.",
    },
    {
      title: "Ideas",
      text: "Proyectos que nacen de ocurrencias, chistes malos y ganas de ver qué pasa.",
    },
    {
      title: "Colaboraciones",
      text: "Cruces entre gente, marcas y proyectos que no siempre sabíamos cómo nombrar.",
    },
    {
      title: "Experiencias",
      text: "Encuentros, talleres y activaciones que pasan antes de que alguien los catalogue.",
    },
    {
      title: "Aprendizaje colectivo",
      text: "No tenemos todas las respuestas, pero sí el espacio para equivocarnos juntas.",
    },
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Por qué nos juntamos</p>
        <h1 className="h1">Comunidad</h1>
        <p className="lead">
          Tenemos ganas de encontrar a otras personas que sienten lo mismo: que
          la adultez está complicada, pero igual vale la pena mover algo.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">
          {items.map((item, index) => (
            <article className="card" key={item.title}>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}