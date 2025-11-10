import '../../styles/index.scss';

const Banner = ({ image, altText, title }) => {
    return (
        <div className="banner">
            <img src={image} alt={altText}/>

            {/* Titre affiché si présent */}
            {(title) && (
                <h2 className="banner-title">
                    {title}
                </h2>
            )}
        </div>
    );
};

export default Banner;

