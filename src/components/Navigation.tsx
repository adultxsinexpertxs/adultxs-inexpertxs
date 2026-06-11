import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Nosotrxs", to: "/", end: true },
  { label: "Comunidad", to: "/comunidad" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Colaboraciones", href: "/colaboraciones.html" },
  { label: "Experiencias", to: "/experiencias" },
  { label: "Cositas", href: "/cositas.html" },
  { label: "Bitácora", to: "/bitacora" },
  { label: "Identidad", to: "/identidad" },
  { label: "Contáctanos", href: "/contactanos.html" },
];

function LogoMark({ small = false }) {
  return (
    <img
      src="/A_I-04.png"
      alt="Adultxs Inexpertxs Logo"
      className={`${small ? "h-12 w-12" : "h-16 w-16"} object-contain transition duration-300 hover:scale-105`}
    />
  );
}

function NavItem({ item }: { item: (typeof navItems)[number] }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        className="text-xs font-black uppercase tracking-[0.22em] text-white/90 transition hover:text-white hover:underline hover:underline-offset-8 xl:text-sm"
      >
        {item.label}
      </a>
    );
  }

  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        `text-xs font-black uppercase tracking-[0.22em] transition xl:text-sm ${
          isActive ? "text-white underline underline-offset-8" : "text-white/90 hover:text-white hover:underline hover:underline-offset-8"
        }`
      }
    >
      {item.label}
    </NavLink>
  );
}

export default function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" aria-label="Ir al inicio">
          <LogoMark small />
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-black uppercase tracking-[0.25em] text-white">
            Menú
          </summary>

          <div className="absolute right-0 mt-4 grid min-w-56 gap-4 border border-white/20 bg-black p-5 text-right">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-black uppercase tracking-[0.22em] text-white/90"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="text-sm font-black uppercase tracking-[0.22em] text-white/90"
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </details>

        <div className="hidden items-center gap-7 md:flex xl:gap-10">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
}