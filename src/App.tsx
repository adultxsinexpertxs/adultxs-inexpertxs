import ClubCredentialModal from "./components/ClubCredentialModal";
import Button from "./components/ui/Button";
import EditorialBlock from "./components/ui/EditorialBlock";
import ProductCard from "./components/merch/ProductCard";
import Section from "./components/ui/Section";
import { merchProducts } from "./data/merch";

const whatWeDo = [
  {
    title: "Creamos",
    text: "Ideas, piezas, encuentros y proyectos que empiezan con una pregunta honesta: ¿y si lo intentamos?",
  },
  {
    title: "Compartimos",
    text: "Procesos, aprendizajes, errores útiles y herramientas para que nadie tenga que fingir que ya sabe.",
  },
  {
    title: "Experimentamos",
    text: "Probamos formatos, colaboraciones y caminos raros porque crecer también puede tener recreo.",
  },
];

export default function App() {
  return (
    <main>
      <ClubCredentialModal />

      <section className="home-hero">
        <div className="container">
          <p className="section-label">Adultxs Inexpertxs</p>
          <h1>Toma la vida con la seriedad que jugabas de niñx.</h1>
          <p className="lead">
            Un espacio para quienes siguen creyendo que crecer no significa dejar de crear,
            experimentar y equivocarse.
          </p>
          <div className="actions">
            <Button to="/comunidad">Explorar comunidad</Button>
            <Button to="/conocenos" variant="secondary">
              Conócenos
            </Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Qué somos" title="¿Qué es Adultxs Inexpertxs?">
        <div className="editorial-grid three">
          {whatWeDo.map((item, index) => (
            <EditorialBlock
              key={item.title}
              index={String(index + 1).padStart(2, "0")}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trayectoria"
        title="10 años tomando proyectos"
        intro="Llevamos más de diez años aprendiendo haciendo. Hemos participado en proyectos culturales, creativos, comerciales y comunitarios. Hoy todo ese aprendizaje vive dentro de Adultxs Inexpertxs."
      />

      <Section
        eyebrow="Comunidad"
        title="Un lugar para preguntar sin pena."
        intro="Nos reunimos alrededor de conversaciones, recursos, colaboraciones y experiencias para recordar que nadie aprende solx."
      >
        <Button to="/comunidad" variant="secondary">
          Entrar a comunidad
        </Button>
      </Section>

      <Section
        eyebrow="Merch"
        title="Prendas para seguir intentando."
        intro="No son productos para verse expertx. Son recordatorios portátiles de que seguimos aprendiendo."
      >
        <div className="product-grid">
          {merchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <section className="final-cta">
        <div className="container">
          <h2>Nunca dejamos de aprender. Sólo dejamos de intentarlo.</h2>
          <Button to="/contactanos">Contactanos</Button>
        </div>
      </section>
    </main>
  );
}
