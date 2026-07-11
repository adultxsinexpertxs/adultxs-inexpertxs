import { Navigate, useParams } from "react-router-dom";

import ProductGallery from "../../components/merch/ProductGallery";
import Button from "../../components/ui/Button";
import { getMerchProduct } from "../../data/merch";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getMerchProduct(slug);

  if (!product) {
    return <Navigate to="/merch" replace />;
  }

  return (
    <main>
      <section className="product-detail-section">
        <div className="product-layout">
          <ProductGallery images={product.images} productName={product.name} />

          <aside className="product-info">
            <p className="section-label">Merch / {product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>

            <div className="product-info-section product-availability">
              <p className="section-label">Disponibilidad</p>
              <p>{product.availability}</p>
            </div>

            <div className="product-info-section">
              <p className="section-label">Detalles</p>
              <ul>
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p>{product.material}</p>
            </div>

            <div className="product-info-section">
              <p className="section-label">{product.sizes.length ? "Tallas" : "Talla"}</p>
              {product.sizes.length ? (
                <div className="size-row">
                  {product.sizes.map((size) => (
                    <span key={size}>{size}</span>
                  ))}
                </div>
              ) : (
                <p>Unitalla ajustable</p>
              )}
            </div>

            <div className="product-info-section">
              <p className="section-label">Historia del diseño</p>
              <p>{product.designStory}</p>
            </div>

            {product.price ? (
              <div className="product-info-section">
                <p className="section-label">Precio</p>
                <p>{product.price}</p>
              </div>
            ) : null}

            <div className="product-info-section">
              <p className="section-label">Estado</p>
              <p>{product.status}</p>
            </div>

            <Button to="/merch" variant="secondary">
              Volver a merch
            </Button>
          </aside>
        </div>
      </section>
    </main>
  );
}
