import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Accueil from "../Pages/Accueil";
import Location from "../Pages/Location";
import Error404 from "../Pages/Error404";

const KasaRouter = () => {
  return (
    <Routes>
      <Route exact path={"/"} Component={Accueil} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/locations/:id" Component={Location} />
      <Route path="*" Component={Error404} />
    </Routes>
  );
};

export default KasaRouter;
