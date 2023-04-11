import React, { createContext, useState, useEffect } from "react";
import About from "./Pages/About";
import Accueil from "./Pages/Accueil";
import Location from "./Pages/Location";
import Header from "./components/Header";
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
          <Route path="/about" Component={About} />
          <Route path="locations/:id" Component={Location} />
        </Routes>
      </locationsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
