
import React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import StarIcon from '@mui/icons-material/Star';
import OutlineStarIcon from '@mui/icons-material/StarOutline';
import ProfileIcon from '@mui/icons-material/AccountCircle';

import '../../styles/carrousel.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
    {
        description: `Maria is very cooperative and she knows her work very well. Will love to work with her in future. And will recommend others for her work.`,
        userName:'Growmore Technologies',
        userRole:'Upwork Client',
        stars:[true, true, true, true, true]
    },
    {
        description:
        'This freelancer revised HTML-CSS and Java Script code for my domain as per given spec, very pleased with her work!',
        userName:'Grant MacDonald',
        userRole:'Upwork Client',
        stars:[true, true, true, true, true]
    },
    {
        description: `This freelancer provided top notch support concerning changes wanted in the code for my domain!`,
        userName:'Grant MacDonald',
        userRole:'Upwork Client',
        stars:[true, true, true, true, true]
    },
    {
        description: `Freelancer provided code needed for my domain and delivered it fast and 100% as per spec, very pleased!`,
        userName:'Grant MacDonald',
        userRole:'Upwork Client',
        stars:[true, true, true, true, true]
    },
];

const Carrousel = (props) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [slideAnimation, setSlideAnimation] = React.useState(false);
    const [slideSide, setSlideSide] = React.useState('slide-in-right');
    const maxSteps = steps.length;

    const handleNext = () => {
        console.log('hey')
        if(activeStep < maxSteps - 1){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }else{
            setActiveStep(0);
        }

        handleSlide('right')

    };

    const handleSlide = (side) => {
        setSlideSide('slide-in-'+ side)
        setSlideAnimation(true)
        setTimeout(() => {
            setSlideAnimation(false)
        }, 500);
    }

    const handleBack = () => {
        if(activeStep > 0){
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }else{
            setActiveStep(maxSteps - 1)
        }
        handleSlide('left')
    };

    return (
        <div className="slider-container">
            <KeyboardArrowLeft className="arrow" onClick={handleBack}/>
            <div className={slideAnimation ? "slider-text " + slideSide : "slider-text"}>
                <div className="star-container">
                    {steps[activeStep].stars.map((star, idx)=>{
                        return (
                            <React.Fragment key={idx}>
                                {star ? 
                                    <StarIcon />
                                    :
                                    <OutlineStarIcon />
                                } 
                            </React.Fragment>
                        )
                    })}
                </div>
                <h5>{steps[activeStep].description}</h5>
                <div className="profile-container">
                    <ProfileIcon />
                    <p className="body">
                        {steps[activeStep].userName}
                    </p>
                    <p className="caption">
                        , {steps[activeStep].userRole}
                    </p>
                </div>
            </div>
            <KeyboardArrowRight className="arrow" onClick={handleNext}/>
        </div>

    );

}

export default Carrousel;
