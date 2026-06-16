import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <main className="home">
      <section className="hero heroDark">
  <h1>
    Jugar, equivocarnos y seguir construyendo <br />
    sin que nadie nos lo tenga que explicar
  </h1>

  <p className="heroText">
    Un lugar para inventar proyectos, compartir aprendizajes y disfrutar la
    vida adulta sin fingir que sabemos cómo se hace.
  </p>

  <div className="heroButtons">
    <Link to="/comunidad" className="btnHero">
      Conócenos
    </Link>

    <Link to="/comunidad" className="btnHero">
      Comunidad
    </Link>
  </div>
</section>

      <section className="section intro">
        <h2>¿Quiénes somos?</h2>

        <p>
          Somos personas que prefieren hacer en vez de esperar el permiso.
          Construimos, nos equivocamos, celebramos los aprendizajes y seguimos
          adelante con ganas de movernos juntas.
        </p>
      </section>

      <section className="section">
        <h2>Lo que hacemos</h2>

        <div className="grid">
          <article className="card">
            <h3>Creatividad</h3>
            <p>
              Diseño, branding, ilustración, ideas visuales y conceptos que
              empiezan como juego y terminan tomando forma.
            </p>
          </article>

          <article className="card">
            <h3>Producción</h3>
            <p>
              Foto, video, contenido, eventos y experiencias que documentan lo
              que pasa cuando la comunidad se mueve.
            </p>
          </article>

          <article className="card">
            <h3>Estrategia</h3>
            <p>
              Marketing, comunicación, medios, relaciones públicas y formas más
              claras de contar lo que estamos construyendo.
            </p>
          </article>

          <article className="card">
            <h3>Comunidad</h3>
            <p>
              Personas, colaboraciones, talentos y proyectos que se conectan
              desde la curiosidad, no desde la perfección.
            </p>
          </article>
        </div>
      </section>

      <section className="section featured">
        <h2>Proyectos que nacen aquí</h2>

        <p>
          Aquí compartimos lo que hacemos mientras aprendemos. Los proyectos no
          son el final, son la excusa para probar, cambiar y seguir creciendo.
        </p>

        <div className="projectList">
          <Link to="/proyectos">VERDE</Link>
          <Link to="/proyectos">Dinero en Acción</Link>
          <Link to="/proyectos">La Redención</Link>
          <Link to="/proyectos">Café Cien</Link>
        </div>
      </section>

      <section className="section quote">
        <h2>Nunca dejamos de ser inexpertxs.</h2>
        <p>
          Y tal vez ahí está el punto: seguir intentando, seguir jugando y seguir
          construyendo aunque no tengamos todo resuelto.
        </p>
      </section>

      <section className="section cta">
        <h2>¿Quieres sumar?</h2>

        <p>
          Si tienes una idea, un proyecto medio raro o simplemente ganas de
          juntarte con personas que no esperan ser perfectas, aquí hay un lugar.
        </p>

        <Link to="/contactanos" className="btnPrimary">
          Escríbenos
        </Link>
      </section>
    </main>
  );
}