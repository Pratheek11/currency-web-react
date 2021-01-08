import React from 'react'
import { Icon, SignInContainer, SignInCard } from './SignInElements'
import {BsArrowLeft} from 'react-icons/bs' 

const SignIn = () => {
    return (
        <SignInContainer>
            <Icon to='/'><BsArrowLeft size={30}/></Icon>
            <SignInCard>

            </SignInCard>
        </SignInContainer>
    )
}

export default SignIn
