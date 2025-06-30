import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import FeedPage from './Pages/FeedPage';
import ProductDetail from './Pages/ProductDetail';
import Navbar from './Composite/Navbar';
import FavouritesPage from './Pages/FavouritesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
