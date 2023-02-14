
import '../styles/main.scss'
import React, {useState, useEffect, useRef} from 'react';
import {text} from '../text'
import Header from './Header'
import profilePic from '../images/profile.png'
import { FaLinkedinIn } from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si'
import {SiFrontendmentor} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';
import Circle from '../images/shapes/orange-circle.svg'
import BlueRectangle from '../images/shapes/blue-rectangle.svg'
import DoubleOrangeCircle from '../images/shapes/double-orange-circle.svg'

import ManageDesktopImg from '../images/screenshots/manageImgDesktop.webp'
import ComentDesktopImg from '../images/screenshots/commentImgDesktop.webp'
import IpDesktopImg from '../images/screenshots/ipImgDesktop.webp'
import MakeupDesktopImg from '../images/screenshots/makeupImgDesktop.webp'
import ManageMobileImg from '../images/screenshots/manageImgMobile.webp'
import SpaceDesktopImg from '../images/screenshots/spaceImgDesktop.webp'
import SunnyDesktopImg from '../images/screenshots/sunnyImgDesktop.webp'
import PortfolioDesktopImg from '../images/screenshots/portfolio-desktop-img.webp'

import ReactIcon from '../images/compressed/reactjs.webp'
import AngularIcon from '../images/compressed/angular.webp'
import FireIcon from '../images/compressed/firebase.webp'
import NodeIcon from '../images/compressed/node.webp'
import sqlIcon from '../images/compressed/SQL.webp'
import TypeIcon from '../images/typescript.svg'
import ThinRectangle from '../images/shapes/blue-arrow.svg'
import TripleBlueCircle from '../images/shapes/triple-blue-circle.svg'
import Carrousel from '../components/Global/Carrousel'
import QuoteBlue from '../images/shapes/quote-shape-blue.svg'
import QuoteOrange from '../images/shapes/quote-shape.svg'
import PhoneIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import NorthIcon from '@mui/icons-material/NorthEast'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Contact from '../components/Contact'

