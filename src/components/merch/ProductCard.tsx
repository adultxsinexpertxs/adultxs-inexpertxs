import { Link } from "react-router-dom";

import type { MerchProduct } from "../../data/merch";

type ProductCardProps = {
  product: MerchProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const frontImage = product.images[0];

  return (
    <article className="product-card">
      <Link to={`/merch/${product.slug}`} aria-label={`Ver producto ${product.name}`}>
        <figure>
          <img src={frontImage.src} alt={frontImage.alt} />
        </figure>
        <div className="product-card-copy">
          <span>{product.status}</span>
          <h3>{product.name}</h3>
          <p>{product.shortDescription}</p>
          {product.price ? <strong>{product.price}</strong> : null}
          <em>Ver producto</em>
        </div>
      </Link>
    </article>
  );
}
