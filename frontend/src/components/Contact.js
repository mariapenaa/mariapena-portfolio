
import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

import '../styles/main.scss'

import ReactGA from 'react-ga4';

const Contact = (props) => {
    const {data} = props;
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [content, setContent] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(true)

    const clearFields = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setService('')
        setMessage('')
    }
    
    const submitEmail = (e) => {
        ReactGA.event({
            category: "button-click",
            action: "submit-email",
        });
        setSuccess(null)
        e.preventDefault()
        let data = {
            firstName,
            lastName,
            email,
            phone,
            service,
            message,
        }
        setLoading(true)
        axios({
            method: "POST", 
            url:"https://inspiring-golick-682ae8.netlify.app/contacto", 
            data: data,
            }).then((response)=>{
            if (response.data.status === 'sent'){
                setSuccess('success')
                setOpenAlert(true)
                setLoading(false)
                clearFields()
                setTimeout(() => {
                    setOpenAlert(false)
                }, 10000);
                ReactGA.event({
                    category: "form-response",
                    action: "success",
                });
            }else if(response.data.status === 'failed'){
                setSuccess('error')
                setOpenAlert(true)
                setLoading(false)
                clearFields()
                setTimeout(() => {
                    setOpenAlert(false)
                }, 10000);
                ReactGA.event({
                    category: "form-response",
                    action: "failed",
                });
            }
        })
    }

    const checkForm = () => {
        console.log('hello')
        if(firstName === '' || lastName === '' || email === '' || service === '' || message === ''){
            setError(true)
        }else{
            setError(false)
        }
    }

    return (
        <form onChange={checkForm}>
            <Collapse in={openAlert}>
                <Alert severity={success!= null ? success : 'error'} className='alert'>
                    {success === 'success' ? 
                        <React.Fragment>
                            <AlertTitle>{data.contact.success}</AlertTitle>
                            {data.contact.successMessage}
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <AlertTitle>{data.contact.error}</AlertTitle>
                            {data.contact.errorMessage}
                        </React.Fragment>
                    }
                </Alert>
            </Collapse>
            <div className="form-first-section">
                <div className="input-container">
                    <label htmlFor="firstName">{data.contact.firstName} *</label>
                    <input type="text" id="firstName" placeholder="John" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">{data.contact.lastName} *</label>
                    <input type="text" id="lastName" placeholder="Doe" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="mail">{data.contact.mail} *</label>
                    <input type="text" id="mail" placeholder="john@doe.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="phone">{data.contact.phone}</label>
                    <input type="text" id="phone" placeholder="+54 9 11 4176-6805" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
            </div>
            <div className="form-second-section">
                <h6>{data.contact.whichService} *</h6>
                <div className="radio-container">
                    <div className="radio">
                        <input type="radio" id="fullWebsite" name="service-type" value="fullWebsite"  onChange={(e)=>setService('full website')}/>
                        <label htmlFor="fullWebsite">{data.contact.fullWebsite}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="designCode" name="service-type" value="designCode" onChange={(e)=>setService('design to code')}/>
                        <label htmlFor="designCode">{data.contact.designCode}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="desktopMobile" name="service-type" value="desktopMobile" onChange={(e)=>setService('desktop to mobile')}/>
                        <label htmlFor="desktopMobile">{data.contact.desktop}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="singlePage" name="service-type" value="singlePage" onChange={(e)=>setService('single page')}/>
                        <label htmlFor="singlePage">{data.contact.singlePage}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="htmlTemplate" name="service-type" value="htmlTemplate" onChange={(e)=>setService('html template')}/>
                        <label htmlFor="htmlTemplate">{data.contact.html}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="redesign" name="service-type" value="redesign" onChange={(e)=>setService('redesign')}/>
                        <label htmlFor="redesign">{data.contact.redesign}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="other" name="service-type" value="other" onChange={(e)=>setService('other')}/>
                        <label htmlFor="other">{data.contact.other}</label>
                    </div>
                </div>
            </div>
            <div className="form-third-section">
                <div className="input-container">
                    <label htmlFor="message">{data.contact.message} *</label>
                    <textarea rows="3" id="message" placeholder="Hello!" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>
            </div>
            <div className="form-button-container">
                <button className={error ? "form-button2 opacity" : "form-button"} disabled={error ? true : false} onClick={submitEmail}>
                    {loading ? 
                        <span>{data.contact.sending}</span> : <span>{data.contact.sendMessage}</span>
                    }
                    </button>
            </div>

        </form>

    );

}

export default Contact;
