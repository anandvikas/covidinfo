import { useState } from 'react'

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
    const [page, updatePage] = useState(<><Home /></>)

    // this will set home page as the current page 
    const setHome = () => { updatePage(<><Home /></>) }
    // this will set vaccination page as the current page 
    const setVaccination = () => { updatePage(<><Vaccination /></>) }
    // this will set precautions page as the current page 
    const setPrecautions = () => { updatePage(<><Precautions /></>) }
    // this will set about page as the current page 
    const setAbout = () => { updatePage(<><About /></>) }

    return (
        <>
            <Header />
            <Navbar 
                setHome = {setHome}
                setVaccination = {setVaccination}
                setPrecautions = {setPrecautions}
                setAbout = {setAbout}
            />
            {page}
            <Footer />
        </>
    );
}

// EXPORTING ---------------------------------------------------
export default App;