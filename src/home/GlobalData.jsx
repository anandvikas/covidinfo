import { useEffect, useState } from 'react';

// IMPORTING THE IMAGES -----------------------------------------
import slide1 from '../images/slide1.JPG';
import slide2 from '../images/slide2.JPG';
import slide3 from '../images/slide3.JPG';
// IMPORTING API DATA -----------------------------------
import { Api1 } from "../fetchapi/FetchApi";

// IMAGE SLIDESHOW ----------------------------------------
const images = [slide1, slide2, slide3]
var i = 0;
const SlideImage = () => {
    const [currImg, updateImg] = useState(images[i])
    useEffect(() => {
        const changeImg = () => {
            i = i + 1;
            updateImg(images[i-1])
            if (i == images.length) {
                i = 0
            }
        }
        setInterval(changeImg, 5000);
    }, [])
    return (
        <div className="con1_img">
            <img src={currImg} alt="img1" id="img1" className="slideImage" />
        </div>
    );
}

// COMPONENT --------------------------------------------
const GlobalData = () => {
    var Api1data = Api1()
    if (typeof (Api1data) == 'object') {
        console.log('object')
        return (
            <>
                <div div className="con1home" >
                    <div className="con1_text">
                        <h1>World wide</h1>
                        <h2>Total confirmed <span id="totalConfirmed"><strong>{Api1data[0].Global.TotalConfirmed}</strong></span></h2>
                        <h2>Total deaths <span id="totalDeaths"><strong>{Api1data[0].Global.TotalDeaths}</strong></span></h2>
                    </div>
                    <SlideImage />
                </div>
            </>
        )

    } else {
        console.log('string')
        return (
            <>
                <div div className="con1home" >
                    <div className="con1_text">
                        <h1>World wide</h1>
                        <h2>Total confirmed <span id="totalConfirmed"><strong>{Api1data}</strong></span></h2>
                        <h2>Total deaths <span id="totalDeaths"><strong>{Api1data}</strong></span></h2>
                    </div>
                    <SlideImage />
                </div>
            </>
        )
    }
}

export default GlobalData;




