
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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Main = (props) => {
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
    

    return(
        <React.Fragment>
            {data !== {} &&
            <div>
                <Header />
                <div className="main">
                    <div className="presentation-block">
                        <div className="text-block-title">
                            <h1 className="bottom-36">Hi! I am Maria Peña</h1>
                            <h6 className="bottom-36">Developing stunning websites for over <span className="bold">5 years</span> as a <span className="blue">full stack developer</span></h6>
                            <div className="button-container">
                                <button className="button square-button-orange">Hire me</button>
                                <button className="button square-button-transparent">Let´s chat!</button>
                            </div>
                            <div className="info-title-block">
                                <div>
                                    <h4>+100</h4>
                                    <p className="body">Happy clients</p>
                                </div>
                                <div>
                                    <h4>300</h4>
                                    <p className="body">Projects done</p>
                                </div>
                                <div>
                                    <h4>4</h4>
                                    <p className="body">Frameworks</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile-square">
                                <img src={profilePic}></img>
                            </div>
                    </div>
                    <div className="stats-block">
                        <div className="inner-stats-block-1">
                            <div>
                                <h4 className="white margin-17">Project statistics <br /> 2022</h4>
                                <button className="button square-button-blue">Learn more</button>
                            </div>
                            <div>
                                <div className="inner-stats-data">
                                    <p className="body white">Web development</p>
                                    <p className="caption white">195</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">Software development</p>
                                    <p className="caption white">195</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">App development</p>
                                    <p className="caption white">195</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-stats-block-2">
                            <div className="about-me-container">
                                <h2>about</h2>
                                <h1>Me.</h1>
                            </div>
                            <div className="about-me-description-container">
                                <h4 className="white margin-bottom-16">I´m Maria, <br />I can give you a recognizable digital identity!</h4>
                                <p className="body white">
                                    I work hard every single day to grow both as a developer and a professional. I have top-notch knowledge of both frontend and backend. My number one priority is always my clients satisfaction, and this is why I work with dedication and motivation to deliver high quality, aesthetically pleasing, responsive websites with optimized code, high accesibility, and speed. I never consider a job finished until the project exceeds my clients expectations!
                                </p>
                                <div className="icon-container">
                                    <FaGithub className="white"/>
                                    <FaLinkedinIn className="white"/>
                                    <SiFrontendmentor className="white"/>
                                    <SiUpwork className="white"/>
                                </div>
                            </div>
                            <img className="first-orange-circle" src={Circle} />
                        </div>
                    </div>
                    <div className="projects-block">
                        <img src={BlueRectangle} className="projects-blue-rectangle" alt="blue rectangle" />
                        <img src={DoubleOrangeCircle} className="projects-orange-circle" alt="blue rectangle" />
                        <div className="center-div">
                            <h2>my awesome</h2>
                            <h1>projects.</h1>
                        </div>
                        <div className="project-blocks">
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                        </div>
                        <button className="button square-button">Load more</button>
                    </div>
                    <div className="light-square-block">
                        <div className="skills-block">
                            <div className="skills-grid">
                                {skills.map((skill, index)=>{
                                    return <div key={index} className="black-squares-block">
                                        <div className="black-square-container">
                                            <div className="black-square">
                                                <img src={skill.icon} />
                                                <h5>{skill.exp}</h5>
                                            </div>
                                            <h6>{skill.name}</h6>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="skills-text-block">
                                <div className="center-div">
                                    <h2>my all time</h2>
                                    <h1>Advantage.</h1>
                                </div>
                                <h6>
                                    I am also well-versed in many other frameworks and languages but these ones are my favourites! Of course I also know many other neccessary webdevelopment language to their best!
                                </h6>
                                <img src={ThinRectangle} alt="thin blue rectangle" />
                            </div>
                        </div>
                        <div className="education-block">
                            <img src={TripleBlueCircle} className="triple-blue-circle"/>
                            <div className="center-div">
                                <h2>professional</h2>
                                <h1>Education.</h1>
                            </div>
                            <div className="timeline-container">
                                <div className="timeline-col">
                                    <h5>2018</h5>
                                    <div>
                                        <h4>Frontend Development</h4>
                                        <p className="body">Digital House</p>
                                    </div>
                                    <div>
                                        <h4>Backend Development</h4>
                                        <p className="body">Digital House</p>
                                    </div>
                                </div>
                                <div className="timeline-col">
                                    <h5>2019-2021</h5>
                                    <div>
                                        <h4>Learn React</h4>
                                        <p className="body">Codecadamy</p>
                                    </div>
                                    <div>
                                        <h4>Create an advanced Web App with React and Redux</h4>
                                        <p className="body">Codecadamy</p>
                                    </div>
                                </div>
                                <div className="timeline-col">
                                    <h5>2022</h5>
                                    <div>
                                        <h4>Google Analytics for Beginners</h4>
                                        <p className="body">Google</p>
                                    </div>
                                    <div>
                                        <h4>Bootstrap</h4>
                                        <p className="body">Codecadamy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-container">
                        <img src={QuoteBlue} alt="blue quote" className="blue-quote" />
                        <img src={QuoteOrange} alt="orange quote" className="orange-quote" />
                        <Carrousel />
                    </div>  
                    <div className="contact-container">
                        <div className="get-in-touch-block">
                            <div className="get-in-touch-title">
                                <h3>Get in touch!</h3>
                                <p className="body">Fill up the form and I will get back to you within
                                    the next 24 hours.</p>
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
                            <form>
                                <div className="form-first-section">
                                    <div className="input-container">
                                        <label for="firstName">First Name</label>
                                        <input type="text" id="firstName" placeholder="John" />
                                    </div>
                                    <div className="input-container">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Doe" />
                                    </div>
                                    <div className="input-container">
                                        <label for="mail">Mail</label>
                                        <input type="text" id="mail" placeholder="john@doe.com" />
                                    </div>
                                    <div className="input-container">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" placeholder="+54 9 11 4176-6805" />
                                    </div>
                                </div>
                                <div className="form-second-section">
                                    <h6>What service do you need?</h6>
                                    <div className="radio-container">
                                        <div className="radio">
                                            <input type="radio" id="fullWebsite" name="service-type" value="fullWebsite" />
                                            <label for="fullWebsite">Full Website</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="designCode" name="service-type" value="designCode" />
                                            <label for="designCode">Design to code</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="desktopMobile" name="service-type" value="desktopMobile" />
                                            <label for="desktopMobile">Desktop to mobile</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="singlePage" name="service-type" value="singlePage" />
                                            <label for="singlePage">Single page</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="htmlTemplate" name="service-type" value="htmlTemplate" />
                                            <label for="htmlTemplate">HTML email template</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="redesign" name="service-type" value="redesign" />
                                            <label for="redesign">Website Redesign</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="other" name="service-type" value="other" />
                                            <label for="other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-third-section">
                                    <div className="input-container">
                                        <label for="message">Message</label>
                                        <textarea rows="3" id="message" placeholder="Hello!" />
                                    </div>
                                </div>
                                <div className="form-button-container">
                                    <button className="form-button">Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="credits-container">
                        <h6>Designed with much ❤️ by UI Rocket</h6>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}





export default Main; 