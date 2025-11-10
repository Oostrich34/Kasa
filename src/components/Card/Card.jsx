import '../../styles/index.scss';
import { useEffect, useState } from 'react';

const Card = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Définition d'une fonction asynchrone à l'intérieur de useEffect
        const fetchData = async () => {
            try {
                const response = await fetch('/logements.json');
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        fetchData(); // Appel de la fonction
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