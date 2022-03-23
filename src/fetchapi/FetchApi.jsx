import { useEffect, useState } from "react";
var data1 = ''
const FetchApi1 = () => {
    const [content, update] = useState("Loading...");
    // useEffect will prevent calling the api again and again 
    useEffect(() => {
        const FetchData = () => {
            fetch('https://api.covid19api.com/summary').then((res) => {
                // console.log('calling API ...')
                return res.json();
            }).then((jsonData) => {
                let arrData = [jsonData];
                update(arrData);
                // console.log('API recieved')
            })
        }
        FetchData();
    }, [])
    data1 = content;    
}

const Api1 = () => {
    return data1;
}
export { FetchApi1, Api1}