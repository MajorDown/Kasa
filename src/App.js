import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Accueil from "./Pages/Accueil";
import Location from "./Pages/Location";
import Error404 from "./Pages/Error404";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route exact path="/" Component={Accueil} />
          <Route exact path="/about" Component={About} />
          <Route path="locations/:id" Component={Location} />
          <Route path="*" Component={Error404} />
        </Routes>
      </locationsContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
