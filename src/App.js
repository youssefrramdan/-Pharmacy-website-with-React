import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductForm from './Components/ProductForm';
import ProductDetails from './Components/ProductDetails';
import LoginRegister from './Components/LoginRegister';
import SharedLayout from './Components/SharedLayout';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<ProductForm />} /> {/* تعديل */}
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
        <Route path="login" element={<LoginRegister />} />
        <Route path="register" element={<LoginRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
