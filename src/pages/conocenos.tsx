import EditorialBlock from "../components/ui/EditorialBlock";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";

const values = [
  {
    title: "Curiosidad",
    text: "Preguntar antes de posar. Mirar dos veces. Aceptar que no saber también abre puertas.",
  },
  {
    title: "Juego",
    text: "La forma más seria que conocemos de aprender sin endurecernos.",
  },
  {
    title: "Comunidad",
    text: "La prueba de que crecer no tiene que sentirse como una tarea solitaria.",
  },
  {
    title: "Proceso",
    text: "Mostrar el intento, no sólo el resultado bonito. Ahí está la parte viva.",
  },
  {
    title: "Aprendizaje",
    text: "Un movimiento compartido, imperfecto y constante.",
  },
];

const imagotipoSrc = "/images/identidad/imagotipo-club-adultxs.png";

export default function Conocenos() {
  return (
    <main>
      <PageHero
        eyebrow="Manual de identidad"
        title="La identidad también cuenta historias."
        subtitle="Adultxs Inexpertxs usa blanco, negro, contraste y voz propia para recordar que crecer no significa dejar de jugar."
        imageSrc={imagotipoSrc}
        imageAlt="Imagotipo Adultxs Inexpertxs"
      />

      <Section
        eyebrow="Filosofía"
        title="Crecer no debería convertirnos en personas aburridas."
        intro="La marca nace de una sospecha: tal vez nadie sabe realmente cómo se hace esto de crecer. Por eso elegimos una identidad directa, flexible y humana, capaz de sostener dudas, proyectos y contradicciones."
      />

      <section className="section imagotipo-layout">
        <figure className="imagotipo-showcase">
          <img src={imagotipoSrc} alt="Imagotipo Adultxs Inexpertxs" />
        </figure>

        <div className="section-header imagotipo-copy">
          <p className="section-label">Imagotipo</p>
          <h2>Una marca que no firma desde arriba: convoca.</h2>
          <p className="lead">
            El imagotipo funciona como punto de reunión. Debe sentirse simple, reconocible y
            suficientemente abierto para vivir en piezas editoriales, productos, experiencias y
            conversaciones.
          </p>
        </div>
      </section>

      <section className="section icon-section">
        <div className="section-header icon-copy">
          <p className="section-label">Ícono</p>
          <h2>La marca también debe poder hablar bajito.</h2>
          <p className="lead">
            El ícono conserva la esencia de Adultxs Inexpertxs cuando el nombre completo no cabe.
            Está pensado para que cualquiera pueda replicarlo con libertad: no tiene que quedar
            perfecto, porque sus pequeñas diferencias también forman parte de su personalidad. Puede
            vivir en avatares, etiquetas, bordados, stickers, favicons y pequeños gestos de
            pertenencia.
          </p>
        </div>

        <figure className="icon-showcase">
          <img src="/A_I-04.png" alt="Ícono Adultxs Inexpertxs" />
        </figure>
      </section>

      <Section
        eyebrow="Tipografía"
        title="Clara, frontal y sin ganas de parecer perfecta."
      >
        <div className="type-sample">
          <article className="type-card type-card-display">
            <div>
              <h3>Bebas Neue</h3>
              <p>
                Es la voz que levanta la mano. Grande, directa y editorial. Se utiliza para titulares
                porque transmite carácter sin complicarse.
              </p>
            </div>
            <div className="type-characters" aria-label="Muestra de caracteres Bebas Neue">
              <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
              <span>abcdefghijklmnopqrstuvwxyz</span>
              <span>0123456789</span>
            </div>
          </article>

          <article className="type-card type-card-body">
            <div>
              <h3>Inter</h3>
              <p>
                Es la voz que sostiene la conversación. Se utiliza para párrafos, explicaciones y
                lectura prolongada porque prioriza claridad y comodidad.
              </p>
            </div>
            <div className="type-characters" aria-label="Muestra de caracteres Inter">
              <span className="inter-specimen-line">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
              <span className="inter-specimen-line">abcdefghijklmnopqrstuvwxyz</span>
              <span className="inter-specimen-line">0123456789</span>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Colores"
        title="La ausencia de color también es una postura."
        intro="Blanco, negro y grises construyen un sistema que habla de matices. Porque la vida no es completamente blanca ni completamente negra: cambia, se contradice, se mueve y se transforma todo el tiempo. Esta paleta busca representar ese tránsito constante y dejar que las palabras, las imágenes y las personas carguen la emoción."
      >
        <div className="color-system">
          {["#000000", "#111111", "#5c5c5c", "#b3b3b3", "#f5f5f5", "#ffffff"].map((color) => (
            <span key={color} style={{ background: color }}>
              {color}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Valores" title="La identidad vive en lo que repetimos.">
        <div className="editorial-grid five">
          {values.map((value, index) => (
            <EditorialBlock
              key={value.title}
              index={String(index + 1).padStart(2, "0")}
              title={value.title}
              text={value.text}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
