import React from 'react';
import { Link } from 'react-router-dom'; 
import './Menu.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png" 
          alt="Pinterest" 
        />
      </div>

      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button className="search-btn">Buscar</button>
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/home">Inicio</Link></li> 
          <li><Link to="/explore">Explorar</Link></li> 
          <li><Link to="/information">Información</Link></li> 
        </ul>
      </nav>

      <nav>
        <div className="login">
          <Link to="/login" className="login-btn">Iniciar sesión</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
