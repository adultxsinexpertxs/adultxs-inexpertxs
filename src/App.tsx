import CredencialPopup from "./CredencialPopup";

export default function AdultxsInexpertxs() {
  return (
    <>
      <CredencialPopup />

      <main>
        <section className="relative isolate flex min-h-screen items-center px-6 pt-28 lg:px-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(85,77,32,0.38),transparent_34%),linear-gradient(180deg,#0b0b0b,#000)]" />

          <div className="mx-auto w-full max-w-7xl text-center">
            <h1 className="text-balance text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
              Toma la vida con la seriedad que jugabas de niñx
            </h1>

            <p className="mx-auto mt-16 max-w-4xl text-balance text-2xl uppercase text-white/75 md:text-3xl">
              Un espacio para crear, colaborar y compartir ideas sin pretender
              tenerlo todo resuelto.
            </p>

            <div className="mx-auto mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/nosotroxs.html"
                className="inline-flex items-center justify-center border border-white bg-white px-10 py-4 text-2xl uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
              >
                Conócenos
              </a>
              <a
                href="/comunidad.html"
                className="inline-flex items-center justify-center border border-white bg-white px-10 py-4 text-2xl uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
              >
                Comunidad
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}