import falaise from '../../assets/falaise.png'
import '../../styles/index.scss';

function Home() {

  // hooks
  //useState

  // logique de code


  // rendu
  return (
    <div className="container">
      <div className="home-banner banner">
        <img src={falaise} alt="Une falaise en bord de mer" />
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Home