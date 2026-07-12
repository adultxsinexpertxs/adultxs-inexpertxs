import Button from "../components/ui/Button";
import EditorialBlock from "../components/ui/EditorialBlock";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";

const communityItems = [
  "Charlas",
  "Talleres",
  "Recursos",
  "Ideas abiertas",
  "Encuentros",
];

const refugios = [
  {
    name: "Mala Kaffe",
    description:
      "Un café para quienes disfrutan las conversaciones largas, las ideas incómodas y las pausas necesarias. Un lugar donde siempre parece haber tiempo para otra taza y otra historia.",
    links: {
      instagram: "https://www.instagram.com/mala.kaffe/",
      facebook: "https://www.facebook.com/kaffe.mala",
      maps: "https://maps.app.goo.gl/GyLrrNfXJDVs7d1B9",
    },
  },
  {
    name: "VERDE MX",
    description:
      "Un espacio que recuerda que crecer también significa volver a conectar con lo natural. Aquí la comunidad se cultiva igual que las plantas: con paciencia, curiosidad y constancia.",
    links: {
      instagram: "https://www.instagram.com/verde_mx_/",
      facebook: "https://www.facebook.com/profile.php?id=61578070365086&ref=PROFILE_EDIT_xav_ig_profile_page_web#",
      maps: "https://maps.app.goo.gl/9QzsHmQPvABYP3zN8",
    },
  },
  {
    name: "Cafe 100",
    description:
      "Un lugar donde una buena taza puede convertirse en una conversación que cambie una idea, un proyecto o incluso una vida. Porque las mejores historias casi siempre empiezan alrededor de una mesa.",
    links: {
      instagram: "https://www.instagram.com/cafeciencdmx/",
      maps: "https://maps.app.goo.gl/NJ45si2SprNeKSaz5",
    },
  },
];

export default function Comunidad() {
  return (
    <main>
      <PageHero
        eyebrow="Comunidad"
        title="Nunca aprendemos solxs."
        subtitle="Un espacio para encontrarnos desde la duda, compartir herramientas y recordar que no tener todo resuelto también puede ser punto de partida."
      />

      <Section eyebrow="Qué encontrarás" title="Formatos para hacer, preguntar y probar.">
        <div className="editorial-grid five">
          {communityItems.map((item, index) => (
            <EditorialBlock
              key={item}
              index={String(index + 1).padStart(2, "0")}
              title={item}
              text="Un formato vivo para aprender con otras personas, sin convertir el proceso en pose."
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Cómo participar"
        title="Llega con una idea, una pregunta o ganas de escuchar."
        intro="Puedes sumarte a conversaciones, proponer proyectos abiertos, compartir recursos o simplemente estar cerca mientras algo toma forma."
      >
        <Button to="/contactanos">Quiero unirme</Button>
      </Section>

      <Section eyebrow="Próximos eventos" title="Todavía estamos cocinando la siguiente excusa para vernos.">
        <div className="event-card">
          <span>Próximamente</span>
          <h3>Encuentros Adultxs Inexpertxs</h3>
          <p>Encuentros para aprender haciendo, jugar en serio y equivocarnos con compañía.</p>
        </div>
      </Section>

      <Section
        eyebrow="Refugios Inexpertxs"
        title="Hay lugares donde ser inexpertx se siente como estar en casa."
        intro="No toda comunidad vive en internet. También existen espacios donde las conversaciones duran horas, las ideas encuentran mesa, los errores no incomodan y nadie espera que llegues con todas las respuestas. Estos lugares comparten nuestra manera de ver el mundo y por eso forman parte del Club de lxs Adultxs Inexpertxs."
      >
        <div className="refugios-grid">
          {refugios.map((refugio) => (
            <article className="refugio-card" key={refugio.name}>
              <div className="refugio-card-copy">
                <h3>{refugio.name}</h3>
                <p>{refugio.description}</p>
                <div className="refugio-links" aria-label={`Enlaces de ${refugio.name}`}>
                  {refugio.links.instagram ? (
                    <a href={refugio.links.instagram} target="_blank" rel="noreferrer" aria-label={`${refugio.name} en Instagram`}>
                      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" />
                      </svg>
                    </a>
                  ) : null}
                  {refugio.links.facebook ? (
                    <a href={refugio.links.facebook} target="_blank" rel="noreferrer" aria-label={`${refugio.name} en Facebook`}>
                      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                        <path d="M14 8h2V4h-3a5 5 0 0 0-5 5v3H6v4h2v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1h1Z" />
                      </svg>
                    </a>
                  ) : null}
                  {refugio.links.maps ? (
                    <a href={refugio.links.maps} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ubicación de ${refugio.name} en Maps`}>
                      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                        <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
