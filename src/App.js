import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Description from "./components/Description";

function App() {
  console.log("app");

  return (
    <div className="App">
      <Header />
      <Map />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
