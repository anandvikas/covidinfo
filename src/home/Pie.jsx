import { useEffect } from "react";
import { Api1 } from "../fetchapi/FetchApi";
import Chart from 'chart.js/auto';


const Pie = (props) => {    
    let api1Data = Api1()
    // console.log(api1Data[0].Global.TotalConfirmed)
    let sortedData = props.sortedData
    console.log(sortedData)

    let xValues = []
    let yValues = []
    let colors = ['#d32f2f', '#7b1fa2', '#303f9f', '#0288d1', '#00796b', '#689f38', '#fbc02d', '#f57c00', '#f57c00', '#f57c00', '#efebe9']

    xValues = sortedData.map((val) => { return val.con })
    xValues.push('others')
    // console.log(xValues)

    let total10 = 0
    yValues = sortedData.map((val) => { total10 += val.cas; return val.cas })
    yValues.push(api1Data[0].Global.TotalConfirmed - total10)
    // console.log(yValues)

    useEffect(() => {
        new Chart("myChart", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: colors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Most infected countries"
                }
            }
        });
    }, [])

    return (
        <>            
            <canvas id="myChart" ></canvas>
        </>
    )
}
export default Pie;