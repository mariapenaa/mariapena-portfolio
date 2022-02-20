import React from 'react';
import './Proyectos.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
import LinkIcon from '@material-ui/icons/Link';
import manageDesktop1 from '../../../videos/manage/manageDesktop.mp4'
import manageDesktop2 from '../../../videos/manage/manageDesktop.webm'
import manageMobile1 from '../../../videos/manage/manageMobile.mp4'
import manageMobile2 from '../../../videos/manage/manageMobile.webm'

import commentDesktop1 from '../../../videos/comment/commentDesktop.mp4'
import commentDesktop2 from '../../../videos/comment/commentDesktop.webm'
import commentMobile1 from '../../../videos/comment/commentMobile.mp4'
import commentMobile2 from '../../../videos/comment/commentMobile.webm'

import sunnyDestop1 from '../../../videos/sunnyside/sunnysideDesktop.mp4'
import sunnyDestop2 from '../../../videos/sunnyside/sunnysideDesktop.webm'
import sunnyMobile1 from '../../../videos/sunnyside/sunnysideMobile.webm'
import sunnyMobile2 from '../../../videos/sunnyside/sunnysideMobile.webm'

import spaceDesktop1 from '../../../videos/space/spaceDesktop.mp4'
import spaceDesktop2 from '../../../videos/space/spaceDesktop.webm'
import spaceMobile1 from '../../../videos/space/spaceMobile.mp4'
import spaceMobile2 from '../../../videos/space/spaceMobile.webm'

import ipDesktop1 from '../../../videos/ip/ipDesktop.mp4'
import ipDesktop2 from '../../../videos/ip/ipDesktop.webm'
import ipMobile1 from '../../../videos/ip/ipMobile.mp4'
import ipMobile2 from '../../../videos/ip/ipMobile.webm'

import makeupDesktop1 from '../../../videos/makeup/makeupDesktop.mp4'
import makeupDesktop2 from '../../../videos/makeup/makeupDesktop.webm'
import makeupMobile1 from '../../../videos/makeup/makeupMobile.mp4'
import makeupMobile2 from '../../../videos/makeup/makeupMobile.webm'

const Proyects = (props) => {
    let {text} = props;
    AOS.init()
    const videos = {
        'manage': {
            desktop1: manageDesktop1,
            desktop2: manageDesktop2,
            mobile1:manageMobile1,
            mobile2:manageMobile2,
            github:'https://github.com/mariapenaa/manage-landingpage',
            live:'https://mariapenaa.github.io/manage-landingpage/'
        },
        'comment': {
            desktop1: commentDesktop1,
            desktop2: commentDesktop2,
            mobile1:commentMobile1,
            mobile2:commentMobile2,
            github:'https://github.com/mariapenaa/comment-section',
            live:'https://comment-forum-330c8.web.app/'
        },
        'sunnyside': {
            desktop1: sunnyDestop1,
            desktop2: sunnyDestop2,
            mobile1:sunnyMobile1,
            mobile2:sunnyMobile2,
            github:'https://github.com/mariapenaa/sunnyside-landing',
            live:'https://mariapenaa.github.io/sunnyside-landing/'
        },
        'space': {
            desktop1: spaceDesktop1,
            desktop2: spaceDesktop2,
            mobile1:spaceMobile1,
            mobile2:spaceMobile2,
            github:'https://github.com/mariapenaa/space-landingpage',
            live:'https://mariapenaa.github.io/space-landingpage/'
        },
        'ip': {
            desktop1: ipDesktop1,
            desktop2: ipDesktop2,
            mobile1:ipMobile1,
            mobile2:ipMobile2,
            github:'https://github.com/mariapenaa/ip-address-tracker',
            live:'https://mariapenaa.github.io/ip-address-tracker/'
        },
        'music': {
            desktop1: manageDesktop1,
            desktop2: manageDesktop2,
            mobile1:manageMobile1,
            mobile2:manageMobile2,
            github:'https://github.com/mariapenaa/manage-landingpage',
            live:'https://mariapenaa.github.io/manage-landingpage/'
        },
        'quiz': {
            desktop1: manageDesktop1,
            desktop2: manageDesktop2,
            mobile1:manageMobile1,
            mobile2:manageMobile2,
            github:'https://github.com/mariapenaa/manage-landingpage',
            live:'https://mariapenaa.github.io/manage-landingpage/'
        },
        'makeup': {
            desktop1: makeupDesktop1,
            desktop2: makeupDesktop2,
            mobile1:makeupMobile1,
            mobile2:makeupMobile2,
            github:'https://github.com/catalinaarias01/proyectoparcial',
            live:'https://github.com/catalinaarias01/proyectoparcial'
        },

    }
    return(
        <div className="proyect-container my-5">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">{text.title}</p>
            <div className="proyect-carrousel">
                {text.arr.map( (e, idx) => 
                    <div key={idx} className={(idx % 2) === 1 ? "proyect-info proyectInfoInvert" : " proyect-info proyectInfoNormal"}
                    data-aos={(idx %2)===1 ? "fade-right" : "fade-left"}
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="false">
                        <div className="square">
                            <video width="500" height="240" autoPlay muted className="desktopVideo" loop>
                                <source src={videos[e.key].desktop1 } type="video/mp4"  /> 
                                <source src={videos[e.key].desktop2}  type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                            <video width="320" height="240" autoPlay muted className="mobileVideo" loop>
                                <source src={videos[e.key].mobile1 } type="video/mp4"  />
                                <source src={videos[e.key].mobile2 }  type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="proyect-textContainer">
                            <p className="proyect-title">{e.title}</p>
                            <p className="proyect-subtitle mb-3">{e.tools}</p>
                            <p className="proyect-text"> {e.description}</p>
                            <div className="proyect-buttonContainer">
                                {e.key !== 'makeup' && <a rel="noreferrer" target="_blank" href={videos[e.key].live} ><LinkIcon style={{marginBottom:'0.2rem'}} /> Live site</a>}
                                <a rel="noreferrer" target="_blank" href={videos[e.key].github} ><FaGithub style={{marginBottom:'0.2rem'}} /> Repo</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Proyects; 