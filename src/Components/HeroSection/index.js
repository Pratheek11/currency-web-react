import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroContainer, HeroContents, HeroH1, HeroP, HeroWrapper, VedioBg } from './HeroElements';
import Vedio from '../../vedios/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onhover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VedioBg autoPlay loop muted src={Vedio} type='video/mp4' />
            </HeroBg>
            <HeroContents>
                <HeroH1>Virtual Banking made easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroWrapper>
                    <Button to='signup' onMouseEnter={onhover} onMouseLeave={onhover}>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroWrapper>    
            </HeroContents>
        </HeroContainer>
    )
}

export default HeroSection
