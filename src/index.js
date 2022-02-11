// IMOPTING ESSENTIALS ------------------------------------- 
// import react from 'react';
import reactDom from 'react-dom';

// IMPORTING COMPONENTS AND CSS FILE -------------------------
import Headder from './Headder'
import Navbar from './Navbar'
import About from './About';
import Footer from './Footer';
import './index.css'

// RENDER OF 'about' PAGE ----------------------------- 
reactDom.render(
  <>
    <Headder />
    <Navbar />
    <About />
    <Footer />
  </>, document.getElementById('root'));