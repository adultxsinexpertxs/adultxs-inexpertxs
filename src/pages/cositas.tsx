const products = [
  {
    name: "Playera",
    text: "No es una playera. Es una forma elegante de avisarle al mundo que tampoco tienes idea de lo que estás haciendo… pero ya no te da pena admitirlo.",
    frontImage: "/playera-frente.png",
    backImage: "/playera-vuelta.png",
    href: `${import.meta.env.BASE_URL}playera.html`,
  },
  {
    name: "Sudadera",
    text: "Ideal para sobrevivir juntas eternas, crisis existenciales, cambios de carrera o simplemente cuando hace frío y la adultez pesa un poquito más.",
    frontImage: "/sudadera-frente.png",
    backImage: "/sudadera-vuelta.png",
    href: `${import.meta.env.BASE_URL}sudadera.html`,
  },
  {
    name: "Gorra",
    text: "Perfecta para esconder el cabello despeinado o las decisiones cuestionables. Funciona sorprendentemente bien para ambas cosas.",
    frontImage: "/gorra-frente.png",
    backImage: "/gorra-vuelta.png",
    href: `${import.meta.env.BASE_URL}gorra.html`,
  },
];

export default function Cositas() {
  return (
    <main className="page merch-page">
      <section className="page-hero">
        <p className="kicker">Pequeños aliados</p>
        <h1 className="h1">LLEVA LA COMUNIDAD CONTIGO.</h1>
        <p className="lead">
          La primera regla del Club de los Adultxs Inexpertxs es siempre hablar del Club de los Adultxs Inexpertxs.
        </p>
      </section>

      <section
        className="section section-sm merch-products"
        aria-label="Productos de merch"
      >
        <div className="merch-grid">
          {products.map((product) => (
            <a className="merch-card group" href={product.href} key={product.name}>
              <div className="merch-image" aria-hidden="true">
                <img
                  className="merch-image-front animate-productFront"
                  src={product.frontImage}
                  alt=""
                />
                <img
                  className="merch-image-back animate-productBack"
                  src={product.backImage}
                  alt=""
                />
              </div>

              <h2>{product.name}</h2>
              <p>{product.text}</p>
              <span className="merch-status">Actualmente agotado</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
