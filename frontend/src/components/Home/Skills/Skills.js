import React from 'react';
import './Skills.scss';
import htmlLogo from './../../../images/html.png';
import angularLogo from './../../../images/angular.png';
import cssLogo from './../../../images/css.png';
import firebaseLogo from './../../../images/firebase.png';
import javascriptLogo from './../../../images/javascript.svg';
import nodeLogo from './../../../images/node.png';
import reactLogo from './../../../images/reactjs.png';
import reactWhite from './../../../images/reactWhite.png';
import sqlLogo from './../../../images/SQL.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getThemeProps } from '@material-ui/styles';

const Skills = (props) => {
    return(
        <div className="skill-container">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">{props.text.title}</p>
            <div className="graph container p-0 mt-5">
                <div className="row mb-4 d-flex justify-content-around"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false">
                    <figure className="chart" data-percent="100">
                        <figcaption>HTML</figcaption>
                        <img alt="logo" className="html" src={htmlLogo} />
                        <svg width="200" height="200">
                        <circle id="html" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">HTML</p>
                    </figure>

                    <figure className="chart" data-percent="100">
                        <figcaption>CSS</figcaption>
                        <img alt="logo" className="html" src={cssLogo} />
                        <svg width="200" height="200">
                        <circle  id="css"  className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">CSS</p>
                    </figure>
                    <figure className="chart" data-percent="100">
                        <figcaption>JavaScript</figcaption>
                        <img alt="logo" className="html" src={javascriptLogo} />
                        <svg width="200" height="200">
                        <circle  id="js" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">JavaScript</p>
                    </figure>
                    <figure className="chart" data-percent="80">
                        <figcaption>NodeJS</figcaption>
                        <img alt="logo" className="html" src={nodeLogo} />
                        <svg width="200" height="200">
                        <circle id="node" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">NodeJs</p>
                    </figure>
                </div>
                <div className="row d-flex justify-content-around" 
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false">
                    <figure className="chart" data-percent="80">
                        <figcaption>Angular</figcaption>
                        <img alt="logo" className="html" src={angularLogo} />
                        <svg width="200" height="200">
                        <circle id="angular"  className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">Angular</p>
                    </figure>
                    <figure className="chart" data-percent="75">
                        <figcaption>React</figcaption>
                        <img alt="logo" className="html" src={reactLogo} />
                        <svg width="200" height="200">
                        <circle id="reactjs" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">ReactJS</p>
                    </figure>
                     <figure className="chart" data-percent="75">
                        <figcaption>SQL</figcaption>
                        <img alt="logo" className="html" src={sqlLogo} />
                        <svg width="200" height="200">
                        <circle id="sql" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">MySQL</p>
                    </figure>
                    <figure className="chart" data-percent="50">
                        <figcaption>Native</figcaption>
                        <img alt="logo" className="html" src={reactWhite} />
                        <svg width="200" height="200">
                        <circle id="native" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">React Native</p>
                    </figure>
                    <figure className="chart" data-percent="50">
                        <figcaption>FireBase</figcaption>
                        <img alt="logo" className="html" src={firebaseLogo} />
                        <svg width="200" height="200">
                        <circle id="firebase" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">FireBase</p>
                    </figure>
                </div>
                <div className="row d-flex justify-content-around">
                
                 
                </div>
            </div>
        </div>
    )
}


export default Skills; 