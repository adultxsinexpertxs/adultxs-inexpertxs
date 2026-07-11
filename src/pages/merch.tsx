import ProductCard from "../components/merch/ProductCard";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { merchProducts } from "../data/merch";

export default function Merch() {
  return (
    <main>
      <PageHero
        eyebrow="MERCH"
        title="EL CLUB YA EXISTE."
        subtitle="La primer regla del Club de lxs Adultxs Inexpertxs es siempre hablar de lxs Adultxs Inexpertxs."
      />

      <Section>
        <div className="product-grid">
          {merchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </main>
  );
}
