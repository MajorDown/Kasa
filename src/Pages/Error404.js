import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main>
      <section id="error404">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error404RedirectLink" to="/">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </main>
  );
};

export default Error404;
