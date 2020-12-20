import styled from "styled-components";
import React, { useState } from 'react';

interface ButtonProps {
    href?: string;
    disabled?: boolean;
    isDownload?: boolean;
    children?: string;
    target?: string;
}

export const Button = ({href, children, isDownload = false, disabled = false}: ButtonProps) => {
    return(
        <StyledButton target='_blank' href={href} download={isDownload} disabled={disabled}>{children}</StyledButton>
    );
}

const StyledButton = styled.a<{ disabled: boolean }>`
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
    ${({ disabled }) => !disabled ? '' : `
        border: 2px solid #b0b0b0 !important;
        background-color: #FFFFFF !important;
        color: #b0b0b0 !important;
        cursor: default;
    `}
`;