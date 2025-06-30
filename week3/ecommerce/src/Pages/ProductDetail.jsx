import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();

  const { data: product, loading, error } =
    useFetch(`https://fakestoreapi.com/products/${id}`);

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = product && favorites.includes(product.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (!product) return;
    isFav ? removeFavorite(product.id) : addFavorite(product.id);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Загрузка…</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">Ошибка: {String(error)}</p>;
  }

  if (!product) {
    return <p className="error">Продукт не найден</p>;
  }

  return (
    <div className="product-detail">
      <div className="detail-image-container">
        <img src={product.image} alt={product.title} />
        <button
          className={`favorite-btn ${isFav ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          {isFav ? (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="red"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="none"
                stroke="red"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          )}
        </button>
      </div>
      <h1>{product.title}</h1>
      <p><strong>Категория:</strong> {product.category}</p>
      <p><strong>Цена:</strong> {product.price} €</p>
      <p><strong>Описание:</strong> {product.description}</p>
    </div>
  );
}
