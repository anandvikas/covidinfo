// IMPORTING THE IMAGES -----------------------------------------
import slide1 from './images/slide1.JPG';

import { Api1 } from "./FetchApi";

const SlideImage = () => {
    return (
        <div className="con1_img">
            <img src={slide1} alt="img1" id="img1" className="slideImage" />
            {/* <img src="images/slide2.jpg" alt="img2" id="img2" className="slideImage"/> */}
            {/* <img src="images/slide3.jpg" alt="img3" id="img3" className="slideImage"/> */}
        </div>
    );
}

const GlobalData = () => {
    var Api1data = Api1()
    if (typeof (Api1data) == 'object') {
        console.log('object')
        return (
            <>
            <div div className="con1" >
                <div className="con1_text">
                    <h1>World wide</h1>
                    <h2>Total confirmed <span id="totalConfirmed"><strong>{Api1data[0].Global.TotalConfirmed}</strong></span></h2>
                    <h2>Total deaths <span id="totalDeaths"><strong>{Api1data[0].Global.TotalDeaths}</strong></span></h2>
                </div>
                <SlideImage/>
            </div>
            </>
        )

    } else {
        console.log('string')
        return (
            <>
            <div div className="con1" >
                <div className="con1_text">
                    <h1>World wide</h1>
                    <h2>Total confirmed <span id="totalConfirmed"><strong>{Api1data}</strong></span></h2>
                    <h2>Total deaths <span id="totalDeaths"><strong>{Api1data}</strong></span></h2>
                </div>
                <SlideImage/>
            </div>
            </>
        )
    }
}

export default GlobalData;



// ====================================================================================

// // IMPORTING ESSENTIALS --------------------------------------
// import { useEffect, useState } from "react";

// const organise = (arrData) => {
//     return (
//         <>
//             <h1>World wide</h1>
//             <h2>Total confirmed <span id="totalConfirmed"><strong>{arrData[0].Global.TotalConfirmed}</strong></span></h2>
//             <h2>Total deaths <span id="totalDeaths"><strong>{arrData[0].Global.TotalDeaths}</strong></span></h2>
//         </>
//     );
// }

// const GlobalData = () => {
//     const [content, update] = useState("Loading the data . . .");
//     // useEffect will prevent calling the api again and again
//     useEffect(() => {
//         const FetchData = () => {
//             fetch('https://api.covid19api.com/summary').then((res) => {
//                 console.log('calling api ...')
//                 return res.json();
//             }).then((jsonData) => {
//                 let arrData = [jsonData];
//                 update(organise(arrData));
//             })
//         }
//         FetchData();
//     }, [])

//     return (
//         <div className="con1">
//             <div className="con1_text">{content}</div>
//             <div className="con1_img">
//                 <img src={slide1} alt="img1" id="img1" className="slideImage" />
//                 {/* <img src="images/slide2.jpg" alt="img2" id="img2" className="slideImage"/> */}
//                 {/* <img src="images/slide3.jpg" alt="img3" id="img3" className="slideImage"/> */}
//             </div>
//         </div>
//     );
// }

// export default GlobalData;


