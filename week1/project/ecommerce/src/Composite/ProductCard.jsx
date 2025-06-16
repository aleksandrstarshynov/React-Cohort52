import React from "react";
import "./ProductCard.css"; 

export default function ProductCard({ product }) {
  console.log("PRODUCT:", product);
  return (
<div className="product-card">
  <div className="product-image">
    <img src={product.image} alt={product.title} />
  </div>
  <h2>{product.title}</h2>
  <p>{product.price} €</p>
</div>
  );
}
