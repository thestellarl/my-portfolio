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
    color: ${({ color }) => color};
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
    padding: 10px;
    margin: 10px;
    `;