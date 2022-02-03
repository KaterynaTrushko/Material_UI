import * as React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import Catalogue from './pages/Catalogue';
import About  from './pages/About';
import Delivery from './pages/Delivery';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';


export function App() {
  return (
    <Routes>
       <Route path="/" element={<Catalogue/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/delivery" element={<Delivery/>} />
       <Route path="/cart" element={<Cart/>} />
       <Route path="*" element={<Page404/>} />
    </Routes>
  )
}