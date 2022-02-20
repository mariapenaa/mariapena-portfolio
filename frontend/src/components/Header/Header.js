import {text} from '../../text'
import React , { useState , useEffect} from 'react';
import './Header.scss'
import Logo from '../../shared/Logo/Logo'
import LinearProgress from '@material-ui/core/LinearProgress';

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [scrolling, setScrolling] = useState('header1');
    const [data, setData] = useState({})
    const [language, setLanguage] = useState('english')


    let className = "header";
    const scrollTrigger = 500;

    useEffect(() => {
        window.addEventListener("scroll", scrollProgress);
    }, [progress])


    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollPx / winHeightPx * 100;

        setProgress(scrolled)

        //header
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            /* setScrolling(true) */
            setScrolling('header')
          } else {
              setScrolling('header1')
            /* setScrolling(false) */
          }
    }

    return(
        <React.Fragment>
     
                <div className={scrolling}>
                    <div className="header-container">
                        <a id="logo" href="#top" style={{textDecoration:'none'}}> <Logo className="logo" /></a>
                        <ul>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                            {/* <li>Porfolio</li>
                            <li>Contact</li>
                            <li>Skills</li> */}
                        </ul>
                    </div>
                </div>

        <LinearProgress className={scrolling === 'header' ? 'progress' : 'hidden'} variant="determinate" value={progress} />
        </React.Fragment>
        
    )
}

const style = {
    list: {
        color:'red',
        fontSize:3,
    }
}

export default Header; 