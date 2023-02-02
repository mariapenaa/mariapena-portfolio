
import React , { useState , useEffect, useRef} from 'react';
import '../styles/main.scss'
import LinearProgress from '@material-ui/core/LinearProgress';

const Header = (props) => {
    const {text} = props
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
                            <li className="menu">{text.home}</li>
                            <li className="menu">{text.projects}</li>
                            <li className="menu">{text.aboutMe}</li>
                            <li className="menu">{text.getInTouch}</li>
                            <li className="menu">{text.projects}</li>
                        </ul>
                        <button className="button square-button">{text.letsChat}</button>
                    </div>
                </div>
       {/*  <LinearProgress className={scrolling === false ? 'progress' : 'hidden'} variant="determinate" value={progress} /> */}
        </React.Fragment>
        
    )
}

export default Header; 