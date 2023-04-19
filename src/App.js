import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import KasaRouter from "./components/KasaRouter";

export const locationsContext = createContext();

function App() {
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/logements.json")
      .then((response) => response.json())
      .then((data) => setLocationsList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <locationsContext.Provider value={locationsList}>
        <KasaRouter />
      </locationsContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
