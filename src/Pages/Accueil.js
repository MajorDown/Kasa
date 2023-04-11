import React, { useContext } from "react";
import { Link } from "react-router-dom";
import accueilPhoto from "../images/photos/accueilPhoto.jpg";
import { locationsContext } from "../App";

const Accueil = () => {
  const locations = useContext(locationsContext);

  return (
    <main>
      <div className="photoAccueil">
        <img src={accueilPhoto} alt="accueil" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <section id="accueil">
        <div id="accueilContainer">
          {locations.map((location) => (
            <Link
              key={location.id}
              className="link"
              to={"/locations/" + location.id}
            >
              <article className="locArticle" key={location.id}>
                <img
                  className="locImg"
                  src={location.cover}
                  alt={location.title}
                />
                <div className="locFilter">.</div>
                <strong className="locTitle">{location.title}</strong>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Accueil;
