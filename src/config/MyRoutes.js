import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductDetail from '../pages/ProductDetail'
import Products from '../pages/Products'
const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/haqqimizda" element={<About/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
export default MyRoutes