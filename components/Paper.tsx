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
    padding: 10px;
    margin: 10px;
    border-radius: 50px;
    background: #c9e8f2;
    box-shadow:  7px 7px 8px #bbd8e1, 
                -7px -7px 8px #d7f8ff;
    `;