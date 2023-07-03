import React from 'react';

const AboutCard = ({ title, description, imageUrl }) => {
  return (
    <div className="about-card">
      <img className="about-card__image" src={imageUrl} alt={title} />//change to image
      <h2 className="about-card__title">{title}</h2>
      <p className="about-card__description">{description}</p>
    </div>
  );
};

export default AboutCard;