import ReactGA from 'react-ga4';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Main = (props) => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    const [showExtraProjects, setShowExtraProjects] = useState(false);
    const [data, setData] = useState(text[0])
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [height, setHeight] = useState(0)
    const skills = [
        {
            name:'ReactJS',
            icon:ReactIcon,
            exp:'3 years'
        },
        {
            name:'TypeScript',
            icon:TypeIcon,
            exp:'100 projects'
        },
        {
            name:'Firebase',
            icon:FireIcon,
            exp:'3 years'
        },
        {
            name:'NodeJS',
            icon:NodeIcon,
            exp:'3 years'
        },
        {
            name:'MySQL',
            icon:sqlIcon,
            exp:'3 years'
        },
        {
            name:'Angular',
            icon:AngularIcon,
            exp:'3 years'
        },
    ]

    useEffect(() => {
        let object = text.find(e=>e.language === props.language)
        setData(object)
    }, [props.language])



    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        console.log(windowDimensions)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hireMeClick = (()=>{
        ReactGA.event({
            category: "button-click",
            action: "hire me",
        });
    })

    const githubClick = (()=>{
        ReactGA.event({
            category: "button-click",
            action: "github",
        });
    })

    const learnMoreClick = (()=>{
        ReactGA.event({
            category: "button-click",
            action: "learn more",
        });
    })

    const linkClick = ((linkType)=>{
        ReactGA.event({
            category: "link-click",
            action: linkType,
        });
    })

    const projectClick = ((project)=>{
        ReactGA.event({
            category: "project-click",
            action: project,
        });
    })

    const showMore = (()=>{
        ReactGA.event({
            category: "button-click",
            action: "show-more",
        });
        setShowExtraProjects(!showExtraProjects)
    })


    

    return(
        <React.Fragment>
            {data !== {} &&
            <div>
                <Header text={data.header}/>
                <div className="main">
                    <div className="presentation-block">
                        <div className="text-block-title">
                            <h1 className="bottom-36" data-aos="fade-right">{data.name.title}</h1>
                            <h6 className="bottom-36" data-aos="fade-right" data-aos-delay="300">{data.name.subtitle}<span className="bold">4 {data.name.years}</span>{data.name.asA}<span className="blue">full stack developer</span></h6>
                            <div className="button-container">
                                <button className="button square-button-orange" onClick={hireMeClick}><a href="#contact">{data.name.hireMe}</a></button>
                                <button className="button square-button-transparent" onClick={githubClick}><a href="https://github.com/mariapenaa" target="_blank">{data.name.github} <NorthIcon /></a></button>
                            </div>
                            <div className="info-title-block only-wide">
                                <div>
                                    <h4>+10</h4>
                                    <p className="body">{data.name.happyClients}</p>
                                </div>
                                <div>
                                    <h4>+20</h4>
                                    <p className="body">{data.name.projectsDone}</p>
                                </div>
                                <div>
                                    <h4>+4 {data.name.years}</h4>
                                    <p className="body">{data.name.yearsExperience}</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile-square">
                                <img src={profilePic} alt="profile picture"></img>
                        </div>
                        <div className="info-title-block only-mobile">
                                <div>
                                    <h4>+10</h4>
                                    <p className="body">{data.name.happyClients}</p>
                                </div>
                                <div>
                                    <h4>+20</h4>
                                    <p className="body">{data.name.projectsDone}</p>
                                </div>
                                <div>
                                    <h4>+4 {data.name.years}</h4>
                                    <p className="body">{data.name.yearsExperience}</p>
                                </div>
                            </div>
                    </div>
                    <div className="stats-block" id="aboutMe">
                        <div className="inner-stats-block-1">
                            <div>
                                <h4 className="white margin-17">{data.statistics.title}<br /> 2022</h4>
                                <button className="button square-button-blue" onClick={learnMoreClick}><a href="https://github.com/mariapenaa" target="_blank">{data.statistics.learnMore}</a></button>
                            </div>
                            <div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.webDev}</p>
                                    <p className="caption white">404</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.softwareDev}</p>
                                    <p className="caption white">+200</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.appDev}</p>
                                    <p className="caption white">+$450</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-stats-block-2">
                            <div className="about-me-container">
                                <h2>{data.statistics.about}</h2>
                                <h1>{data.statistics.me}.</h1>
                            </div>
                            <div className="about-me-description-container">
                                <h4 className="white margin-bottom-16" data-aos="fade-up">{data.statistics.title1} <br />{data.statistics.title2}</h4>
                                <p className="body white" data-aos="fade-up" data-aos-delay="300">
                                {data.statistics.text}
                                </p>
                                <div className="icon-container">
                                    <a target="_blank" href="https://github.com/mariapenaa" onClick={linkClick('github')}><FaGithub className="white link-icon"/></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/maria-pena-dev/" onClick={linkClick('linkedin')}><FaLinkedinIn className="white link-icon"/></a>
                                    <a target="_blank" href="https://www.frontendmentor.io/profile/mariapenaa" onClick={linkClick('frontend-mentor')}><SiFrontendmentor className="white link-icon"/></a>
                                    <a target="_blank" href="https://www.upwork.com/freelancers/~01de3b625bc065ecf9" onClick={linkClick('upwork')}><SiUpwork className="white link-icon"/></a>
                                </div>
                            </div>
                            <img className="first-orange-circle" alt="orange circle" src={Circle} />
                        </div>
                    </div>
                    <div className="projects-block" id="projects">
                        <img src={BlueRectangle} className="projects-blue-rectangle" alt="blue rectangle" />
                        <img src={DoubleOrangeCircle} className="projects-orange-circle" alt="blue rectangle" />
                        <div className="center-div">
                            <h2>{data.projects.title1}</h2>
                            <h1>{data.projects.title2}.</h1>
                        </div>
                        <div className="project-blocks">
                            <div className="single-project-block" onClick={projectClick('space')} data-aos="fade-right">
                                <div className="project-img-cover">
                                    <div className="project-img-opacity"></div>
                                    <div>
                                        <h4>{data.projects.arr[3].title}</h4>
                                        <h6>{data.projects.arr[3].tools}</h6>
                                    </div>
                                    <div className="project-button-container">
                                        <div>
                                            <h5><a target="_blank" href="https://mariapenaa.github.io/space-landingpage/">Live Site</a></h5>
                                            <NorthIcon className="project-icon"/>
                                        </div>
                                        <div>
                                            <h5><a target="_blank" href="https://github.com/mariapenaa/space-landingpage">Github</a></h5>
                                            <FaGithub className="project-icon"/>
                                        </div>
                                    </div>
                                  {/*   <p className="body special-body-text" id="special-id">{data.projects.arr[3].description}</p> */}
                                </div>
                                <img src={SpaceDesktopImg} alt="space desktop screenshot" />
                            </div>
                            <div  className="single-project-block" onClick={projectClick('comment-section')}  data-aos="fade-right">
                                <div className="project-img-cover">
                                    <div className="project-img-opacity"></div>
                                    <div>
                                        <h4>{data.projects.arr[1].title}</h4>
                                        <h6>{data.projects.arr[1].tools}</h6>
                                    </div>
                                    <div className="project-button-container">
                                        <div>
                                            <h5><a target="_blank" href="https://comment-forum-330c8.web.app/">Live Site</a></h5>
                                            <NorthIcon className="project-icon"/>
                                        </div>
                                        <div>
                                            <h5><a target="_blank" href="https://github.com/mariapenaa/comment-section">Github</a></h5>
                                            <FaGithub className="project-icon"/>
                                        </div>
                                    </div>
                                   {/*  <p className="body">{data.projects.arr[1].description}</p> */}
                                </div>
                                <img src={ComentDesktopImg} alt="website screenshot" />
                            </div>
                            <div  className="single-project-block" onClick={projectClick('manage')}  data-aos="fade-left">  
                                <div className="project-img-cover">
                                    <div className="project-img-opacity"></div>
                                    <div>
                                        <h4>{data.projects.arr[0].title}</h4>
                                        <h6>{data.projects.arr[0].tools}</h6>
                                    </div>
                                    <div className="project-button-container">
                                        <div>
                                            <h5><a target="_blank" href="https://mariapenaa.github.io/manage-landingpage/">Live Site</a></h5>
                                            <NorthIcon className="project-icon"/>
                                        </div>
                                        <div>
                                            <h5><a target="_blank" href="https://github.com/mariapenaa/manage-landingpage">Github</a></h5>
                                            <FaGithub className="project-icon"/>
                                        </div>
                                    </div>
                                  {/*   <p className="body">{data.projects.arr[0].description}</p> */}
                                </div>
                                <img src={ManageMobileImg} alt="website screenshot"/>
                            </div>
                            <div  className="single-project-block" onClick={projectClick('makeup')}  data-aos="fade-right">
                                <div className="project-img-cover">
                                    <div className="project-img-opacity"></div>
                                    <div>
                                        <h4>{data.projects.arr[5].title}</h4>
                                        <h6>{data.projects.arr[5].tools}</h6>
                                    </div>
                                    <div className="project-button-container">
{/*                                         <div>
                                            <h5><a href="">Live Site</a></h5>
                                            <NorthIcon className="project-icon"/>
                                        </div> */}
                                        <div>
                                            <h5><a target="_blank" href="https://github.com/catalinaarias01/proyectoparcial">Github</a></h5>
                                            <FaGithub className="project-icon"/>
                                        </div>
                                    </div>
                                  {/*   <p className="body">{data.projects.arr[5].description}</p> */}
                                </div>
                                <img src={MakeupDesktopImg} alt="website screenshot" />
                            </div>
                            <div  className="single-project-block" onClick={projectClick('ip')}  data-aos="fade-right">
                                <div className="project-img-cover">
                                    <div className="project-img-opacity"></div>
                                    <div>
                                        <h4>{data.projects.arr[4].title}</h4>
                                        <h6>{data.projects.arr[4].tools}</h6>
                                    </div>
                                    <div className="project-button-container">
                                        <div>
                                            <h5><a target="_blank" href="https://mariapenaa.github.io/ip-address-tracker/">Live Site</a></h5>
                                            <NorthIcon className="project-icon"/>
                                        </div>
                                        <div>
                                            <h5><a target="_blank" href="https://github.com/mariapenaa/ip-address-tracker">Github</a></h5>
                                            <FaGithub className="project-icon"/>
                                        </div>
                                    </div>
                                    {/* <p className="body">{data.projects.arr[4].description}</p> */}
                                </div>
                                <img src={IpDesktopImg} alt="website screenshot"/>
                            </div>
                        </div> 
                            <div className={showExtraProjects ? "extra-project-blocks grow-block" : 'extra-project-blocks'}>
                                <div  className="single-project-block" onClick={projectClick('blue-orange')} >
                                    <div className="project-img-cover">
                                        <div className="project-img-opacity"></div>
                                        <div>
                                            <h4>{data.projects.arr[2].title}</h4>
                                            <h6>{data.projects.arr[2].tools}</h6>
                                        </div>
                                        <div className="project-button-container">
                                            <div>
                                                <h5><a target="_blank" href="https://mariapenaa.github.io/sunnyside-landing/">Live Site</a></h5>
                                                <NorthIcon className="project-icon"/>
                                            </div>
                                            <div>
                                                <h5><a target="_blank" href="https://github.com/mariapenaa/sunnyside-landing">Github</a></h5>
                                                <FaGithub className="project-icon"/>
                                            </div>
                                        </div>
                                       {/*  <p className="body">{data.projects.arr[2].description}</p> */}
                                    </div>
                                    <img src={SunnyDesktopImg} alt="website screenshot"/>
                                </div>
                                <div  className="single-project-block" onClick={projectClick('portfolio')} >
                                    <div className="project-img-cover">
                                        <div className="project-img-opacity"></div>
                                        <div>
                                            <h4>{data.projects.arr[6].title}</h4>
                                            <h6>{data.projects.arr[6].tools}</h6>
                                        </div>
                                        <div className="project-button-container">
                                            <div>
                                                <h5><a target="_blank" href="www.mariapenadev.com">Live Site</a></h5>
                                                <NorthIcon className="project-icon"/>
                                            </div>
                                            <div>
                                                <h5><a target="_blank" href="https://github.com/mariapenaa/mariapena-portfolio">Github</a></h5>
                                                <FaGithub className="project-icon"/>
                                            </div>
                                        </div>
                                      {/*   <p className="body">{data.projects.arr[6].description}</p> */}
                                    </div>
                                    <img src={PortfolioDesktopImg} alt="website screenshot"/>
                                </div>
                            </div> 
                        <button className="button square-button project-block-button" onClick={showMore}>{showExtraProjects ? data.projects.hideMore : data.projects.loadMore}</button>
                    </div>
                    <div className="light-square-block">
                        <div className="skills-block" id="skills">
                            <div className="skills-grid">
                                {skills.map((skill, index)=>{
                                    return <div key={index} className="black-squares-block">
                                        <div className="black-square-container">
                                            <div className="black-square">
                                                <img src={skill.icon} alt="development icon"/>
                                               {/*  <h5>{skill.exp}</h5> */}
                                            </div>
                                            <h6>{skill.name}</h6>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="skills-text-block">
                                <div className="center-div" data-aos="fade-left">
                                    <h2 >{data.about.title}</h2>
                                    <h1>{data.about.title2}.</h1>
                                </div>
                                <h6 data-aos="fade-left">
                                    {data.about.text}
                                </h6>
                                <img src={ThinRectangle} alt="thin blue rectangle" />
                            </div>
                        </div>
                        <div className="education-block" id="education">
                            <img src={TripleBlueCircle} className="triple-blue-circle" alt="triple blue circle"/>
                            <div className="center-div">
                                <h2>{data.education.professional}</h2>
                                <h1>{data.education.education}.</h1>
                            </div>
                            <div className="timeline-container">
                                <div className="timeline-col" data-aos="fade-up">
                                    <h5>2018</h5>
                                    <div>
                                        <h4>{data.education.frontendDev}</h4>
                                        <p className="body">{data.education.digitalHouse}</p>
                                    </div>
                                    <div>
                                        <h4>{data.education.backendDev}</h4>
                                        <p className="body">{data.education.digitalHouse}</p>
                                    </div>
                                </div>
                                <div className="timeline-col" data-aos="fade-up" data-aos-delay="400">
                                    <h5>2019-2021</h5>
                                    <div>
                                        <h4>{data.education.learnReact}</h4>
                                        <p className="body">{data.education.codecadamy}</p>
                                    </div>
                                    <div>
                                        <h4>{data.education.create}</h4>
                                        <p className="body">{data.education.codecadamy}</p>
                                    </div>
                                </div>
                                <div className="timeline-col" data-aos="fade-up" data-aos-delay="700">
                                    <h5>2022</h5>
                                    <div>
                                        <h4>{data.education.googleAnalytics}</h4>
                                        <p className="body">{data.education.google}</p>
                                    </div>
                                    <div>
                                        <h4>{data.education.bootstrap}</h4>
                                        <p className="body">{data.education.google}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-container" id="review">
                        <img src={QuoteBlue} alt="blue quote" className="blue-quote" />
                        <img src={QuoteOrange} alt="orange quote" className="orange-quote" />
                        <Carrousel/>
                    </div>  
                    <div className="contact-container" id="contact">
                        <div className="get-in-touch-block">
                            <div className="get-in-touch-title">
                                <h3 data-aos="fade-right">{data.contact.title}!</h3>
                                <p data-aos="fade-right" data-aos-delay="200" className="body">{data.contact.subtitle}.</p>
                            </div>
                            <div className="get-in-touch-numbers">
                                <span>
                                    <PhoneIcon />
                                    <h5>+54 9 11 4176-6805</h5>
                                </span>
                                <span>
                                    <MailIcon />
                                    <h5>mariapena@gmail.com</h5>
                                </span>
                            </div>
                        </div>
                        <div className="contact-form-block">
                            <Contact data={data}/>
                        </div>
                    </div>
                    <div className="credits-container">
                        <h6>{data.footer.designed} ❤️ {data.footer.designed2}</h6>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}





export default Main; 