
import React , { useState , useEffect} from 'react';
import '../../styles/main.scss'
import Logo from '../../shared/Logo/Logo'
import LinearProgress from '@material-ui/core/LinearProgress';

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [scrolling, setScrolling] = useState('header1');
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
     
                <div className='header'>
                    <div className="header-container">
                        
                    </div>
                </div>

        <LinearProgress className={scrolling === 'header' ? 'progress' : 'hidden'} variant="determinate" value={progress} />
        </React.Fragment>
        
    )
}

export default Header; 