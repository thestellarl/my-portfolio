import React from "react";
import styled, { keyframes } from "styled-components";

const ScrollIcon = () => {
    return(
        <Wrapper>
            <svg width="219" height="60" viewBox="0 0 219 60" fill="none" xmlns="http://www.w3.org/2000/svg" opacity={0}>
            <g filter="url(#filter0_d)">
            <path d="M8 2L109.5 29L211 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0.499634" y="0.499626" width="218.001" height="43.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="12"/>
            <feGaussianBlur stdDeviation="3"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
        </Wrapper>
    );
}

export default ScrollIcon;

const BobbingAnimation = keyframes`
    0%,
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
        -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
        -webkit-transform: translateY(8px);
                transform: translateY(8px);
    }
    80% {
        -webkit-transform: translateY(6.4px);
                transform: translateY(6.4px);
    }
    90% {
        -webkit-transform: translateY(-6.4px);
                transform: translateY(-6.4px);
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    top: 20px;
    text-shadow: 0 0px 5px rgba(33,33,33,.5);
  }
  to {
    opacity: 1;
    top: 0px;
    text-shadow: 0 10px 5px rgba(33,33,33,.5);
  }
`;

const Wrapper = styled.div`
position: absolute;
bottom: 50px;
> * {
        animation: ${BobbingAnimation} 8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both, ${fadeIn} 1.5s ease-in-out 0.5s forwards;
    }
`;