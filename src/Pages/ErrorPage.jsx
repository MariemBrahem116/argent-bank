import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css'

function ErrorPage() {
  return (
    <main className="errorWrapper">
       <h1 className="errorNumber">Erreur</h1>
       <h2 className="errorDescription">
          La page que vous recherchez n'existe pas.
       </h2>
       <Link className="errorHomelink" to="/">
          Retourner sur la page d'accueil
       </Link>
    </main>
 );
}

export default ErrorPage