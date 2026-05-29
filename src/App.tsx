const INSTAGRAM_URL = "https://www.instagram.com/adultxs_inexpertxs/";

const navItems = [
  { label: "Nosotrxs", href: "/nosotroxs.html" },
  { label: "Colaboraciones", href: "/colaboraciones.html" },
  { label: "Cositas", href: "/cositas.html" },
  { label: "Contáctanos", href: "/contactanos.html" },
];

const bebasFont = {
  fontFamily: '"Bebas Neue", sans-serif',
};

function LogoMark({ small = false }) {
  return (
    <img
      src="/A_I-04.png"
      alt="Adultxs Inexpertxs Logo"
      className={`${small ? "h-12 w-12" : "h-16 w-16"} object-contain transition duration-300 hover:scale-105`}
    />
  );
}

export default function AdultxsInexpertxs() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      <main
        style={bebasFont}
        className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
      >
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
            <a href="/" aria-label="Ir al inicio">
              <LogoMark small />
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

        <section className="relative isolate flex min-h-screen items-center px-6 pt-28 lg:px-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(85,77,32,0.38),transparent_34%),linear-gradient(180deg,#0b0b0b,#000)]" />

          <div className="mx-auto w-full max-w-7xl text-center">
            <h1 className="text-balance text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
              Toma la vida con la seriedad que jugabas de niñx
            </h1>

            <p className="mx-auto mt-16 max-w-4xl text-balance text-2xl uppercase text-white/75 md:text-3xl">
              Un espacio para crear, colaborar y compartir ideas sin pretender tenerlo todo resuelto.
            </p>

            <a
              href="/nosotroxs.html"
              className="mx-auto mt-14 inline-flex items-center justify-center border border-white bg-white px-10 py-4 text-2xl uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
            >
              Conócenos
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black px-6 py-10 lg:px-10">
  <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
    <a
      href="/aviso-privacidad.html"
      className="justify-self-start text-sm uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
    >
      Aviso de Privacidad
    </a>

    <p className="justify-self-center text-sm uppercase tracking-[0.18em] text-white/55">
      © 2026 ADULTXS TEST
    </p>

    <a
      href="https://www.instagram.com/adultxs_inexpertxs/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="justify-self-end text-white/70 transition hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" />
      </svg>
    </a>
  </div>
</footer>
      </main>
    </>
  );
}