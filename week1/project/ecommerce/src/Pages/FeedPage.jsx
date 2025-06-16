import React, { useState, useEffect } from "react";
import "./FeedPage.css";
import CategoryFilter from "../Composite/CategoryFilter";
import ProductList from "../Composite/ProductList";

import categories from "../../fake-data/all-categories";
import allProducts from "../../fake-data/all-products";

export default function FeedPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (!selectedCategory) {
      setProducts(allProducts);
    } else {
      const cleanedCategory = selectedCategory.replace("FAKE: ", "");
      const filtered = allProducts.filter(
        (product) => product.category === cleanedCategory
      );
      setProducts(filtered);
    }
  }, [selectedCategory]);

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
