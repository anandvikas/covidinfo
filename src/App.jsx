import { Route, Routes } from 'react-router-dom';

// IMPORTING COMPONENTS ------------------------------------------
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
import Vaccination from './vaccination/Vaccination'
import Precautions from './precautions/Precautions'
import About from './about/About'

// IMPORTING CSS -----------------------------------------------------
import './index.css'


// COMPONENT -------------------------------------------

const App = () => {      

    return (
        <>
            <Header />
            <Navbar/>            
            <Routes>
                <Route path='/covidinfo' element={<Home/>} />
                <Route path='/covidinfo/vaccination' element={<Vaccination/>} />
                <Route path='/covidinfo/precaution' element={<Precautions/>} />
                <Route path='/covidinfo/about' element={<About/>} />
            </Routes>
            <Footer />
        </>
    );
}

// EXPORTING ---------------------------------------------------
export default App;