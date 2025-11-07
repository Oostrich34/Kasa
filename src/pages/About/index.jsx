import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

function About() {
  return (
    <div className="container">
      <div className="about-banner banner">
        <img src="../src/assets/montagne.png" alt="Un paysage avec des montagnes" />
      </div>
      <section className="company-values">
        <div className="dropdown-container">
          <div className="dropdown-title">
            <h2>Fiabilité</h2>
            <div className="chevron">
              <FaChevronDown className="chevronDown__icon" />
              <FaChevronUp className="chevronUp__icon" />
            </div>
          </div>
          <div className="dropdown-description">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements et touts les informations 
              sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="dropdown-container">
           <div className="dropdown-title">
            <h2>Respect</h2>
            <div className="chevron">
              <FaChevronDown className="chevronDown__icon" />
              <FaChevronUp className="chevronUp__icon" />
            </div>
          </div>
          <div className="dropdown-description">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
              Tout comportement discriminatoire ou de perturbation du voisinage 
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="dropdown-container">
           <div className="dropdown-title">
            <h2>Service</h2>
            <div className="chevron">
              <FaChevronDown className="chevronDown__icon" />
              <FaChevronUp className="chevronUp__icon" />
            </div>
          </div>
          <div className="dropdown-description">
            <p>La qualité du service est au coeur de notre engagement chez Kasa.
              Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, 
              soit empreinte de respect et de bienveillance.
            </p>
          </div>
        </div>
        <div className="dropdown-container">
           <div className="dropdown-title">
            <h2>Sécurité</h2>
            <div className="chevron">
              <FaChevronDown className="chevronDown__icon" />
              <FaChevronUp className="chevronUp__icon" />
            </div>
          </div>
          <div className="dropdown-description">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
              chaque logements correspond aux critères de sécurité établis par nos services. 
              En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
              de vérifier que les standards sont bien respectés. Nous organisons également des ateliers 
              sur la sécurité domestique pour nos hôtes.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About