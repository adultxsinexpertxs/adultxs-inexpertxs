import PageHero from "../components/ui/PageHero";

const privacySections = [
  {
    title: "Responsable",
    text: "Adultxs Inexpertxs es responsable del tratamiento de los datos personales que nos compartas a través de formularios, mensajes o dinámicas comunitarias.",
  },
  {
    title: "Datos que podemos solicitar",
    text: "Podemos solicitar nombre, correo electrónico, usuario de Instagram y el mensaje que decidas enviarnos. Sólo usamos esa información para responderte, registrar tu participación o dar seguimiento a una solicitud.",
  },
  {
    title: "Uso de la información",
    text: "La información se utiliza con fines de contacto, comunidad, comunicación y operación de dinámicas relacionadas con Adultxs Inexpertxs. No vendemos tus datos personales.",
  },
  {
    title: "Derechos",
    text: "Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a adultxs.inexpertxs@gmail.com.",
  },
];

export default function AvisoPrivacidad() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Aviso de Privacidad"
        subtitle="Última actualización: 29 de mayo de 2026"
      />

      <section className="section privacy-content" aria-label="Contenido del aviso de privacidad">
        {privacySections.map((section) => (
          <article className="privacy-block" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
