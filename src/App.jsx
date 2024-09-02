import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

import Footer from "./Components/Footer/Footer";
import Service from "./Page/Service/Service";
import Homepage from "./Page/Home/Homepage";
import NotFound from "./Page/NotFound/NotFound";
import Product from "./Page/Product/Product";
import Contactpage from "./Page/Contactpage/Contactpage";
import UnderFooter from "./Components/Footer/UnderFooter";
import ScrollToTopButton from "./Components/Scroll/ScrollToTopButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <UnderFooter/>
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
