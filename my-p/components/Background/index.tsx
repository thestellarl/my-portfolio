"use client";

import React from "react";
import styled from "styled-components";

interface IBackgroundGradientProps {
  mousePosition: { x: number; y: number };
  visible: boolean;
}

const BackgroundGradient = ({
  mousePosition,
  visible,
}: IBackgroundGradientProps) => {
  return (
    <Wrapper
      className="z-30 pointer-events-none"
      $mouse={mousePosition}
      $visible={visible}
    />
  );
};

const Wrapper = styled.div<{
  $mouse: { x: number; y: number };
  $visible: boolean;
}>`
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  background: teal;
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgb(83, 75, 82);
  background: radial-gradient(
    600px at ${(props) => props.$mouse.x}px ${(props) => props.$mouse.y}px,
    #897e8710,
    transparent 80%
  );
`;

export default BackgroundGradient;
