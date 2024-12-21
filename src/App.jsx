import React from 'react';
import { useForm } from 'react-hook-form';
import { Routes, Route } from 'react-router-dom'; 
import Header from './Menu';
import Footer from './Footer'; 
import Login from './Login';
import Home from './Home';
import Explore from './Explorar';
import Information from './Informacion';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/information" element={<Information />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;









