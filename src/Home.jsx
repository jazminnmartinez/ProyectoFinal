import React from 'react';
import './Home.css';

// Importar imágenes
import imagen1 from './images/Imagen6.jpg';
import imagen2 from './images/Imagen7.jpg';
import imagen3 from './images/Imagenn8.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Descubre ideas únicas</h1>
        <p className="home__subtitle">Explora millones de imágenes y encuentra inspiración para tus proyectos</p>
        <div className="home__searchContainer">
          <input
            type="text"
            placeholder="Buscar ideas"
            className="home__searchInput"
          />
        </div>
        <div className="home__images">
          <img
            className="home__image"
            src={imagen1} 
            alt="Imagen ejemplo 1"
          />
          <img
            className="home__image"
            src={imagen2} 
            alt="Imagen ejemplo 2"
          />
          <img
            className="home__image"
            src={imagen3} 
            alt="Imagen ejemplo 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
