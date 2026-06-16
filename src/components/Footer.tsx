export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3 md:items-center">
        <a
          href="/aviso-privacidad.html"
          className="text-sm uppercase tracking-[0.18em] text-white/70 transition hover:text-white md:justify-self-start"
        >
          Aviso de Privacidad
        </a>

        <p className="text-sm uppercase tracking-[0.18em] text-white/55">
          Adultxs Inexpertxs — Nadie sabe vivir, pero aquí lo intentamos juntxs.
        </p>

        <a
          href="https://www.instagram.com/adultxs_inexpertxs/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-white/70 transition hover:text-white md:justify-self-end"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}