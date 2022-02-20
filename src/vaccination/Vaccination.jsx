import { useEffect, useState } from "react";
// IMPORTING STYLE -------------------------------------
import './vaccination.css'
// READ DATA --------------------------------
function getDate() {
    const d = new Date();
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = d.getFullYear()
    return `${day}-${month}-${year}`;
}

// FETCHING THE API ----------------------------------------
const FetchApi2 = (value, date, update) => {
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${value}&date=${date}`).then((res) => {
        return res.json()
    }).then((jsonData) => {
        let Api2Data = [jsonData]
        if (Api2Data[0].sessions.length == 0) {
            alert('data not available')
        } else {
            console.log(Api2Data)
            let data = organise(Api2Data)
            update(data)
        }

    })
}

// DATA ORGANISER ---------------------------------------------
const organise = (Api2Data) => {
    return (
        Api2Data[0].sessions.map((val) => {
            return (
                <tbody>
                    <tr>
                        <td>{val.name}</td>
                        <td>{val.center_id}</td>
                        <td>{val.available_capacity}</td>
                    </tr>
                </tbody>
            )
        })
    )
}

// COMPONENT ----------------------------------------
const Vaccination = () => {
    const [state, update] = useState('')
    function readData() {
        update('')
        let value = document.getElementById('myInput2').value
        if (value == '') {
            alert('Please input the pin')
        } else if (99999 < value && value < 1000000) {
            var date = getDate()
            FetchApi2(value, date, update)
        } else {
            alert('Invalid Pin')
        }
    }

    return (
        <>
            <div className="con1vaccination">
                <h1>Search for Vaccination slot (India)</h1>
                <div className="pinSearch">
                    <input id="myInput2" type="number" name="myRegion" placeholder="Enter the Pin Code" />
                    <button id="searchButton2" onClick={readData}>Search</button>
                </div>
            </div>
            <div className="con2vaccination">
                <table id="table">
                    <thead>
                        <tr>
                            <th>Center name</th>
                            <th>Center ID</th>
                            <th>Slot available</th>
                        </tr>
                    </thead>
                    {state}
                </table>
            </div>
        </>
    );
}
export default Vaccination;