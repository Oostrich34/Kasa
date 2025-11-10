import Card from '../../components/Card/Card';
import falaise from '../../assets/falaise.png'
import '../../styles/index.scss';


  // hooks
  //useState

  // logique de code

function Home() {
  // rendu
  return (
    <div className="container">
      <div className="home-banner banner">
        <img src={falaise} alt="Une falaise en bord de mer" />
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
      <Card></Card>
    </div>
  )
}

export default Home