export const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Error getting categories");
  return await res.json();
};

export const fetchProducts = async (category = null) => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
    : "https://fakestoreapi.com/products";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error while receiving products");
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Error retrieving product data");
  return await res.json();
};