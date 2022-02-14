import { useEffect, useState } from "react";
var data = ''

const FetchApi1 = () => {
    const [content, update] = useState("Loading...");
    // useEffect will prevent calling the api again and again 
    useEffect(() => {
        const FetchData = () => {
            fetch('https://api.covid19api.com/summary').then((res) => {
                console.log('calling api ...')
                return res.json();
            }).then((jsonData) => {
                let arrData = [jsonData];
                update(arrData);
            })
        }
        FetchData();
    }, [])
    data = content;
}

const Api1 = () => {
    return data;
}

export {FetchApi1, Api1}