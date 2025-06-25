import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then(data => {
        setProduct(data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Loading…</p>;
  if (error)   return <p className="error">Error: {error}</p>;
  if (!product) return <p className="error">Product not found</p>;

  console.log("PRODUCT DETAIL DATA:", product);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>

      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> {product.price} €</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}