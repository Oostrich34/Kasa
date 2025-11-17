import { useParams } from 'react-router-dom';
import logements from "../../../public/logements.json";
import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';


function Logements() {
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);


  return (
    <div className='container'>

      <Slideshow 
        pictures={logement.pictures}
        title={logement.title}
      />

    </div>
  );
}

export default Logements;