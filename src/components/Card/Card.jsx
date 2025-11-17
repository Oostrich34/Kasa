import '../../styles/index.scss'

function Card({ title, cover }) {
    return (
        <li className='cards__item'>
            <h3>{title}</h3>
            <img src={cover} alt={title} />
        </li>
    );
}
export default Card;