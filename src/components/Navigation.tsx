import { NavLink, Link } from "react-router-dom";

const navItems: Array<{ label: string; to?: string; href?: string; end?: boolean }> = [
  { label: "Inicio", to: "/", end: true },
  { label: "Comunidad", to: "/comunidad" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Experiencias", to: "/experiencias" },
  { label: "Bitácora", to: "/bitacora" },
  { label: "Muro de lxs Inexpertxs", to: "/muro" },
  { label: "Colaboraciones", to: "/colaboraciones" },
  { label: "Cositas", to: "/cositas" },
  { label: "Contacto", to: "/contactanos" },
];

function LogoMark() {
  return (
    <img
      src="/A_I-04.png"
      alt="Adultxs Inexpertxs Logo"
      className="h-12 w-12 object-contain transition duration-300 hover:scale-105"
    />
  );
}

export default function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" aria-label="Ir al inicio">
          <LogoMark />
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-black uppercase tracking-[0.25em] text-white">
            Menú
          </summary>

          <div className="absolute right-0 mt-4 grid min-w-56 gap-4 border border-white/20 bg-black p-5 text-right">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a href={item.href} className="text-sm font-black uppercase tracking-[0.22em] text-white/90">
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.to} end={item.end} className="text-sm font-black uppercase tracking-[0.22em] text-white/90">
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </details>

        <div className="hidden items-center gap-6 md:flex xl:gap-8">
          {navItems.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-black uppercase tracking-[0.22em] text-white/90 transition xl:text-sm hover:text-white hover:underline hover:underline-offset-8"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `text-xs font-black uppercase tracking-[0.22em] transition xl:text-sm ${
                    isActive
                      ? "text-white underline underline-offset-8"
                      : "text-white/90 hover:text-white hover:underline hover:underline-offset-8"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      </nav>
    </header>
  );
}