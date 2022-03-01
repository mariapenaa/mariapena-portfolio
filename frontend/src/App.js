
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.scss'
import argentina from './images/flags/argentina.png'
import usa from './images/flags/usa.png'
import ReactGA from 'react-ga';

function App() {
  const [language, setLanguage] = useState('english')
  const [display, setDisplay] = useState(true)
  
  const toggleLanguage = (language) => {
    setLanguage(language)
    setDisplay(true)
  }

  const setGA = () => {
    ReactGA.initialize('G-BVPP4E9SEJ');
    ReactGA.pageview('Init page view');
  };

  useEffect(() => {
   setGA()
  })


  return (
    <React.Fragment>
      {display ?
        <div className="body">
            <div className="black-layer">
              <Header id="top" />
              <Home language={language}/>
            </div>

        </div> :
        <div className="languageScreen">
          <div className="black-layer">
            <div className='languageContainer'>
              <div className="flagContainer">
                <img onClick={()=>toggleLanguage('english')} src={usa} alt="argentina flag" className="flag" />
                <p>English</p>
              </div>
              <div className="flagContainer">
                <img onClick={()=>toggleLanguage('spanish')} src={argentina} alt="argentina flag" className="flag" />
                <p>Spanish</p>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default App;
