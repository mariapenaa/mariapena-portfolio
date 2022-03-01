import React from 'react';
import './Services.scss'
import { FaDesktop } from 'react-icons/fa';
import 'aos/dist/aos.css';
import DevicesIcon from '@material-ui/icons/Devices';
import CodeIcon from '@material-ui/icons/Code';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Services = (props) => {
    let {text} = props;

    const iconRender = (param) => {
        switch(param) {
            case 'responsive':
                return <DevicesIcon className="service-icon" />;
            case 'code':
                return <CodeIcon className="service-icon"/>;
            case 'mobile':
                return <MobileFriendlyIcon className="service-icon"/>;
            case 'page':
                return <FaDesktop className="service-icon"/>;
            case 'email':
                return <MailOutlineIcon className="service-icon" />;
            default:
            return 'foo';
        }
    }

    return(
        <div className="mb-5">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">{text.title}</p>
            <div className="service-container container"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">
                <div className="row justify-content-around d-flex ">
                    {text.arr.map((e, idx)=>(
                        <div key={idx} className=" service-square">
                            <div className="icon-container">
                                {iconRender(e.key)}
                            </div>
                            <div className="service-textContainer">
                                <h3 className="service-title">{e.title}</h3>
                                <p className="service-text">{e.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Services; 