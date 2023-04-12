import React from "react";
import Accordion from "../components/Accordion";
import aboutPhoto from "../images/photos/aboutPhoto.jpg";

const About = () => {
  return (
    <main>
      <div className="photoAbout">
        <img src={aboutPhoto} alt="accueil" />
      </div>
      <section id="about">
        <Accordion name="Fiabilité">
          <div>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        </Accordion>
        <Accordion name="Respect">
          <div>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </Accordion>
        <Accordion name="Service">
          <div>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </div>
        </Accordion>
        <Accordion name="Sécurité">
          <div>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </Accordion>
      </section>
    </main>
  );
};

export default About;
