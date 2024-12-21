import React from 'react';
import './ImageCard.css'; 

const ImageCard = ({ image, title }) => {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="image-card__img" />
      <div className="image-card__info">
        <h3 className="image-card__title">{title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
