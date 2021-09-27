import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import * as vertexShaderSource from './vertexShader.js';
import * as fragmentShaderSource from './fragmentShader.js';

var gl: WebGLRenderingContext | null | undefined;
var buffer: any;
var program: any;

const numBoids = 512;

/* eslint @typescript-eslint/no-unused-expressions: "off" */
const getRenderingContext = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  if(!canvasRef) return null;
  const gl = canvasRef.current?.getContext('webgl');

  gl?.viewport(0, 0, gl?.drawingBufferWidth, gl?.drawingBufferHeight);
  gl?.clearColor(0.0, 0.0, 0.0, 0.0);
  gl?.clear(gl?.COLOR_BUFFER_BIT);
  return gl;
};

const initializeAttributes = () => {
  if(!gl) throw Error('gl is undefined');
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(numBoids * 2), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}

const cleanup = () => {
  if(!gl) throw Error('gl is undefined');
  gl.useProgram(null);
  if (buffer)
    gl.deleteBuffer(buffer);
  if (program)
    gl.deleteProgram(program);
}

export const BoidGL = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    try{
      if(!(gl = getRenderingContext(canvasRef))) return;
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      if(!vertexShader) throw Error('vertexShader is null');
      gl.shaderSource(vertexShader, vertexShaderSource.default);
      gl.compileShader(vertexShader);
      console.error(gl.getShaderInfoLog(vertexShader));
      
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      if(!fragmentShader) throw Error('fragmentShader is null');
      gl.shaderSource(fragmentShader, fragmentShaderSource.default);
      gl.compileShader(fragmentShader);
      console.error(gl.getShaderInfoLog(fragmentShader));
      
      program = gl.createProgram();
      if(!program) throw Error('program is null');
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.detachShader(program, vertexShader);
      gl.detachShader(program, fragmentShader);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        var linkErrLog = gl.getProgramInfoLog(program);
        cleanup();
        console.log(linkErrLog);
        return;
      }

      initializeAttributes();
      gl.useProgram(program);
      window.addEventListener('beforeunload', cleanup, true);
      const initPositions = initializeBoids(numBoids);
      gl.bufferData(gl.ARRAY_BUFFER, initPositions, gl.STATIC_DRAW);
      gl.drawArrays(gl.POINTS, 0, numBoids);
    } catch (err) {
      console.log(err);
    }
  }, [canvasRef]);

  // const mouseOverHandler: React.MouseEventHandler<HTMLCanvasElement> = (e: React.MouseEvent) => {
  //   if(!gl) throw Error('gl is null');
  //   var clickXrelativToCanvas = e.pageX - (e?.target as HTMLCanvasElement).offsetLeft;
  //   var clickXinWebGLCoords = 2.0 * (clickXrelativToCanvas- gl.drawingBufferWidth / 2) / gl.drawingBufferWidth;
  //   var clickYrelativToCanvas = e.pageY - (e?.target as HTMLCanvasElement).offsetTop;
  //   var clickYinWebGLCoords = 2.0 * (clickYrelativToCanvas- gl.drawingBufferHeight / 2) / gl.drawingBufferHeight;
  //   // console.log(clickXinWebGLCoords, clickYinWebGLCoords);
  //   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([clickXinWebGLCoords, clickYinWebGLCoords]), gl.STATIC_DRAW);
  //   gl.drawArrays(gl.POINTS, 0, 1);
  // }

  const initializeBoids = (n: number) => {
    const positionBuffer = new Float32Array(n * 2);
    for(let i = 0; i < n * 2; i++){
      positionBuffer[i] = Math.random() * 2 - 1;
    }
    return positionBuffer;
  }

  return(
    <Wrapper>
      <Canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}>

      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
`;

