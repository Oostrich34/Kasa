import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';


function Logements() {
  const { id } = useParams();
  // Regarder dans la liste de logements l'identifiant de chaque logement et comparer s'il
  // est celui qui a ete fourni en parametre a la route
  const logement = logements.find(logement => logement.id === id);


  return (
    <div className='container'>

      <Slideshow 
        pictures={logement.pictures}
        title={logement.title}
      />

    <div className='logementInfo'>
        <h3>{logement.title}</h3>
        <h4>{logement.location}</h4>

      </div>

      <div className='logementTags'>

      </div>

      <div className='logementRate'>

      </div>

      <Dropdown title="Description">
        <p>{logement.description}</p>
      </Dropdown>

      <Dropdown title="Equipements">
        <ul>
          {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </Dropdown>

    </div>
  );
}

export default Logements;