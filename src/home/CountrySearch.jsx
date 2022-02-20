import { useState } from "react";
// IMPORTING DATA ---------------------------------------------
import { Api1 } from "../fetchapi/FetchApi";

// COMPONENT -------------------------------------------------
const CountrySearch = () => {
    let Api1data = Api1()    
    const [state, update] = useState('')
    function display(){
        let val = document.getElementById('myInput').value
        if(typeof(Api1data) == 'object'){ 
            for(let i=0;i<Api1data[0].Countries.length;i++){
                if(val == Api1data[0].Countries[i].Country){                  
                    update(<>Country : {val}<br/>Totol Confirmed : { Api1data[0].Countries[i].TotalConfirmed}<br/>Total Deaths : {Api1data[0].Countries[i].TotalDeaths}</>)
                }
            }
        } else {
            update('Could not fetch API')
        }
    }
    return (
        <>
            <div className="countrySearch">
                <div>
                    <input id="myInput" type="text" placeholder="Search Your Country" />
                </div>
                <button id="searchButton" onClick={display}>Search</button>
            </div>
            <div id="countryResult">{state}</div>
        </>
    );
}
export default CountrySearch;