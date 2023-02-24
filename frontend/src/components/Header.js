
import React , { useState , useEffect, useRef} from 'react';
import '../styles/main.scss'
import MenuIcon from '@mui/icons-material/Menu'
import Collapse from '@mui/material/Collapse';

const Header = (props) => {
    const {text} = props;
    const [showHeader, setShowHeader] = useState(false)
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
                        <ul className="desktop-header">
                            <li className="menu"><a href="#aboutMe">{text.aboutMe}</a></li>
                            <li className="menu"><a href="#projects">{text.projects}</a></li>
                            <li className="menu"><a href="#skills">{text.skills}</a></li>
                            <li className="menu"><a href="#education">{text.education}</a></li>
                            <li className="menu"><a href="#review">{text.happyClients}</a></li>
                        </ul>
                        <button className="button square-button desktop-header"><a href="#contact">{text.letsChat}</a></button>
                        <MenuIcon className="menu-icon" onClick={e => setShowHeader(!showHeader) }></MenuIcon>
                    </div>
                    <Collapse in={showHeader}>
                        <div className="mobile-header" >
                            <ul>
                                <li className="menu" onClick={e => setShowHeader(!showHeader)}><a href="#aboutMe">{text.aboutMe}</a></li>
                                <li className="menu" onClick={e => setShowHeader(!showHeader)}><a href="#projects">{text.projects}</a></li>
                                <li className="menu" onClick={e => setShowHeader(!showHeader)}><a href="#skills">{text.skills}</a></li>
                                <li className="menu" onClick={e => setShowHeader(!showHeader)}><a href="#education">{text.education}</a></li>
                                <li className="menu" onClick={e => setShowHeader(!showHeader)}><a href="#review">{text.happyClients}</a></li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
       {/*  <LinearProgress className={scrolling === false ? 'progress' : 'hidden'} variant="determinate" value={progress} /> */}
        </React.Fragment>
        
    )
}

export default Header; 