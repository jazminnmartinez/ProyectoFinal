import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import './Explorar.css';

// Importar las imágenes desde la carpeta src
import imagen1 from './images/Imagen1.jpg';
import imagen2 from './images/Imagen2.jpg';
import imagen3 from './images/Imagen3.jpg';
import imagen4 from './images/Imagen4.jpg';
import imagen5 from './images/Imagen5.jpg';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
 
 
  const customImages = [
    {
      id: 1,
      image: imagen1,  
      title: 'Animales',
    },
    {
      id: 2,
      image: imagen2,
      title: 'Arte',
    },
    {
      id: 3,
      image: imagen3,
      title: 'Belleza',
    },
    {
      id: 4,
      image: imagen4,
      title: 'Hogar',
    },
    {
      id: 5,
      image: imagen5,
      title: 'Diseño',
    },
  ];

  // Filtrar imágenes según el texto de búsqueda
  const fetchImages = (query) => {
    if (query) {
      return customImages.filter((image) =>
        image.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return customImages;
  };

  useEffect(() => {
    setImages(fetchImages(searchQuery));
  }, [searchQuery]);

  return (
    <div className="explorar">
      <div className="explorar__busqueda">
        <input
          type="text"
          placeholder="Buscar imágenes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="explorar__grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image.image}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
