export default function Cositas() {
  const products = [
    {
      name: "Playera",
      text: "La prenda para cuando quieres decir ‘aquí estoy’ sin fingir que ya lo tienes todo.",
    },
    {
      name: "Gorra",
      text: "Un parche contra el mundo real, para los días en los que la cabeza se siente pesada.",
    },
    {
      name: "Sudadera",
      text: "Para las sesiones largas, las charlas infinitas y las noches de creatividad a medias.",
    },
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Pequeños aliados</p>
        <h1 className="h1">Cositas para sobrevivir</h1>
        <p className="lead">
          Artículos que no arreglan la vida, pero ayudan a sentirla un poco más
          vivible.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">
          {products.map((product) => (
            <article className="card" key={product.name}>
              <span className="tag">Agotado por ahora</span>
              <h2>{product.name}</h2>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}