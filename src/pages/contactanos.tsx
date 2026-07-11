import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";

export default function Contactanos() {
  return (
    <main>
      <PageHero
        eyebrow="Contactanos"
        title="Cuéntanos qué estás intentando."
        subtitle="No tienes que llegar con todo resuelto. Una idea, una duda o una colaboración posible ya es suficiente para empezar a hablar."
      />

      <Section className="contact-section">
        <form className="contact-form" action="https://formsubmit.co/adultxs.inexpertxs@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nuevo mensaje Adultxs Inexpertxs" />

          <label>
            Nombre
            <input name="nombre" type="text" required />
          </label>

          <label>
            Correo
            <input name="correo" type="email" required />
          </label>

          <label>
            Mensaje
            <textarea name="mensaje" rows={6} required />
          </label>

          <Button type="submit">Enviar</Button>
        </form>

        <aside className="contact-links">
          <p>adultxs.inexpertxs@gmail.com</p>
          <a href="https://www.instagram.com/adultxs_inexpertxs/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </aside>
      </Section>
    </main>
  );
}
