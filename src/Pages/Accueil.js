import React, { useContext } from "react";
import { Link } from "react-router-dom";
import accueilPhoto from "../images/photos/accueilPhoto.jpg";
import { locationsContext } from "../App";

const Accueil = () => {
  const locations = useContext(locationsContext);

  return (
    <div>
      <main>
        <div className="pagePhoto">
          <img src={accueilPhoto} alt="accueil" />
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
        <section id="accueil">
          {locations.map((location) => (
            <Link
              key={location.id}
              className="link"
              to={"/locations/" + location.id}
            >
              <article className="locArticle" key={location.id}>
                <img src={location.cover} alt={location.title} />
                <div className="locFilter"></div>
                <strong className="locTitle">{location.title}</strong>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Accueil;
