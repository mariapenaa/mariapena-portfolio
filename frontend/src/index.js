import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactGA from 'react-ga';


const TRACKING_ID = "G-ELGJ0FNYFX"
ReactGA.initialize(TRACKING_ID);
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}  />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

