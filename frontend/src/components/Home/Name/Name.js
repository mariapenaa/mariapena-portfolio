
import React from 'react';
import './Name.scss'
import { FaChevronDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Name = (props) => {
    let {text} = props
    AOS.init()
    return(
        <div className="name-mainContainer">
            <div className="name-container">
                <p className="subtitle">{text.subtitle}</p>
                <h1 className="main-title"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false">Maria <br />Peña</h1>
                <div className="name-line"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1900"
                data-aos-easing="ease-in">
                    <div className="line"></div>
                    <h2 className="subtitle mb-0" 
                    
                    >{text.role}</h2>
                </div>


                <FaChevronDown className="arrow-icon" />
            </div>
        </div>
    )
}


export default Name; 