import React from 'react';
import './FavouritesPage.css';
import { useFavorites } from '../context/FavoritesContext';
import { useFetch } from '../hooks/useFetch';
import ProductList from '../Composite/ProductList';

export default function FavouritesPage() {
  const { favorites } = useFavorites();

  const productUrls = favorites.map(
    (id) => `https://fakestoreapi.com/products/${id}`
  );

  const { data, loading, error } = useFetch(productUrls);

  const products = data
    ? Array.isArray(data)
      ? data
      : [data]
    : [];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Loading favorites…</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">Error: {String(error)}</p>;
  }

  if (!favorites.length) {
    return <p>You have no favorite products.</p>;
  }

  return (
    <div className="favourites-page">
      <h1>Favourites</h1>
      <ProductList products={products} />
    </div>
  );
}
