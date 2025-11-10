import '../../styles/index.scss';
import { useEffect, useState } from 'react';

const Card = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/logements.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cards-container">
            <div className="cards">
                {data.map((logement) => (
                <div key={logement.id} className="card">
                    <img src={logement.cover} alt={logement.description} />
                    <h3>{logement.title}</h3>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Card;