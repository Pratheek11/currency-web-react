import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, Navitem, NavLinks, Navlogo, NavMenu} from './NavbarElements';

const Navbar = ({ toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeScroll = () => {
        if(window.scrollY >= 800) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScroll)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Navlogo to='/' onClick={toggleTop}>dolla</Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <Navitem>
                            <NavLinks to='about' smooth={true} duration={500} offset={-80} spy={true} exact={true}>About</NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to='discover' smooth={true} duration={500} offset={-80} spy={true} exact={true}>Discover</NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to='services' smooth={true} duration={500} offset={-80} spy={true} exact={true}>Services</NavLinks>
                        </Navitem>
                        <Navitem>
                            <NavLinks to='signup' smooth={true} duration={500} offset={-80} spy={true} exact={true}>Sign Up</NavLinks>
                        </Navitem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sing In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
