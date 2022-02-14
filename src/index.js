// IMOPTING ESSENTIALS ------------------------------------- 
// import react from 'react';
import reactDom from 'react-dom';

// IMPORTING COMPONENTS AND CSS FILE -------------------------
import './index.css'
import Headder from './Headder'
import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
// import About from './About';
// import Precautions from './Precautions';


// // RENDER OF 'about' PAGE ----------------------------- 
// reactDom.render(
//   <>
//     <Headder />
//     <Navbar />
//     <About />
//     <Footer />
//   </>, document.getElementById('root'));

// // RENDER OF 'precautions' PAGE ----------------------------- 
// reactDom.render(<>
//   <Headder />
//   <Navbar />
//   <Precautions />
//   <Footer />
// </>, document.getElementById('root'));

// RENDER OF 'home' PAGE ----------------------------- 
reactDom.render(<>
  <Headder />
  <Navbar />  
  <Home />
  <Footer />
</>, document.getElementById('root'));