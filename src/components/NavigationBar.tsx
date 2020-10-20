import React from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider, keyframes } from 'styled-components';

interface INavigationBarProps{
    closed: boolean;
    navLinks: Record<string, string>;
    children?: React.ReactNode;
    scrollPosition: number
};

export const NavigationBar = ({navLinks = {}, children, scrollPosition}: INavigationBarProps) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleMouseOver = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);
    
    return(
        <NavigationBarWrapper scrollPosition={scrollPosition}>
            <SubWrapper scrollPosition={scrollPosition} visible flexNum={'150px'}>
                {children}
            </SubWrapper>
            <NavigationLinkWrapper scrollPosition={scrollPosition} visible={false} flexNum={'5'}>
                {Object.keys(navLinks).map((linkText) =>
                <NavigationLink className={'link'} href={navLinks[linkText]}>
                {linkText}
                </NavigationLink>
                )}
            </NavigationLinkWrapper>
        </NavigationBarWrapper>
    );
};

const SubWrapper = styled.div<{visible: boolean, flexNum: string, scrollPosition: number}>`
    color: blue;
    display: flex;
    max-height: 25%;
    margin-bottom:  ${({scrollPosition}) => scrollPosition > 150 ? `0` : `75`}vh;
    flex-direction: column;
    flex: ${({ flexNum }) => flexNum};
    align-items: center;
    justify-content: space-around;
    transition: all 0.5s ease-in-out;
    pointer-events: auto;
    > * {
        transition: all 0.2s ease-in-out;
        margin: 25px 0;
        :hover {
            transform: scale(1.15);
        }
    }
`;

const NavigationLinkWrapper = styled.div<{visible: boolean, flexNum: string, scrollPosition: number}>`
    display: flex;
    position: absolute;
    left: ${({ scrollPosition }) => scrollPosition < 150 ? '0' : '-100'}px;
    height: 75vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 0.5s ease-in-out;
    pointer-events: auto;
    > * {
        transition: all 0.2s ease-in-out;
        :hover {
            transform: scale(1.15);
        }
    }
`;

const NavigationBarWrapper = styled.div<{scrollPosition: number}>`
    pointer-events: none;
    display: flex;
    flex-direction: column;
    font-family: BeVietnam-Thin;
    text-transform: uppercase;
    color: ${({ theme }) => theme.background};
    justify-content: flex-end;
    align-content: center;
    width: 100px;
    font-size: calc(2vmin);
    background-color: inherit;
    position: fixed;
    top: 0px;
    transition: all 0.2s ease-in-out;
    height: 100vh;
    padding: 0 10px;
    z-index: 2;
`;

const NavigationLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    padding: 0 10px;
    color: white;
`;