// IMPORTING CSS --------------------------------------------------
import './home.css'

// IMPORTING COMPONENTS -----------------------------------------
import GlobalData from "./GlobalData";
import Top10 from "./Top10";
import { FetchApi1 } from "./FetchApi";

// COMPONENT ------------------------------------------------
const Home = () => {  
    FetchApi1();      
    return (
        <>
            <GlobalData/>      
            <Top10/>      
        </>
    );
}
export default Home;

