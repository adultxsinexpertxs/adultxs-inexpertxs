export default function Bitacora() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Proceso &gt; perfección</p>

        <h1 className="h1">BITÁCORA</h1>

        <p className="lead">
          Historias, errores, aprendizajes y pensamientos de quienes intentan
          crear mientras sobreviven a la vida adulta.
        </p>
      </section>

      <section className="section section-sm">
        <div className="grid grid-3">

          <article className="card">
            <span className="tag">Historia</span>
            <h2>Cómo nació Adultxs</h2>
            <p>
              Una entrada para contar el origen del proyecto.
            </p>
          </article>

          <article className="card">
            <span className="tag">Proceso</span>
            <h2>El proyecto que salió mal</h2>
            <p>
              Porque los errores también merecen archivo.
            </p>
          </article>

          <article className="card">
            <span className="tag">Aprendizaje</span>
            <h2>Diseñar sin saber</h2>
            <p>
              Una reflexión sobre empezar antes de sentirse listo.
            </p>
          </article>

        </div>
      </section>
    </main>
  );
}