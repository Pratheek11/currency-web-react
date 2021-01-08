import React from 'react'
import { Button } from '../ButtonElements'
import { BtnWrap, Colomn1, Colomn2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({id, lightBg, primary, dark, imgStart, topLine, lightText, headLine, darkText, description, buttonLable, img, alt }) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Colomn1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button primary={primary} dark={dark} to='home'>{buttonLable}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Colomn1>
                        <Colomn2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Colomn2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
