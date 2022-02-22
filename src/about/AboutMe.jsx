function AboutMe() {
    return (
        <div className="aboutme" >
            <h2 className="aboutmeH2">About me</h2>
            <h3 className="aboutmeH3">Hello!  I am <span><strong>Vikas</strong></span></h3>
            <p className="aboutmeP">I am a self taught web developer.<br/><strong>Still learning :)</strong></p>
            <h3 className="aboutmeH3">My Portfolio</h3>
            <p className="aboutmeP">See my work <a href="#portfolio" className="aboutmeA">here</a></p>
            <h3 className="aboutmeH3">Contact me</h3>
            <p className="aboutmeP">Email : viccu7@gmail.com</p>
        </div>
    );
}

// EXPORTING------------------------
export default AboutMe;