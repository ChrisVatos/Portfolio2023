import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const LandingPageWelcome = styled.div` 
    display: flex;
    justify-content: space-around;
`

const AboutMeBlurb = styled.div` 
    color: #CFCECE;
    display: flex;
    flex-direction: column;
    width: 50%
`

const Name = styled.h1`
    margin: 0;
    font-size: 72px;
    width: 100%;
    font-family: 'Libre Franklin', sans-serif;
`

const ElevatorPitch = styled.p`
    margin: 0;
    margin-top: 8px;
    font-size: 20px;
    width: 80%;
    font-weight: 300;
    font-family: 'Libre Franklin', sans-serif;
`
const images = [
    {
        label: 'JavaScript',
        imgPath: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.canadianwebhosting.com%2Ftop-programming-languages-need-know%2Fjavascript-logo%2F&psig=AOvVaw0bvnTdOlJhhGtOaEXsprwA&ust=1697679206090000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDClqK6_oEDFQAAAAAdAAAAABAI'
    }, 
    {
        label: 'HTML',
        imgPath: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Ftech-companies%2Fhtml5-logo&psig=AOvVaw3J5OpC2d7FdW9h8WUylo4D&ust=1697679327004000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiY3ru6_oEDFQAAAAAdAAAAABAE'
    }
]


function LandingPageAboutMe(props) {
    const [activeStep, setActiveStep] = useState(0)
    const maxSteps = images.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStepChange = (step) => {
        setActiveStep(step)
    }



  return (
    <LandingPageWelcome>
        <AboutMeBlurb>
            <Name>{props.name}</Name>
            <ElevatorPitch>{props.aboutMe}</ElevatorPitch>
        </AboutMeBlurb>
        <Box sx = {{
                width: 250,
                height: 250,
                backgroundColor: 'red'
            }}>
            </Box>
   </LandingPageWelcome>

  )
}

export default LandingPageAboutMe;

