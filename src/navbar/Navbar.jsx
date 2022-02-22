import { useState } from 'react';

// IMPORTING CSS ------------------------------------------
import './navbar.css'

// COMPONENT --------------------------------------
function Navbar(props) {
    const [classState, updateClassState] = useState("conNavLink")
    const toggleVisibility = () => {
        if (classState == "conNavLink") {
            updateClassState("conNavLink visible")            
        } else if (classState == "conNavLink visible"){
            updateClassState("conNavLink")
        }
    }
    return (
        <div className='conNav'>
            <div className={classState}>
                <button className="navlink" onClick={props.setHome}>Home</button>
                <button className="navlink" onClick={props.setVaccination}>Vaccination</button>
                <button className="navlink" onClick={props.setPrecautions}>Precautions</button>
                <button className="navlink" onClick={props.setAbout}>About</button>
            </div>
            <button id='responsiveIcon' onClick={toggleVisibility}><i class="fa fa-bars"></i></button>
        </div>
    );
}

export default Navbar;