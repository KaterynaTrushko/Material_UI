import * as React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}
