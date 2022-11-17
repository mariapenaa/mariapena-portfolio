
import React from 'react';
import './About.scss'
import { FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from '../../../images/maria.webp'
import {SiUpwork} from 'react-icons/si'
import {SiFrontendmentor} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';


const About = (props) => {
    let {text} = props
    AOS.init()
    return(
        <div className="about-container">
       {/*      <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">{text.title}</p>
            <div className="about-subContainer">
                <div className="text-container"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="false"
                data-aos-once="false">
                    <div className="mb-4">
                        <p className="subtitle mb-1" >{text.iAm}</p>
                        <p className="proyect-text">{text.from}</p>
                    </div>
                    <div>
                        <p className="proyect-text">{text.bio}</p>
                    </div>
                </div>
                <div className="img-container"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="false"
                data-aos-once="false">
                    <div className="img-square"><img src={me} alt="maria pena" /> </div>
                    <div className="icon-container mt-5">
                            <span><a  aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maria-pe%C3%B1a-721b531a3/"><FaLinkedinIn className="social-icons"/></a></span>
                            <span><a  aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/mariapenaa"><FaGithub className="social-icons"/></a></span>
                            <span><a  aria-label="frontend mentor" rel="noreferrer" target="_blank" href="https://www.frontendmentor.io/profile/mariapenaa"><SiFrontendmentor className="social-icons"/></a></span>
                            <span><a  aria-label="upwork" rel="noreferrer" target="_blank" href="https://www.upwork.com/freelancers/mariapenadev"><SiUpwork className="social-icons"/></a></span>
                    </div>
                </div>
            </div>
            <div>
                <p className="proyect-title">{text.education}</p>
                        <ul className="mt-4 about-list-ul">
                            {text.educationArr.map((e, idx)=>
                                    <li key={idx}>
                                        <p className="about-list">{e.title}</p>
                                    </li>

                            )}
                        </ul>
            </div> */}
        </div>
    )
}


export default About; 