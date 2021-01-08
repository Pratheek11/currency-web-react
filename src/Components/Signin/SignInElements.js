import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const SignInContainer = styled.div`
    width: 100%;
    height: 837px;
    background: #010606;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(LinkR)`
    position: absolute;
    top: 20px;
    left: 20px;
    text-decoration: none;
    color: #fff;
`;

export const SignInCard = styled.div`
    width: 450px;
    height: 500px;
    border-radius: 10px;
    background: #fff;
    justify-content: center;
`;