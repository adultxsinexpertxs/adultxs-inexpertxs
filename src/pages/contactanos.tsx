export default function Contactanos() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="kicker">Hablemos</p>
        <h1 className="h1">Contáctanos</h1>
        <p className="lead">
          Cuéntanos tu idea, tu lío creativo o tu proyecto en construcción. No
          damos garantías, solo ganas de juntarnos y ver qué pasa.
        </p>
      </section>

      <section className="section section-sm">
        <form
          className="contact-form"
          action="https://formsubmit.co/adultxs.inexpertxs@gmail.com"
          method="POST"
        >
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
            Cuéntanos
            <textarea name="mensaje" rows={6} required />
          </label>

          <button type="submit" className="btn-primary">
            Mandar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}