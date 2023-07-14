import React from "react";
import styled from "styled-components";
import { BoidSettings } from "./interfaces";

interface BoidCanvasProps {
    settingsRef: React.Ref<BoidSettings>;
    canvasRef: React.Ref<HTMLCanvasElement>;
}

const BoidCanvas = ({ settingsRef, canvasRef }: BoidCanvasProps) => {
    return(
        <StyledCanvas 
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        // onMouseMove={handleMouseOver}
        />);
}

export default BoidCanvas;

const StyledCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: linear-gradient(336deg, #264653, #2a9d8f);
`;