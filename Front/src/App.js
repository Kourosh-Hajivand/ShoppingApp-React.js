import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Headers/Header";
import Footers from "./Components/Footers/Footers";
import Products from "./Pages/Products";
import "./App.css";
import { Container } from "react-bootstrap";
import Account from "./Pages/Account";
import Singin from "./Pages/Sign-in";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Products/:name" element={<Products />} />
            <Route path="/Profile" element={<Account />} />
            <Route path="/Sign-in" element={<Singin />} />
          </Routes>
        </Container>
      </main>
      <Footers />
    </>
  );
}

export default App;
