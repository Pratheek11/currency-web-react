import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'

export const FooterContainer = styled.div`
    width: 100%;
    height: 150px;
    background: #D3D3D3;
`;

export const FooterWrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const FooterH1 = styled(LinkR)`
    color: #010606; 
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    font-wieght: 700;
    text-decoration: none; 
`;

export const FooterLinks = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    list-style: none;
`;

export const FooterA = styled.a`
    cursor: pointer;
`;