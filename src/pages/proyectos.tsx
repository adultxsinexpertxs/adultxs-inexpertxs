export default function Proyectos() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Lo que hacemos</p>

        <h1 className="h1">PROYECTOS</h1>

        <p className="lead">
          Ideas, marcas, eventos, contenido y colaboraciones desarrolladas
          bajo el sello Adultxs Inexpertxs.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">

          <article className="card">
            <span className="tag">Creatividad</span>
            <h2>Diseño e identidad</h2>
            <p>
              Desarrollo de conceptos, identidad visual y narrativa.
            </p>
          </article>

          <article className="card">
            <span className="tag">Contenido</span>
            <h2>Producción</h2>
            <p>
              Fotografía, video, ilustración y contenido digital.
            </p>
          </article>

          <article className="card">
            <span className="tag">Experiencias</span>
            <h2>Eventos</h2>
            <p>
              Activaciones, colaboraciones y experiencias presenciales.
            </p>
          </article>

        </div>
      </section>
    </main>
  );
}