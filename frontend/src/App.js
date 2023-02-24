
import React, {useState, useEffect} from 'react';
import './App.scss'
import argentina from './images/flags/argentina.png'
import usa from './images/flags/usa.png'
import ReactGA from 'react-ga4';
import Main from './components/Main';

const TRACKING_ID = "G-ELGJ0FNYFX"
ReactGA.initialize(TRACKING_ID);

function App() {
  const [language, setLanguage] = useState('english')
  const [display, setDisplay] = useState(false)


  const toggleLanguage = (language) => {
    setLanguage(language)
    setDisplay(true)
  }

  const setGA = () => {
    ReactGA.send({ hitType: "pageview", page:window.location.pathname + window.location.search });
  };

  useEffect(() => {
    setGA()
  })


  return (
    <React.Fragment>
      {display ?
        <div>
            <div>
              <Main language={language}/>
            </div>

        </div> :
        <div className="languageScreen">
          <div className="black-layer">
            <div className='languageContainer'>
              <div className="flagContainer">
                <img onClick={()=>toggleLanguage('english')} src={usa} alt="argentina flag" className="flag" />
                <h3>English</h3>
              </div>
              <div className="flagContainer">
                <img onClick={()=>toggleLanguage('spanish')} src={argentina} alt="argentina flag" className="flag" />
                <h3>Spanish</h3>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default App;
