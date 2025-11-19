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
    <section className='logementContainer'>

      <Slideshow 
        pictures={logement.pictures}
        title={logement.title}
      />

      <div className='logementInfos'>
        <div className='logementTitle'>
          <h2>{logement.title}</h2>
          <h4>{logement.location}</h4>
        
          {logement.tags.map((tag, index) => (
            <span key={index}>
              {tag}
            </span>
          ))}
        </div>

      

        <div className="logementHostRating">
          <div className="logementHost">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}, propriétaire du logement`} />
          </div>
          {/*<Rating rating={logement.rating} />*/}
        </div>
      </div>
      
      <div className='logementDropdowns'>
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
    </section>
  );
}

export default Logements;