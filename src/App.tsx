import ClubCredentialModal from "./components/ClubCredentialModal";
import OriginalDropPopup from "./components/OriginalDropPopup";
import Button from "./components/ui/Button";
import EditorialBlock from "./components/ui/EditorialBlock";
import ProductCard from "./components/merch/ProductCard";
import Section from "./components/ui/Section";
import { merchProducts } from "./data/merch";
import "./styles/preview-red.css";

const caminos = [
  { title: "Tengo una duda", text: "Trae tu proyecto, tu consulta o eso que todavía no sabes cómo resolver. Escuchamos, orientamos y buscamos con quién conectarte.", link: "/contactanos", action: "Cuéntanos tu duda" },
  { title: "Puedo echar una mano", text: "Comparte tu experiencia, tus habilidades o tus contactos. No tienes que saberlo todo para ayudar a alguien más.", link: "/comunidad", action: "Súmate a la red" },
];
const principios = [
  { title: "Conectamos", text: "Personas con preguntas y personas que han recorrido caminos parecidos." },
  { title: "Compartimos", text: "Experiencias, recursos y contactos para abrir posibilidades reales." },
  { title: "Aprendemos", text: "También de lo que salió mal. La incertidumbre es parte del proceso." },
];

export default function App() {
  return (
    <main className="red-preview">
      <ClubCredentialModal />
      <OriginalDropPopup />
      <section className="red-hero">
        <div className="container red-hero-inner">
          <p className="section-label">ADULTXS INEXPERTXS / UNA RED PARA SEGUIR INTENTANDO</p>
          <h1>Nadie tiene<br />todo resuelto.<br /><span>Pero alguien ya pasó por eso.</span></h1>
          <p className="red-intro">Una red de personas, proyectos y experiencias. Llegas con una duda, encuentras una dirección. O te sumas para ayudar a alguien más.</p>
          <div className="actions">
            <Button to="/contactanos">Tengo una duda</Button>
            <Button to="/comunidad" variant="secondary">Quiero echar una mano</Button>
          </div>
          <p className="red-hero-foot">EXPERTXS DE NADA. BRILLANTES EN TODO.</p>
        </div>
      </section>
      <Section eyebrow="Dos formas de entrar" title="Aquí todxs tenemos algo que aportar.">
        <div className="red-path-grid">
          {caminos.map((camino, index) => <article className="red-path" key={camino.title}>
            <span className="red-index">0{index + 1} / LA RED</span>
            <h3>{camino.title}</h3>
            <p>{camino.text}</p>
            <Button to={camino.link} variant="secondary">{camino.action}</Button>
          </article>)}
        </div>
      </Section>
      <Section eyebrow="Así funciona" title="No tenemos todas las respuestas. Tenemos una red." intro="No somos un directorio impersonal. Escuchamos cada necesidad y buscamos una conexión o un siguiente paso que tenga sentido.">
        <div className="editorial-grid three">{principios.map((item,index) => <EditorialBlock key={item.title} index={String(index+1).padStart(2,"0")} title={item.title} text={item.text}/>)}</div>
      </Section>
      <section className="red-failure">
        <div className="container">
          <p className="section-label">ENCUENTROS / HISTORIAS / APRENDIZAJES</p>
          <h2>La cagamos.<br />Aprendimos.<br />Lo contamos.</h2>
          <p>Queremos abrir espacios para hablar de proyectos que no salieron como esperábamos, decisiones difíciles y todo lo que aprendimos al reconocer que no sabíamos.</p>
          <Button to="/comunidad">Conoce la comunidad</Button>
        </div>
      </section>
      <Section eyebrow="Nuestra historia" title="La identidad también tiene una razón." intro="Detrás del logotipo, la tipografía, el lenguaje y cada decisión visual hay una historia. Conservamos las explicaciones del manual de identidad en Conócenos.">
        <Button to="/conocenos" variant="secondary">Conoce el porqué</Button>
      </Section>
      <Section eyebrow="Merch" title="Una línea base. Muchas historias por venir." intro="Piezas permanentes para lxs inexpertxs y futuras ediciones especiales por lote o colaboración. Cada lanzamiento tendrá su propia historia.">
        <div className="product-grid">{merchProducts.map(product => <ProductCard key={product.id} product={product}/>)}</div>
        <div className="red-merch-link"><Button to="/merch" variant="secondary">Explorar merch</Button></div>
      </Section>
      <section className="final-cta"><div className="container"><h2>Crecer no traía instrucciones. Así que armamos una red.</h2><Button to="/contactanos">Empecemos por tu duda</Button></div></section>
    </main>
  );
}
