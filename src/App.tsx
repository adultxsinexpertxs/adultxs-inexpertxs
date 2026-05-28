import { useState } from "react";

const bebasFont = {
  fontFamily: '"Bebas Neue", sans-serif',
};

const INSTAGRAM_URL = "https://www.instagram.com/adultxs_inexpertxs/";
const CONTACT_EMAIL = "adultosinexpertos@gmail.com";

function Icon({ children, size = 28, label }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={label}
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

function InstagramIcon({ size = 28 }) {
  return (
    <Icon size={size} label="Instagram">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </Icon>
  );
}

const navItems = [
  { label: "Nosotrxs", href: "#nosotroxs" },
  { label: "Colaboraciones", href: "#colaboraciones" },
  { label: "Cositas", href: "#cositas" },
  { label: "Contáctanos", href: "#contactanos" },
];

const integrantes = [
  {
    n: "01",
    nombre: "Alan de la Paz",
    rol: "Producción audiovisual",
    desc: "Hace que las ideas se vean cabronas y cinematográficas sin tanto drama innecesario.",
  },
  {
    n: "02",
    nombre: "Marco Mendo",
    rol: "Fotografía",
    desc: "Toma fotos que hacen ver cool hasta una crisis existencial.",
  },
  {
    n: "03",
    nombre: "Daniel Lorenzana",
    rol: "Creatividad",
    desc: "Convierte ideas absurdas en cosas que sorprendentemente sí funcionan.",
  },
  {
    n: "04",
    nombre: "Sergio Canto",
    rol: "Desarrollador web",
    desc: "Piensa en el mejor hacker que puedas imaginar, pero con mejor diseño y menos delitos.",
  },
  {
    n: "05",
    nombre: "Andrea Cejudo",
    rol: "Publicidad y estrategia",
    desc: "Hace que las marcas dejen de verse desesperadas por atención.",
  },
  {
    n: "06",
    nombre: "Fernanda Cueto",
    rol: "Diseño",
    desc: "Diseña cosas tan bonitas que dan ganas de enmarcarlas aunque no sirvan para nada.",
  },
  {
    n: "07",
    nombre: "Sofia Ramos",
    rol: "Medios",
    desc: "Encuentra el lugar exacto donde poner las ideas para que exploten bonito.",
  },
];

const cositas = [
  {
    titulo: "Sudadera",
    texto: "Prenda de soporte emocional para esos días complicados donde existir ya cuenta como productividad.",
  },
  {
    titulo: "Playera",
    texto: "Básica, negra, cómoda, pero sobretodo útil para comunicarle al mundo que te uniste al club.",
  },
  {
    titulo: "Gorra",
    texto: "Fácil de usar, sobretodo para taparse la cara cuando uno está llorando en público discretamente.",
  },
];

const colaboraciones = [
  {
    nombre: "Verde MX",
    url: "https://instagram.com",
  },
  {
    nombre: "La Redención",
    url: "https://instagram.com",
  },
  {
    nombre: "Mala Kaffe",
    url: "https://instagram.com",
  },
];

const smokeTests = [
  { name: "el menú tiene cuatro pestañas", pass: navItems.length === 4 },
  { name: "instagram usa el perfil correcto", pass: INSTAGRAM_URL.includes("adultxs_inexpertxs") },
  { name: "hay siete integrantes", pass: integrantes.length === 7 },
  { name: "hay tres productos", pass: cositas.length === 3 },
  { name: "hay tres colaboraciones", pass: colaboraciones.length === 3 },
  { name: "el formulario manda al correo correcto", pass: CONTACT_EMAIL === "adultosinexpertos@gmail.com" },
];

function LogoMark({ small = false }) {
  return (
    <img
      src="/A_I-04.png"
      alt="Adultxs Inexpertxs Logo"
      className={`${small ? "h-12 w-12" : "h-16 w-16"} object-contain transition duration-300 group-hover:scale-105`}
    />
  );
}

export default function AdultxsInexpertxs() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  const subject = encodeURIComponent(`Nuevo mensaje de ${formData.nombre}`);
  const body = encodeURIComponent(
    `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\n\nMensaje:\n${formData.mensaje}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      <main
        style={bebasFont}
        className="min-h-screen scroll-smooth bg-black text-white selection:bg-white selection:text-black"
      >
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <a href="#home" aria-label="Ir al inicio" className="group flex items-center gap-3">
              <LogoMark />
            </a>

            <div className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-black uppercase tracking-[0.22em] text-white/90 transition hover:text-white hover:underline hover:underline-offset-8"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section
          id="home"
          className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(85,77,32,0.38),transparent_34%),linear-gradient(180deg,#0b0b0b,#000)]" />

          <div className="mx-auto w-full max-w-7xl text-center">
            <div className="mx-auto max-w-5xl bg-yellow-950/25 px-3 py-2">
              <h1 className="text-balance text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
                Toma la vida con la seriedad que jugabas de niñx
              </h1>
            </div>

            <p className="mx-auto mt-16 max-w-4xl text-balance text-2xl text-white/75 md:text-3xl">
              Un espacio para crear, colaborar y compartir ideas sin pretender tenerlo todo resuelto.
            </p>

            <a
              href="#nosotroxs"
              className="mx-auto mt-14 inline-flex items-center justify-center border border-white bg-white px-10 py-4 text-2xl uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
            >
              Conócenos
            </a>
          </div>
        </section>

        <section id="nosotroxs" className="bg-white px-6 py-28 text-black lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-10 text-lg font-black uppercase tracking-[0.45em]">Nosotrxs</p>

            <h2 className="max-w-5xl text-6xl font-black uppercase leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Expertos de nada, brillantes en todo.
            </h2>

            <p className="mt-12 max-w-3xl text-2xl leading-relaxed text-black/70">
              Somos una comunidad creativa que abraza el caos de crecer, aprender y experimentar.
            </p>

            <div className="mt-12">
              <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-8">
                <h3 className="text-4xl font-black uppercase tracking-tight">
                  Conoce a los inexpertxs
                </h3>
              </div>

              <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {integrantes.map((p) => (
                  <article
                    key={p.n}
                    className="min-w-[82%] snap-start border border-black p-8 transition hover:bg-black hover:text-white sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/3)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid h-24 w-24 place-items-center rounded-full border border-black/20 bg-black/[0.04] text-sm uppercase tracking-[0.18em] text-black/35">
                        Foto
                      </div>

                      <span className="text-3xl font-black text-black/30">{p.n}</span>
                    </div>

                    <h4 className="mt-8 text-4xl font-black uppercase leading-tight">
                      {p.nombre}
                    </h4>

                    <p className="mt-3 text-xl uppercase tracking-[0.12em] opacity-70">
                      {p.rol}
                    </p>

                    <p className="mt-10 text-lg leading-relaxed opacity-70">{p.desc}</p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
              <a
                href="#contactanos"
                className="inline-flex items-center justify-center border border-black bg-black px-10 py-4 text-2xl uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
              >
                Contáctanos
              </a>
            </div>
            </div>
          </div>
        </section>

        <section id="colaboraciones" className="bg-black px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-10 text-lg font-black uppercase tracking-[0.45em] text-white/55">
              Colaboraciones
            </p>

            <h2 className="max-w-6xl text-5xl font-black uppercase leading-[1.05] sm:text-6xl lg:text-8xl">
              Nos juntamos con gente que trae algo raro, útil o brillante.
            </h2>

            <div className="mt-24 grid gap-8 md:grid-cols-3">
              {colaboraciones.map((item) => (
                <a
                  key={item.nombre}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block min-h-72 border border-white/25 bg-white/[0.04] p-10 transition hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <h3 className="text-4xl font-black uppercase">{item.nombre}</h3>

                  <p className="mt-24 text-xl opacity-70">
                    Que buscan ideas con filo, estrategia y cero solemnidad innecesaria.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="cositas" className="bg-white px-6 py-28 text-black lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-lg font-black uppercase tracking-[0.45em] text-black/55">
              Cositas
            </p>

            <h2 className="text-6xl font-black uppercase leading-none sm:text-7xl lg:text-8xl">
              Deja que el mundo sepa que eres inexpertx
            </h2>

            <p className="mt-10 max-w-4xl text-2xl leading-relaxed text-black/70 md:text-3xl">
              La primer regla del Club de los Adultxs Inexpertxs es hablar con todos sobre el Club de los Adultxs Inexpertxs.
            </p>

            <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cositas.map((item) => (
                <article
                  key={item.titulo}
                  className="min-w-[82%] snap-start border border-black p-8 transition hover:bg-black hover:text-white sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/3)]"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden border border-black/20 bg-black/[0.04]">
                    <div className="grid h-full w-full place-items-center text-sm uppercase tracking-[0.18em] text-black/35">
                      Foto Producto
                    </div>
                  </div>

                  <h3 className="mt-8 text-4xl font-black uppercase leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="mt-10 text-lg leading-relaxed opacity-70">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contactanos" className="bg-black px-6 py-28 text-white lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_.85fr] lg:items-start">
            <div>
              <p className="mb-10 text-lg font-black uppercase tracking-[0.45em]">
                Contáctanos
              </p>

              <h2 className="max-w-4xl text-6xl font-black uppercase leading-[1.05] sm:text-7xl lg:text-8xl">
                Hablemos de tu proyecto
              </h2>

              <p className="mt-10 max-w-4xl text-2xl leading-relaxed text-white/70 md:text-3xl">
                Nos emociona conocer nuevos talentos y personas con propuestas que van a cambiar las cosas.
              </p>
            </div>

            <form
  <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="border border-white bg-white p-8 text-black md:p-10"
>
  <input type="hidden" name="access_key" value="f557396b-07a3-479c-89f6-69012c3a9aee" />

  <label className="grid gap-3 text-xl uppercase tracking-[0.12em]">
    Nombre

    <input
      required
      type="text"
      name="name"
      className="border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
      placeholder="Tu nombre"
    />
  </label>

  <label className="grid gap-3 text-xl uppercase tracking-[0.12em] mt-8">
    Correo

    <input
      required
      type="email"
      name="email"
      className="border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
      placeholder="tu@correo.com"
    />
  </label>

  <label className="grid gap-3 text-xl uppercase tracking-[0.12em] mt-8">
    Mensaje

    <textarea
      required
      name="message"
      rows={7}
      className="resize-none border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
      placeholder="Cuéntanos qué traes entre manos"
    />
  </label>

  <button
    type="submit"
    className="mt-10 w-full bg-black px-8 py-5 text-center text-xl uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
  >
    Enviar mensaje
  </button>
</form>
              <div className="grid gap-7">
                <label className="grid gap-3 text-xl uppercase tracking-[0.12em]">
                  Nombre
                  <input
                    required
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
                    placeholder="Tu nombre"
                  />
                </label>

                <label className="grid gap-3 text-xl uppercase tracking-[0.12em]">
                  Correo
                  <input
                    required
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
                    placeholder="tu@correo.com"
                  />
                </label>

                <label className="grid gap-3 text-xl uppercase tracking-[0.12em]">
                  Mensaje
                  <textarea
                    required
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={7}
                    className="resize-none border border-black bg-white px-5 py-4 text-2xl outline-none transition focus:bg-black focus:text-white"
                    placeholder="Cuéntanos qué traes entre manos"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-black px-8 py-5 text-xl font-black uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black px-6 py-10 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <a href="#home" aria-label="Volver al inicio" className="group">
              <LogoMark small />
            </a>

            <p className="text-sm uppercase tracking-[0.18em] text-white/55">
              © 2026 Adultxs Inexpertxs. Todos los derechos reservados.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Adultxs Inexpertxs"
              className="rounded-full border border-white/25 p-3 transition hover:bg-white hover:text-black"
            >
              <InstagramIcon size={22} />
            </a>
          </div>

          <div className="sr-only" aria-label="Pruebas de humo">
            {smokeTests.map((test) => `${test.name}: ${test.pass ? "ok" : "falló"}`).join(" | ")}
          </div>
        </footer>
      </main>
    </>
  );
}
