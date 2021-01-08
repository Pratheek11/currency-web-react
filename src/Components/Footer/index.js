import React from 'react'
import { FooterA, FooterContainer, FooterH1, FooterLinks, FooterWrapper } from './FooterElements'
import {FiFacebook, FiInstagram} from 'react-icons/fi'
import {FaDiscord, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterH1 to='/'>dolla</FooterH1>
                <FooterLinks>
                    <FooterA><FiFacebook size={25}/></FooterA>
                    <FooterA><FiInstagram size={25}/></FooterA>
                    <FooterA><FaDiscord size={25}/></FooterA>
                    <FooterA><FaGithub size={25}/></FooterA>
                </FooterLinks>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
