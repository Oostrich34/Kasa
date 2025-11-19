import React from 'react';

const Banner = ({ image, altText, title }) => {
    return (
        <div className="banner">
            <img src={image} alt={altText}/>

            {/* Titre affiché si présent */}
            {(title) && (
                <h1 className="titleBanner">
                    {title}
                </h1>
            )}
        </div>
    );
};

export default Banner;

