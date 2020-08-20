import styled from "styled-components";
import React from "react";

interface IPaperProps {
    color: string;
    children: any;
}

export const Paper = ({children, color}: IPaperProps) => {

    return(
        <PaperWrapper color={color}>
            {children}
        </PaperWrapper>
    );
}

const PaperWrapper = styled.div`
    background-color: white;
    border-radius: 6px;
    border: 1px solid #000000;
    color: ${({ color }) => color};
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
    padding: 10px;
    margin: 10px;
    `;