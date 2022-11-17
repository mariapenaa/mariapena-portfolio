
import './Home.scss'
import React, {useState, useEffect} from 'react';
import {text} from '../../text'
import { Suspense, lazy } from 'react';
const Contact = lazy(() => import('./Contact/Contact'))

const Home = (props) => {
    const [data, setData] = useState(text[0])
    
    useEffect(() => {
        let object = text.find(e=>e.language === props.language)
        setData(object)
    }, [props.language])

    return(
        <React.Fragment>
            {data !== {} &&
                <div style={style.padding}>
                   {/*  <Name text={data.name}/> */}
                    <Suspense fallback={<h1>Still Loading…</h1>} >
                        {/* <Proyects text={data.projects}/>
                        <About text={data.about}/>
                        <Skills text={data.skills}/>
                        <Services text={data.services} /> */}
                        <Contact text={data.contact}/>
                    </Suspense>
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