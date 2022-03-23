import { useState } from 'react';
import { NavLink } from "react-router-dom"

// IMPORTING CSS ------------------------------------------
import './navbar.css'

// COMPONENT --------------------------------------
function Navbar() {
    const [classState, updateClassState] = useState("conNavLink")
    const toggleVisibility = () => {
        if (classState === "conNavLink") {
            updateClassState("conNavLink visible")            
        } else if (classState === "conNavLink visible"){
            updateClassState("conNavLink")
        }
    }
    return (
        <div className='conNav'>
            <div className={classState}>
                <NavLink className="navlink" to='/covidinfo'>Home</NavLink>
                <NavLink className="navlink" to='/covidinfo/vaccination'>Vaccination</NavLink>
                <NavLink className="navlink" to='/covidinfo/precaution'>Precautions</NavLink>
                <NavLink className="navlink" to='/covidinfo/about'>About</NavLink>
            </div>
            <button id='responsiveIcon' onClick={toggleVisibility}><i className="fa fa-bars"></i></button>
        </div>
    );
}

export default Navbar;