import React from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';

interface INavigationBarProps{
    navLinks: Record<string, string>;
};

export const NavigationBar = ({navLinks = {}}: INavigationBarProps) => {
    return(
        <NavigationBarWrapper>
            {Object.keys(navLinks).map((linkText) =>
              <NavigationLink className={'link'} href={navLinks[linkText]}>
              {linkText}
            </NavigationLink>
          )}
        </NavigationBarWrapper>
    );
};

const NavigationBarWrapper = styled.div`
    display: flex;
    font-family: Fjalla One;
    justify-content: space-evenly;
    color: ${({ theme }) => theme.primaryColor};

    align-items: baseline;
    font-size: calc(10px + 2vmin);
    border-bottom: 2px #889696;
    background-color: inherit;
    position: sticky;
    top: 0px;
    height: 45px;
    padding: 5px 0;
    background-color: white;
    width: 100%;
    box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
    z-index: 2; 
`;

const NavigationLink = styled.a`
    all: unset;
    cursor: pointer;
    transition: border-width 0.1s linear;
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.headerColor};
    border-bottom: 0px solid ${({ theme }) => theme.primaryColor};
    :hover {
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
    }
`;