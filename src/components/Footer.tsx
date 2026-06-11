export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
        <a
          href="/aviso-privacidad.html"
          className="justify-self-start text-sm uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
        >
          Aviso de Privacidad
        </a>

        <p className="justify-self-center text-sm uppercase tracking-[0.18em] text-white/55">
          © 2026 Adultxs Inexpertxs
        </p>

        <a
          href="https://www.instagram.com/adultxs_inexpertxs/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="justify-self-end text-white/70 transition hover:text-white"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}