
import React, {useState} from 'react';
import axios from 'axios'
import './Contact.scss'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import AOS from 'aos';
import Button from '@material-ui/core/Button';
import 'aos/dist/aos.css';
import {
    createStyles,
    fade,
    Theme,
    withStyles,
    makeStyles,
    createMuiTheme,
    withThemeCreator,
} from '@material-ui/styles';

const useStyles = makeStyles({
    input: {
        backgroundColor:'white',
        borderRadius:'10px',
        width:'100%',
        '& label.Mui-focused': {
            color: 'white',
            },
            '& label.MuiFormLabel-filled': {
            color: 'white',
            },
            '& label.MuiFormLabel-root': {
                '&.MuiInputLabel-shrink' :{
                    transform:'translate(4px, -30px) scale(1.3) !important',
                }
            },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'none',
        /*    backgroundColor:'white', */
        },
        '&:hover fieldset': {
            borderColor: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
            color:'white',
        },
        '&.MuiInputLabel-shrink': {
            transform:'translate (1px, 1px) scale(0.75)'
            },
        '&.MuiInputLabel-shrink':{
                transform:'translate(4px, -30px) scale(1.3)',
            }
        },
    },
    button: {

    }
});



const Contact = (props) => {
    let {text} = props;
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const submitEmail = (e) => {
        e.preventDefault();
        resetFields()
        let data = {
            name: name,
            email:email,
            subject:subject,
            text:content,
        }
        axios({
            method: "POST", 
            url:"/contacto", 
            data: data,
            }).then((response)=>{
                console.log(response)
            if (response.data.status === 'sent'){
                console.log("Message Sent."); 
            }else if(response.data.status === 'failed'){
                console.log("Message failed to send.")
            }
        })
    }

    const resetFields = () => {
        setName('')
        setEmail('')
        setSubject('')
        setContent('')
    }

    return(
        <div className="contact-container" id="contact">
            <p className="heading-1"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false">{text.title}</p>
            {/*     <div className="row">
                    <div className="col p-0">
                        <p className="proyect-text">Have any project in mind?</p>
                        <p className="proyect-text">Any ideas?</p>
                        <p style={{textAlign:'left'}} className="subtitle mt-3">Let´s talk!</p>
                    </div>
                    <div className="col"></div>
                </div> */}

                <div className="about-subContainer"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false">
                <div className="text-container w-75">
                    <div style={{marginBottom:'5rem'}}>
                        <p className="proyect-text">{text.subtitle}</p>
                        <p className="proyect-text">{text.subtitle2}</p>
                        <p style={{textAlign:'left'}} className="subtitle mt-3">{text.talk}</p>
                    </div>
                    <form className="mt-5">
                        <div className="row w-100 " style={{marginBottom:'4rem'}}>
                            <div className="col w-50"><TextField  className={classes.input} value={name} onChange={(e)=>setName(e.target.value)} label={text.placeholders.name} variant="outlined" /></div>
                            <div className="col w-50"><TextField className={classes.input} value={email}  onChange={(e)=>setEmail(e.target.value)} label={text.placeholders.email}  variant="outlined" /></div>
                        </div>
                        <div className="row w-100" style={{marginBottom:'4rem'}}>
                            <div className="col "><TextField className={classes.input} value={subject}  onChange={(e)=>setSubject(e.target.value)} label={text.placeholders.subject}  variant="outlined" /></div>
                        </div>
                        <div className="row w-100 mb-5 mt-3">
                            <div className="col"><TextField 
                                multiline
                                rows={4}
                                value={content}
                                className={classes.input} onChange={(e)=>setContent(e.target.value)} label={text.placeholders.message} variant="outlined" /></div>
                        
                        </div>
                        <div className="row w-100">
                            <div className="col w-100 d-flex justify-content-end">
                                <Button onClick={(e)=>submitEmail(e)} variant="contained" color="primary"
                                disabled={name==='' || email === '' || subject === '' || content === ''}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="img-container align-items-center justify-content-center">
                <p style={{textAlign:'left', fontSize:'2rem'}} className="subtitle mt-3">{text.infoTitle}</p>
                <p className="proyect-text mt-5" style={{fontSize:'1.5rem'}}>mariapena@gmail.com</p>
                <p className="proyect-text mt-3" style={{textAlign:'left', fontSize:'1.5rem'}}>+54 9 11 4176-6805</p>
                <div className="icon-container mt-5">
                        <span><FaLinkedinIn className="social-icons"/></span>
                        <span><FaGithub className="social-icons"/></span>
                        <span><FaEnvelope className="social-icons"/></span>
                        <span><FaGithub className="social-icons"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact; 