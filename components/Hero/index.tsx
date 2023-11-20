"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const LandingScreen = () => {
  const textSequence = ["Lucas", "a Software Engineer", "a Frontend Developer"];
  let currentText = "";
  let textIndex = 0;
  let letterIndex = 0;
  const [text, setText] = useState(textSequence[0]);

  useEffect(() => {
    var int: null | ReturnType<typeof setInterval> = null;
    const textUpdateInterval = setInterval(() => {
      int && clearInterval(int);
      textIndex = (textIndex + 1) % textSequence.length;
      letterIndex = 0;
      int = changeText();
    }, 4000);
    return () => clearTimeout(textUpdateInterval);
  }, []);

  const changeText = () => {
    const int = setInterval(() => {
      if (letterIndex < textSequence[textIndex].length) {
        setText(textSequence[textIndex].slice(0, letterIndex + 1));
        letterIndex += 1;
      } else {
        setTimeout(() => {}, 1000);
      }
    }, 100);
    return int;
  };

  return (
    <Container className="font-sans select-none sm:text-2xl lg:text-7xl xl:text-7xl">
      {`Hi I'm ${text}`}
      <Cursor>|</Cursor>
    </Container>
  );
};

export default LandingScreen;

const Container = styled.div`
  color: #fff;
  align-items: center;
`;

const blink = keyframes`
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

const Cursor = styled.span`
  animation: ${blink} 0.7s infinite;
`;
