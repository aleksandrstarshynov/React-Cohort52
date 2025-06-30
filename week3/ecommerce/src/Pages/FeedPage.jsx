import React, { useState, useEffect } from "react";
import "./FeedPage.css";
import { fetchCategories, fetchProducts } from "../utils/api";
import CategoryFilter from "../Composite/CategoryFilter";
import ProductList from "../Composite/ProductList";

export default function FeedPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories()
      .then((cats) => {
        setCategories(cats);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    setLoadingProducts(true);
    fetchProducts(selectedCategory)
      .then((prods) => {
        setProducts(prods);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingProducts(false));
  }, [selectedCategory]);

  const loading = loadingCategories || loadingProducts;

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Loading…</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="feed-page">
      <h1>Products</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={products} />
    </div>
  );
}