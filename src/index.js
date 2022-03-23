// IMPORTING ESSENTIALS -----------------------------------
import reactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

// IMPORTING COMPONENT ---------------------------------------
import App from './App'

// RENDER ------------------------------------
reactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));