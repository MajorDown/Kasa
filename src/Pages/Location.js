import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { locationsContext } from "../App";
import Accordion from "../components/Accordion";
import Rater from "../components/Rater";
import Carousel from "../components/Carousel";

const Location = () => {
  const locations = useContext(locationsContext);
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === id);

  return (
    <main>
      <section id="location" key={"loc" + location.id}>
        <Carousel album={location.pictures} time={10000} />
        <div className="locPresentation">
          <div className="locIntro">
            <h2>{location.title}</h2>
            <p>{location.location}</p>
          </div>
          <ul className="locTags">
            {location.tags.map((tag) => {
              return <li key={tag}>{tag}</li>;
            })}
          </ul>
          <div className="locHost">
            <p className="hostName">{location.host.name}</p>
            <div className="hostBadge">
              <img
                className="hostImg"
                src={location.host.picture}
                alt={location.host.name}
              />
            </div>
          </div>
          <Rater rate={location.rating} />
        </div>
        <div className="accordionsContainer">
          <Accordion name="Description">{location.description}</Accordion>
          <Accordion name="Equipements">
            <ul>
              {location.equipments.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default Location;
