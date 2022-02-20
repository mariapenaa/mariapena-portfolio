
import './Home.scss'
import Name from './Name/Name'
import About from './About/About'
import Contact from './Contact/Contact'
import Feedback from './Feedback/Feedback'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Proyects from './Proyects/Proyects'
import React, {useState, useEffect} from 'react';
import {text} from '../../text'

const Home = (props) => {
    const [data, setData] = useState(text[0])
    
    useEffect(() => {
        console.log(props.language)
        let object = text.find(e=>e.language === props.language)
        setData(object)
    }, [props.language])

    return(
        <React.Fragment>
            {data != {} &&
                <div style={style.padding}>
                    <Name text={data.name}/>
                    <Proyects text={data.projects}/>
                    <About text={data.about}/>
                    <Skills text={data.skills}/>
                    <Services text={data.services} />
                {/*  <Feedback /> */}
                    <Contact text={data.contact}/>
                </div>
            }
        </React.Fragment>
    )
}

const style = {
    padding: {
        paddingLeft:'5vw',
        paddingRight:'5vw',
    }
}



export default Home; 