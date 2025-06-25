import { Link } from 'react-router-dom';
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.price} €</p>
    </Link>
  );
}