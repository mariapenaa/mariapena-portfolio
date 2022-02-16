
import React from 'react';
import './About.scss'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { text } from 'text';

const About = (props) => {
    let {text} = props
    AOS.init()
    return(
        <div className="about-container">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">{text.title}</p>
            <div className="about-subContainer">
                <div className="text-container"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false">
                    <div className="mb-5">
                        <p className="subtitle mb-1" >{text.iAm}</p>
                        <p className="proyect-text">{text.from}</p>
                    </div>
                    <div>
                        <p className="proyect-title">{text.education}</p>
                        <ul className="mt-4">
                            {text.educationArr.map(e=>
                                <React.Fragment>
                                    <li className="mb-3">
                                        <p className="about-list">{e.title}</p>
                                        <p className="proyect-text">{e.description}</p>
                                    </li>
                                    <hr className="line-hr"/>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="img-container"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false">
                    <div className="img-square"></div>
                    <div className="icon-container">
                        <span><FaLinkedinIn className="social-icons"/></span>
                        <span><FaGithub className="social-icons"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About; 