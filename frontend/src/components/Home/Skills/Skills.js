import React from 'react';
import './Skills.scss';
import htmlLogo from './../../../images/compressed/html.webp';
import angularLogo from './../../../images/compressed/angular.webp';
import tsLogo from './../../../images/typescript.svg';
import cssLogo from './../../../images/compressed/css.webp';
import firebaseLogo from './../../../images/compressed/firebase.webp';
import javascriptLogo from './../../../images/javascript.svg';
import nodeLogo from './../../../images/compressed/node.webp';
import reactLogo from './../../../images/compressed/reactjs.webp';
import reactWhite from './../../../images/compressed/reactWhite.webp';
import sqlLogo from './../../../images/compressed/SQL.webp';
import 'aos/dist/aos.css';

const Skills = (props) => {
    return(
        <div className="skill-container pt-5">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false">{props.text.title}</p>
            <div className="graph container p-0 mt-5">
                <div className="row mb-4 d-flex justify-content-around"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-mirror="false"
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
                    <figure className="chart" data-percent="75">
                        <figcaption>TypeScript</figcaption>
                        <img alt="logo" className="html" src={tsLogo} />
                        <svg width="200" height="200">
                        <circle  id="ts" className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                        </svg>
                        <p className="subtitle">TypeScript</p>
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
                data-aos-mirror="false"
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