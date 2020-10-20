import styled from "styled-components";
import React, { useState } from 'react';

interface ButtonProps {
    href: string;
    isDownload?: boolean;
    children?: string;
    target?: string;
}

export const Button = ({href, children, isDownload = false}: ButtonProps) => {
    return(
        <StyledButton target='_blank' href={href} download={isDownload}>{children}</StyledButton>
    );
}

const StyledButton = styled.a`
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #D64933;
    border-radius: 16px;
    background-color: #FFFFFF;
    color: #D64933;
    padding: .25em 3em;
    font-size: 1.25em;
    transition: all 0.15s ease-in-out;
    :hover {
        color: #FFFFFF;
        background-color: #D64933;
    }
`;