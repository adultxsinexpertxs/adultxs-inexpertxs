export default function Experiencias() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Vivir antes que mostrar</p>

        <h1 className="h1">EXPERIENCIAS</h1>

        <p className="lead">
          Lo que cuenta no es lo bien que se ve, sino lo que pasa mientras lo
          hacemos.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">

          <article className="card">
            <h2>Talleres</h2>
            <p>
              Lugares para probar, equivocarse con compañía y salir con algo
              nuevo bajo el brazo.
            </p>
          </article>

          <article className="card">
            <h2>Eventos</h2>
            <p>
              Encuentros donde las ideas se mezclan, sin presión, solo ganas de
              mover algo.
            </p>
          </article>

          <article className="card">
            <h2>Comunidad</h2>
            <p>
              Personas que no tienen todas las respuestas, pero sí muchas ganas de
              estar presentes.
            </p>
          </article>

        </div>
      </section>
    </main>
  );
}