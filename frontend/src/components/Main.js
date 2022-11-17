
import './Home.scss'
import '../styles/main.scss'
import React, {useState, useEffect} from 'react';
import {text} from '../../text'
import { Suspense, lazy } from 'react';

const Main = (props) => {
    const [data, setData] = useState(text[0])
    
    useEffect(() => {
        let object = text.find(e=>e.language === props.language)
        setData(object)
    }, [props.language])

    return(
        <React.Fragment>
            {data !== {} &&
                <p>hello</p>
            }
        </React.Fragment>
    )
}





export default Main; 