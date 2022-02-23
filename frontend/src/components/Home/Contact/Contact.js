
import React, {useState} from 'react';
import axios from 'axios'
import './Contact.scss'
import { FaLinkedinIn } from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si'
import {SiFrontendmentor} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import 'aos/dist/aos.css';
import {
    makeStyles,

} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
 /*        '&.MuiInputLabel-shrink': {
            transform:'translate (1px, 1px) scale(0.75)'
            }, */
        '&.MuiInputLabel-shrink':{
                transform:'translate(4px, -30px) scale(1.3)',
            }
        },
    },
    button: {
        backgroundColor:'white',
        color:'black',
        padding:'1rem 2rem',
        fontSize:'1.2rem',
        '&:hover' : {
            backgroundColor:'#999999;',
        },
 /*        '&.MuiButton-containedPrimary':{
            backgroundColor:'white'
        } */
        '&. .MuiButton-containedPrimary:hover': {
            backgroundColor:'white'
        },
    },
    snackbar: {
       
        '&. .MuiAlert-root ' : {
            padding:'2rem 4rem',
            fontSize:'3rem'
        }
    }
});



const Contact = (props) => {
    let {text} = props;
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [success, setSuccess] = React.useState('success');
    const [loading, setLoading] = React.useState(false);
    const classes = useStyles();
    const errorObject = {
        email: '',
        name:'',
        content:'',
        subject:''
    } 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(errorObject)

    const handleClick = () => {
        setOpen(true);
        };

        const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const submitEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        if(name === '' || email === '' || subject === '' || content === '' || error === ''){
            handleClick()
            setMessage(text.errorWarn)
            setSuccess('warning')
            setLoading(false)
            return;
        }else {
            setError(errorObject)
            resetFields()
            let data = {
                name: name,
                email:email,
                subject:subject,
                text:content,
            }
            axios({
                method: "POST", 
                url:"http://localhost:8080/contacto", 
                data: data,
                }).then((response)=>{
                if (response.data.status === 'sent'){
                    handleClick()
                    setMessage(text.errorSuccess)
                    setSuccess('success')
                    setLoading(false)
                }else if(response.data.status === 'failed'){
                    handleClick()
                    setMessage(text.errorError)
                    setSuccess('error')
                    setLoading(false)
                }
            })

        }
 

   
    }

/*     const toggleError = () => {
        let objectArr = [
            {propName:'name', prop:name},
            {propName:'email', prop:email},
            {propName:'content', prop:content},
            {propName:'subject', prop:subject},
        ]
        let errorObject = {...error}
        for (let index = 0; index < objectArr.length; index++) {
            let element = objectArr[index]
            if(objectArr[index].prop === ''){
                errorObject = {
                    ...errorObject,
                    [element.propName]:'This field cannot be empty'
                } 
                console.log(errorObject)
            }else{
                errorObject = {
                    ...errorObject,
                    [element.propName]:''
                } 
            }
        }
        return errorObject


    } */

    const resetFields = () => {
        setName('')
        setEmail('')
        setSubject('')
        setContent('')
    }

    return(
        <div className="contact-container mt-5" id="contact">
            <p className="heading-1"
            /* data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="false" */>{text.title}</p>
            {/*     <div className="row">
                    <div className="col p-0">
                        <p className="proyect-text">Have any project in mind?</p>
                        <p className="proyect-text">Any ideas?</p>
                        <p style={{textAlign:'left'}} className="subtitle mt-3">Let´s talk!</p>
                    </div>
                    <div className="col"></div>
                </div> */}

                <div className="about-subContainer mb-0"
                /* data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in"
                data-aos-mirror="false"
                data-aos-once="false" */>
                <div className="text-container about-textContainer ">
                    <div style={{marginBottom:'5rem'}}>
                        <p className="proyect-text">{text.subtitle}</p>
                        <p className="proyect-text">{text.subtitle2}</p>
                        <p style={{textAlign:'left'}} className="subtitle mt-3">{text.talk}</p>
                    </div>
                    <form className="mt-5">
                        <div className="row w-100 " style={{marginBottom:'4rem'}}>
                            <div className="col w-50">
                                <TextField
                                className={classes.input} 
                                value={name} onChange={(e)=>setName(e.target.value)} 
                                label={text.placeholders.name} 
                                variant="outlined"
                                inputProps={{ style: { textTransform: "capitalize" } }} />
                                <p className="error">{error.name}</p>
                            </div>
                            <div className="col w-50">
                                <TextField 
                                className={classes.input} 
                                value={email}  
                                onChange={(e)=>setEmail(e.target.value)} 
                                label={text.placeholders.email}  
                                variant="outlined" />
                                <p className="error">{error.email}</p>
                            </div>
                        </div>
                        <div className="row w-100" style={{marginBottom:'4rem'}}>
                            <div className="col ">
                                <TextField 
                                className={classes.input} 
                                value={subject}  
                                onChange={(e)=>setSubject(e.target.value)} 
                                label={text.placeholders.subject}  
                                variant="outlined" 
                                inputProps={{ style: { textTransform: "capitalize" } }}/>
                                <p className="error">{error.subject}</p>
                            </div>
                        </div>
                        <div className="row w-100 mb-3 mt-3">
                            <div className="col">
                                <TextField 
                                multiline
                                rows={4}
                                value={content}
                                className={classes.input} 
                                onChange={(e)=>setContent(e.target.value)} 
                                label={text.placeholders.message} 
                                variant="outlined"/>
                                <p className="error">{error.content}</p>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col mb-4 w-100 d-flex justify-content-end">
                                <Button onClick={(e)=>submitEmail(e)} variant="contained" className={classes.button} color="primary"
                                >
                                    {loading ? 
                                        <CircularProgress /> : 'Send'
                                    }
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-info-container align-items-center justify-content-center">
                    <p style={{textAlign:'left', fontSize:'2rem'}} className="subtitle mt-3">{text.infoTitle}</p>
                    <p className="proyect-text mt-5" style={{fontSize:'1.5rem'}}>mariapena@gmail.com</p>
                    <p className="proyect-text mt-3" style={{textAlign:'left', fontSize:'1.5rem'}}>+54 9 11 4176-6805</p>
                    <div className="icon-container mt-5">
                            <span><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maria-pe%C3%B1a-721b531a3/"><FaLinkedinIn className="social-icons"/></a></span>
                            <span><a rel="noreferrer" target="_blank" href="https://github.com/mariapenaa"><FaGithub className="social-icons"/></a></span>
                            <span><a rel="noreferrer" target="_blank" href="https://www.frontendmentor.io/profile/mariapenaa"><SiFrontendmentor className="social-icons"/></a></span>
                            <span><a rel="noreferrer" target="_blank" href="https://www.upwork.com/freelancers/mariapenadev"><SiUpwork className="social-icons"/></a></span>
                    </div>
                </div>
            </div>
            <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} className={classes.snackbar}
            open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={success}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}


export default Contact; 