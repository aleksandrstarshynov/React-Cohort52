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

  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch(productUrls);

  const handleRefresh = () => refetch(productUrls);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Загрузка избранного…</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">Ошибка: {String(error)}</p>;
  }

  if (!favorites.length) {
    return <p>У вас нет избранных товаров.</p>;
  }

  return (
    <div className="favourites-page">
      <h1>Favourites</h1>
      <ProductList products={products || []} />
    </div>
  );
}
