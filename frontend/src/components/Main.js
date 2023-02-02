
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
import NorthIcon from '@mui/icons-material/NorthEast'

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
                <Header text={data.header}/>
                <div className="main">
                    <div className="presentation-block">
                        <div className="text-block-title">
                            <h1 className="bottom-36">{data.name.title}</h1>
                            <h6 className="bottom-36">{data.name.subtitle}<span className="bold">5 {data.name.years}</span>{data.name.asA}<span className="blue">full stack developer</span></h6>
                            <div className="button-container">
                                <button className="button square-button-orange">{data.name.hireMe}</button>
                                <button className="button square-button-transparent">{data.name.github} <NorthIcon /></button>
                            </div>
                            <div className="info-title-block">
                                <div>
                                    <h4>+100</h4>
                                    <p className="body">{data.name.happyClients}</p>
                                </div>
                                <div>
                                    <h4>300</h4>
                                    <p className="body">{data.name.projectsDone}</p>
                                </div>
                                <div>
                                    <h4>+4 {data.name.years}</h4>
                                    <p className="body">{data.name.yearsExperience}</p>
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
                                <h4 className="white margin-17">{data.statistics.title}<br /> 2022</h4>
                                <button className="button square-button-blue">{data.statistics.learnMore}</button>
                            </div>
                            <div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.webDev}</p>
                                    <p className="caption white">195</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.softwareDev}</p>
                                    <p className="caption white">195</p>
                                </div>
                                <div className="inner-stats-data">
                                    <p className="body white">{data.statistics.appDev}</p>
                                    <p className="caption white">195</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-stats-block-2">
                            <div className="about-me-container">
                                <h2>{data.statistics.about}</h2>
                                <h1>{data.statistics.me}.</h1>
                            </div>
                            <div className="about-me-description-container">
                                <h4 className="white margin-bottom-16">{data.statistics.title1} <br />{data.statistics.title2}</h4>
                                <p className="body white">
                                {data.statistics.text}
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
                            <h2>{data.projects.title1}</h2>
                            <h1>{data.projects.title2}.</h1>
                        </div>
                        <div className="project-blocks">
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                            <img src={ManageDesktopImg} />
                        </div>
                        <button className="button square-button">{data.projects.loadMore}</button>
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
                                    <h2>{data.about.title}</h2>
                                    <h1>{data.about.title2}.</h1>
                                </div>
                                <h6>
                                    {data.about.text}
                                </h6>
                                <img src={ThinRectangle} alt="thin blue rectangle" />
                            </div>
                        </div>
                        <div className="education-block">
                            <img src={TripleBlueCircle} className="triple-blue-circle"/>
                            <div className="center-div">
                                <h2>{data.education.professional}</h2>
                                <h1>{data.education.education}.</h1>
                            </div>
                            <div className="timeline-container">
                                <div className="timeline-col">
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
                                <div className="timeline-col">
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
                                <div className="timeline-col">
                                    <h5>2022</h5>
                                    <div>
                                        <h4>{data.education.googleAnalytics}</h4>
                                        <p className="body">{data.education.google}</p>
                                    </div>
                                    <div>
                                        <h4>{data.education.bootstrap}</h4>
                                        <p className="body">{data.education.codecadamy}</p>
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
                                <h3>{data.contact.title}!</h3>
                                <p className="body">{data.contact.subtitle}.</p>
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
                                        <label for="firstName">{data.contact.firstName}</label>
                                        <input type="text" id="firstName" placeholder="John" />
                                    </div>
                                    <div className="input-container">
                                        <label for="lastName">{data.contact.lastName}</label>
                                        <input type="text" id="lastName" placeholder="Doe" />
                                    </div>
                                    <div className="input-container">
                                        <label for="mail">{data.contact.mail}</label>
                                        <input type="text" id="mail" placeholder="john@doe.com" />
                                    </div>
                                    <div className="input-container">
                                        <label for="phone">{data.contact.phone}</label>
                                        <input type="text" id="phone" placeholder="+54 9 11 4176-6805" />
                                    </div>
                                </div>
                                <div className="form-second-section">
                                    <h6>{data.contact.whichService}</h6>
                                    <div className="radio-container">
                                        <div className="radio">
                                            <input type="radio" id="fullWebsite" name="service-type" value="fullWebsite" />
                                            <label for="fullWebsite">{data.contact.fullWebsite}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="designCode" name="service-type" value="designCode" />
                                            <label for="designCode">{data.contact.designCode}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="desktopMobile" name="service-type" value="desktopMobile" />
                                            <label for="desktopMobile">{data.contact.desktop}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="singlePage" name="service-type" value="singlePage" />
                                            <label for="singlePage">{data.contact.singlePage}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="htmlTemplate" name="service-type" value="htmlTemplate" />
                                            <label for="htmlTemplate">{data.contact.html}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="redesign" name="service-type" value="redesign" />
                                            <label for="redesign">{data.contact.redesign}</label>
                                        </div>
                                        <div className="radio">
                                            <input type="radio" id="other" name="service-type" value="other" />
                                            <label for="other">{data.contact.other}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-third-section">
                                    <div className="input-container">
                                        <label for="message">{data.contact.message}</label>
                                        <textarea rows="3" id="message" placeholder="Hello!" />
                                    </div>
                                </div>
                                <div className="form-button-container">
                                    <button className="form-button">{data.contact.sendMessage}</button>
                                </div>

                            </form>
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