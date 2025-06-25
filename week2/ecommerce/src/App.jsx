import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import FeedPage from './Pages/FeedPage';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
