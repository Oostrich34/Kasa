import Card from '../../components/Card/Card';
import falaise from '../../assets/falaise.png';
import Banner from '../../components/Banner/Banner';
import '../../styles/index.scss';


  // hooks
  //useState

  // logique de code

function Home() {
  // rendu
  return (
    <div className="container">
      <Banner image={falaise} altText="Des falaises en bord de mer" title="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  )
}

export default Home