// IMPORTING COMPONENTS ------------------------------------------
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
// import Precautions from './precautions/Precautions'
// import About from './about/About'

// IMPORTING CSS -----------------------------------------------------
import './index.css'

// COMPONENT -------------------------------------------

const App = () =>{
    return (
        <>
            <Header/>
            <Navbar/>
            <Home/>
            {/* <About/> */}
            {/* <Precautions/> */}
            <Footer/>
        </>
    );
}

// EXPORTING ---------------------------------------------------
export default App;