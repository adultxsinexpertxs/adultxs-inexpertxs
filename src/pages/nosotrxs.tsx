import Button from "../components/ui/Button";
import EditorialBlock from "../components/ui/EditorialBlock";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";

const work = [
  {
    title: "Comunidad",
    text: "Abrimos espacios para encontrarnos, preguntar, compartir recursos y bajar la adultez del pedestal.",
  },
  {
    title: "Procesos",
    text: "Acompañamos ideas que todavía están tomando forma, desde la intuición hasta una primera versión real.",
  },
  {
    title: "Cruces creativos",
    text: "Cruzamos marcas, artistas, escuelas y organizaciones con una mirada humana, lúdica y útil.",
  },
  {
    title: "Encuentros próximos",
    text: "Talleres, activaciones y encuentros para aprender con las manos, la duda y la risa puestas sobre la mesa.",
  },
];

export default function Nosotrxs() {
  return (
    <main>
      <PageHero
        eyebrow="Nosotrxs"
        title="No somos expertxs. Y justamente ahí comienza todo."
        subtitle="Adultxs Inexpertxs existe para defender una adultez menos rígida: una donde crear, jugar y equivocarse sigan siendo formas válidas de aprender."
      />

      <Section
        eyebrow="Nuestra historia"
        title="Empezamos haciendo antes de saber explicarlo perfecto."
        intro="Con el tiempo entendimos que esa era la señal: la vida adulta no necesitaba más poses de seguridad, sino espacios donde poder intentar, fallar, conversar y volver a empezar."
      />

      <Section eyebrow="Qué hacemos" title="Damos estructura sin quitarle juego a las ideas.">
        <div className="editorial-grid four">
          {work.map((item, index) => (
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
        eyebrow="Manifiesto"
        title="No nacimos para fingir que ya sabemos."
        intro="Nacimos para probar, fallar, reírnos tantito y volver a intentar. Preferimos hacer antes que esperar permiso, compartir antes que competir y seguir siendo inexpertxs incluso cuando algo por fin sale bien."
      >
        <Button to="/contactanos">Quiero sumarme</Button>
      </Section>
    </main>
  );
}
