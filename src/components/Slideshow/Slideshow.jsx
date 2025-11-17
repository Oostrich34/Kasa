import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
import '../../styles/index.scss';

function Slideshow({ pictures, title }) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const totalPictures = pictures.length;

    const prevSlide = () => {
        setCurrentPicture((currentPicture) =>
            currentPicture > 0 ? currentPicture - 1 : totalPictures - 1
        );
    }


    const nextSlide = () => {
        setCurrentPicture((currentPicture) =>
            currentPicture < totalPictures - 1 ? currentPicture + 1 : 0
        );
    }

    return (
        <div className="logementPicture">
            <img src={pictures[currentPicture]} 
                alt={`${title}`} 
                className='currentPicture' 
            />
            
            {totalPictures > 1 && (
                <>
                    <FaChevronLeft  alt='flèche droite' 
                                    className='arrow leftArrow' 
                                    onClick={prevSlide} 
                    />

                    <FaChevronRight  alt='flèche droite' 
                                    className='arrow rightArrow' 
                                    onClick={nextSlide} 
                    />
                    <p>{currentPicture + 1}/{totalPictures}</p>
                </>
            )}
        </div>
    )
}


export default Slideshow;