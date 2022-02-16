import React from 'react';
import './Proyectos.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyects = (props) => {
    let {text} = props;
    AOS.init()
    return(
        <div className="proyect-container">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">{text.title}</p>
            <div className="proyect-carrousel"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">
                {text.arr.map( e => 
                    <div className="proyect-info">
                        <div className="square"></div>
                        <p className="proyect-title">{e.title}</p>
                        <p className="proyect-subtitle mb-3">{e.tools}</p>
                        <p className="proyect-text"> {e.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Proyects; 