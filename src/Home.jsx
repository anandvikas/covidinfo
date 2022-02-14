import GlobalData from "./GlobatData";
import { FetchApi1 } from "./FetchApi";


const Home = () => {  
    FetchApi1();      
    return (
        <>
            <GlobalData/>            
        </>
    );
}
export default Home;

