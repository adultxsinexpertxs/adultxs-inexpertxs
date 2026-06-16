import { Link } from "react-router-dom";

export default function Proyectos() {
  const categories = [
    {
      title: "Creatividad",
      items: ["Branding", "Diseño gráfico", "Ilustración", "Dirección creativa"],
    },
    {
      title: "Producción",
      items: ["Fotografía", "Video", "Audio", "Producción audiovisual"],
    },
    {
      title: "Digital",
      items: [
        "Desarrollo web",
        "Marketing digital",
        "Community management",
        "Estrategia de contenido",
      ],
    },
    {
      title: "Experiencias",
      items: ["Eventos", "Activaciones", "Talleres", "Colaboraciones"],
    },
    {
      title: "Finanzas y estructura",
      items: ["Presupuestos", "Administración", "Planeación", "Cotizaciones"],
    },
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Lo que se experimenta</p>
        <h1 className="h1">Proyectos</h1>
        <p className="lead">
          Son ideas medio a medias, pruebas de fuego y cosas que crecen porque
          alguien se animó a intentarlo.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">
          {categories.map((category) => (
            <article className="card" key={category.title}>
              <span className="tag">{category.title}</span>
              <ul className="clean-list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-sm">
        <article className="card text-center">
          <h2 className="text-4xl uppercase md:text-6xl">
            ¿Tienes una idea que suena rara pero te gusta?
          </h2>
          <Link className="btn-primary mx-auto mt-6" to="/contactanos">
            Cuéntanos
          </Link>
        </article>
      </section>
    </main>
  );
}