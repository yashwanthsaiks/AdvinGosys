import './Card.css';
import LazyLoad from 'react-lazyload';

const Card = ({ title, description, imageSrc, onReadMore }) => {
  
  return (
    <LazyLoad>
      <article className="card">
        <img
          className="card__background"
          src={imageSrc}
          alt={title || "Card image"}
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
          </div>
          <button 
            className="card__button" 
            onClick={onReadMore}
          >
            Read more
          </button>
        </div>
      </article>
    </LazyLoad>
  );
};

export default Card;
