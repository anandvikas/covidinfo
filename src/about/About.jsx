// IMPORTING COMPONENTS OF 'about' PAGE ----------------------------------------
import AboutWeb from "./AboutWeb";
import AboutMe from "./AboutMe";

// IMPORTING CSS ---------------------------------------
import './about.css'

// COMPONENT ---------------------------------------
function About() {
    return (
        <div className="conAbout">
            {/* <AboutWeb /> */}
            <AboutMe />
        </div>
    );
}

// EXPORTING------------------------
export default About;