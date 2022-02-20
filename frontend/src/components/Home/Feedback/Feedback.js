
import React from 'react';
import './Feedback.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
    return(
        <div>
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">Feedback</p>
            <div className="container feedback-container">
                <div className="row w-100">
                    <div className="col fb-arrow flex-grow-0">
                        <FaArrowLeft className="feedback-icon"/>
                    </div>
                    <div className="col fb-main">
                        <div className="row">
                            <div className="col">
                                <p className="subtitle">The best developer</p>
                                <p className="proyect-text">Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks
                                Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks
                                Lorem ipsum hfsdskfsdfks  Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks
                                Lorem ipsum hfsdskfsdfks  Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks Lorem ipsum hfsdskfsdfks
                                Lorem ipsum hfsdskfsdfks</p>
                            </div>
                            <div className="col">
                                <div className="fb-square"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col fb-arrow justify-content-end flex-grow-0">
                        <FaArrowRight className="feedback-icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Feedback; 