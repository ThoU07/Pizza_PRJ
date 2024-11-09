// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PizzaMenu from "./components/Menu";
import Footer from "./components/Footer";
import Register from "./components/Modal";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PizzaMenu />
      <Footer />
    </div>
  );
};

export default App;
