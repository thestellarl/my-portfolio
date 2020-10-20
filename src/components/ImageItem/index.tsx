import styled from "styled-components";
import React, { useState } from 'react';

interface ImageItemProps {
    height: number;
    src: string;
    children ?: React.ReactNode;
}

export const ImageItem = ({ height, src, children}: ImageItemProps) => {
    const [showContent, setShowContent] = useState(false);
    
    const handleMouseEnter = () => setShowContent(true);
    const handleMouseExit = () => setShowContent(false);

    return(
        <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <ContentWrapper showContent={showContent}>
                {children}
            </ContentWrapper>
            <ImageWrapper showContent={showContent} src={src} height={height}/>
        </Wrapper>
    );
}

const ImageWrapper = styled.img<{showContent: boolean}>`
    opacity: ${({ showContent }) => showContent ? 0.5 : 1};
    filter: blur(${({ showContent }) => showContent ? 5 : 0}px);
    transform: scale(${({ showContent }) => showContent ? 1.1 : 1});
    transition: all 0.2s linear;
`;

const ContentWrapper = styled.div<{showContent: boolean}>`
    opacity: ${({ showContent }) => showContent ? 1 : 0};
    padding: 25px;
    transition: all 0.2s linear;    
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: white;
    color: black;
`;