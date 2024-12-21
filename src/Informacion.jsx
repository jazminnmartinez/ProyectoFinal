
import React from 'react';
import './Informacion.css'; 

const Information = () => {
  return (
    <div className="information-container">
      <h1 className="title">Acerca de Pinterest</h1>

      <section className="intro">
        <h2>¿Qué es Pinterest?</h2>
        <p>
        Pinterest es un motor de descubrimiento visual para encontrar ideas como recetas, inspiración para el hogar y de estilo, y mucho más.
        Con miles de millones de Pines en Pinterest, siempre encontrarás ideas que despierten tu inspiración. Cuando descubras Pines que te gusten, guárdalos en tableros para que tus ideas estén organizadas y sean fáciles de encontrar. 
        También puedes crear Pines para compartir tus ideas con otras personas en Pinterest.
        Tienes que cumplir con los requisitos de edad mínima para registrarte, y tenemos ciertas protecciones para los adolescentes. Obtén más información sobre la seguridad de los adolescentes en Pinterest .
        </p>
      </section>

      <section className="feed">
        <h2>Explorar el feed de inicio</h2>
        <p>
        En tu feed de inicio encontrarás Pines, personas y empresas que pensamos que te van a gustar basándonos en tu actividad reciente. Además, te mostraremos Pines de las personas y los tableros que sigues.
        También puedes escribir palabras clave en la barra de búsqueda para buscar Pines. Intenta escribir "fiesta de cumpleaños" en la barra de búsqueda para ver ideas de decoración para fiestas de cumpleaños, 
        recetas de comida para fiestas e ideas de regalos para fiestas.
        </p>
      </section>

      <section className="ideas">
        <h2>Descubre ideas</h2>
        <p>
        Usa la barra de búsqueda para descubrir ideas, personas y tendencias. Explora temas sugeridos o busca tus propios temas. Toca Perfiles en la página de búsqueda para descubrir creadores, personas y marcas en función de tu búsqueda. Usa tu cámara para encontrar ideas
        relevantes para tus fotos y limitar los resultados de belleza por gama de tonos de piel o tipo de cabello.
        </p>
      </section>

      <section className="contact">
        <h2>¿Aún necesitas ayuda?</h2>
        <p>
          <h2>¿Fue útil este artículo?</h2>
        </p>
      </section>
    </div>
  );
};

export default Information;
