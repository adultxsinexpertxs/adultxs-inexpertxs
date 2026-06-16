import "../App.css";

export default function Necesitas() {
  return (
    <main className="page">
      <section className="pageHero darkHero">
        <p className="kicker">¿Qué necesitas?</p>
        <h1>Cuéntanos qué está pasando.</h1>
        <p>
          No tienes que saber exactamente qué necesitas. Para eso estamos:
          escuchamos el problema, entendemos el contexto y buscamos a la persona
          adecuada para ayudarte.
        </p>
      </section>

      <section className="section">
        <h2>¿Con qué necesitas ayuda?</h2>

        <div className="grid">
          <article className="card">
            <h3>Tengo una marca</h3>
            <p>Branding, diseño, contenido, estrategia y comunicación.</p>
          </article>

          <article className="card">
            <h3>Tengo una idea</h3>
            <p>Te ayudamos a aterrizarla, ordenarla y encontrar cómo empezar.</p>
          </article>

          <article className="card">
            <h3>Tengo un evento</h3>
            <p>Producción, fotografía, video, logística y difusión.</p>
          </article>

          <article className="card">
            <h3>Necesito vender más</h3>
            <p>Marketing, redes, contenido, alianzas y estrategia digital.</p>
          </article>

          <article className="card">
            <h3>Necesito organizarme</h3>
            <p>Procesos, finanzas, planeación, administración y estructura.</p>
          </article>

          <article className="card">
            <h3>No sé por dónde empezar</h3>
            <p>Nos cuentas qué pasa y buscamos juntxs el primer paso.</p>
          </article>
        </div>
      </section>

      <section className="section cta">
        <h2>La vida adulta no viene con instrucciones.</h2>
        <p>
          Pero no tienes que resolver todo solx. Cuéntanos qué necesitas y vemos
          cómo ayudarte.
        </p>

        <a href="/contactanos" className="btnPrimary">
          Necesito ayuda
        </a>
      </section>
    </main>
  );
}