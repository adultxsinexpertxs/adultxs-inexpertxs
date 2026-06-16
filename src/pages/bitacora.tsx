export default function Bitacora() {
  const posts = [
    {
      tag: "Guía de supervivencia",
      title: "Cómo cotizar un proyecto sin entrar en crisis",
      text: "Una nota para aprender a cobrar sin sentir que estás inventando números al azar.",
    },
    {
      tag: "Colaboraciones",
      title: "Lo que aprendimos armando nuestra primera colaboración",
      text: "Spoiler: nadie sabía exactamente qué estaba haciendo, pero salió.",
    },
    {
      tag: "Ideas",
      title: "Ideas que empezaron como broma y terminaron en proyecto",
      text: "A veces lo más real nace de un ‘¿y si hacemos esto?’ contado con honestidad.",
    },
    {
      tag: "Clientes",
      title: "Manual rápido para sobrevivir a un cliente",
      text: "Respira, manda lo mínimo viable, cobra por lo que vales y no te vendas barato.",
    },
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Proceso &gt; perfección</p>
        <h1 className="h1">Bitácora</h1>
        <p className="lead">
          Historias de errores útiles, decisiones a medias y ganas de seguir
          intentando.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-2">
          {posts.map((post) => (
            <article className="card" key={post.title}>
              <span className="tag">{post.tag}</span>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}