
import React , { useState , useEffect, useRef} from 'react';
import '../styles/main.scss'
import LinearProgress from '@material-ui/core/LinearProgress';

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [height, setHeight] = useState(0)
    const scrollTrigger = 500;
    const ref = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", scrollProgress);
    }, [progress])

    useEffect(() => {
        setHeight(ref.current.clientHeight)
        console.log(height)
    })
    

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollPx / winHeightPx * 100;

        setProgress(scrolled)

        //header
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            /* setScrolling(true) */
            setScrolling(true)
        } else {
            setScrolling(false)
        /* setScrolling(false) */
        }
    }

    return(
        <React.Fragment>
                <div className='header' ref={ref}>
                    <div className="header-container">
                        <h4>Maria<span className="orange-color">.</span></h4>
                        <ul>
                            <li className="menu">Home</li>
                            <li className="menu">Projects</li>
                            <li className="menu">About me</li>
                            <li className="menu">Projects</li>
                            <li className="menu">Projects</li>
                        </ul>
                        <button className="button square-button">Let´s chat!</button>
                    </div>
                </div>
       {/*  <LinearProgress className={scrolling === false ? 'progress' : 'hidden'} variant="determinate" value={progress} /> */}
        </React.Fragment>
        
    )
}

export default Header; 