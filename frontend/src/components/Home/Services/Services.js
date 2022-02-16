import React from 'react';
import './Services.scss'
import { FaDesktop } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = (props) => {
    let {text} = props;
    return(
        <div>
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">{text.title}</p>
            <div className="service-container container"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">
                <div className="row justify-content-center d-flex">
                    {text.arr.map(e=>(
                        <div className=" service-square">
                            <div className="icon-container">
                                <FaDesktop className="service-icon"/>
                            </div>
                            <p className="service-title">{e.title}</p>
                            <p className="service-text">{e.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Services; 