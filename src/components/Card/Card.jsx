import '../../styles/index.scss';
import logements from "../../../public/logements.json";


function Card() {
    const logementsItems = logements.map((logement) =>
        <li key ={logement.id} className='cards__item'>
            <h3>{logement.title}</h3>
            <img src={logement.cover} alt={logement.title} />
        </li>
    );
    return (
        <ul className='cards__list'>{logementsItems}</ul>
    )
}
export default Card;