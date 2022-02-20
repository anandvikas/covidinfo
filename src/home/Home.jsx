// IMPORTING CSS --------------------------------------------------
import './home.css'

// IMPORTING COMPONENTS -----------------------------------------
import GlobalData from "./GlobalData";
import Top10 from "./Top10";
import CountrySearch from './CountrySearch';
import { FetchApi1 } from "../fetchapi/FetchApi";

// COMPONENT ------------------------------------------------
const Home = () => {  
    FetchApi1();      
    return (
        <>
            <GlobalData/>      
            <Top10/> 
            <CountrySearch/>     
        </>
    );
}
export default Home;

