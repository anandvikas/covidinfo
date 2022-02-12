// 'PrecautionsData.jsx' CONTAINS ALL THE NECESSARY PRECAUTIONS IN AN ARRAY 

// IMPORTING THE IMAGES 
import vaccinated from './images/vaccinated.JPG';
import wearmask from './images/wearmask.JPG';
import socialdis from './images/socialdis.JPG';
import washhands from './images/washhands.JPG';
import quarentine from './images/quarentine.JPG';

// DEFINING THE ARRAY 
const PrecData = [
    {
        id: 1,
        img: vaccinated,
        alt: 'vaccinated',
        heading: 'Get Vaccinated',
        para: 'COVID-19 vaccines are effective at preventing you from getting sick. COVID-19 vaccines are highly effective at preventing severe illness, hospitalizations, and death.'
    },
    {
        id: 2,
        img: wearmask,
        alt: 'wearmask',
        heading: 'Wear a mask',
        para: 'Everyone ages 2 years and older should properly wear a well-fitting mask indoors in public in areas of substantial or high community transmission, regardless of vaccination status.'
    },
    {
        id: 3,
        img: socialdis,
        alt: 'socialdis',
        heading: 'Stay 6 feet away from others',
        para: 'Inside your home: Avoid close contact with people who are sick, if possible. If possible, maintain 6 feet between the person who is sick and other household members. If you are taking care of someone who is sick, make sure you properly wear a well-fitting mask and follow other steps to protect yourself.'
    },
    {
        id: 4,
        img: washhands,
        alt: 'washhands',
        heading: 'Wash your hands often',
        para: 'Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.'
    },
    {
        id: 5,
        img: quarentine,
        alt: 'quarentine',
        heading: 'Follow recommendations for quarantine',
        para: 'If you come into close contact with someone with COVID-19: follow CDC’s recommendations for quarantine.'
    }
]

// EXPORTING THE ARRAY 
export default PrecData;