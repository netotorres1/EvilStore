import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

const routes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/productlist' element={<ProductList/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes