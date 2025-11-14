import logements from "../../../public/logements.json";
import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';
import '../../styles/index.scss';


function Logements() {
  const logementInfos = logements.map((logement) =>
    <div key={logement.id}>

      <Slideshow 
        pictures={logement.pictures}
        title={logement.title}
      />

    </div>
  );

  return (
    <div className="container">
      {logementInfos}
    </div>
  );
}

export default Logements;