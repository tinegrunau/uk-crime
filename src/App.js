import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
