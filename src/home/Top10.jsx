// IMPORTING API DATA -------------------------------
import { Api1 } from "../fetchapi/FetchApi";
import Pie from './Pie';

// THIS WILL RETURN TOP 10 INFECTED COUNTRIES ---------------------------------
const Top10data = () => {
    var Api1data = Api1();
    if (typeof (Api1data) === 'object') {
        let sortedData = sortData(Api1data)
        // console.log(sortedData)
        return (
            <>
                <div className="tableData">
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Cases</th>
                            </tr>
                        </thead>
                        {
                            sortedData.map((val, ind) => {
                                return (
                                    <tbody key={ind}>
                                        <tr>
                                            <td>{val.con}</td>
                                            <td>{val.cas}</td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        }
                    </table>
                </div>
                <div className="chartData">
                    <Pie sortedData={sortedData} />
                </div>
            </>
        );
    } else {
        return (
            <h1>loading data</h1>
        );
    }
}

// THIS WILL CALCULATE TOP 10 INFECTRD COUNTRIES ---------------------------------
function sortData(Api1data) {
    let cases = []
    for (let i = 0; i < Api1data[0].Countries.length; i++) {
        cases.push(Api1data[0].Countries[i].TotalConfirmed)
    }
    let sortedCases = cases.sort(function (a, b) { return (b - a) })
    let sortedData = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < Api1data[0].Countries.length; j++) {
            if (sortedCases[i] === Api1data[0].Countries[j].TotalConfirmed) {
                sortedData.push({ con: Api1data[0].Countries[j].Country, cas: sortedCases[i] })
            }
        }
    }
    return sortedData
}

// COMPONENT -------------------------------------------------------------------
const Top10 = () => {
    return (
        <>
            <div className="con2home">
                <h2 className="con2homeH2">Top 10 most infected countries</h2>
                <Top10data />
            </div>
        </>
    );
}
export default Top10;

