import falaise from '../../assets/falaise.png';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../styles/index.scss';
import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';

  // hooks
  //useState

  // logique de code

function Home() {

  // rendu
  return (
    <div className="container">
      <Banner 
        image={falaise} 
        altText="Des falaises en bord de mer" 
        title="Chez vous, partout et ailleurs" 
      />
      <section className="cards__container">
        <ul className="cards__list">
          {logements.map((logement) => (
            <Link key={logement.id} to={`/logements/${logement.id}`}>
              <Card 
                title={logement.title}
                cover={logement.cover}
              />
            </Link>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home