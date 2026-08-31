"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const textSequence = ["Lucas", "a Software Engineer", "a Frontend Developer"];
// Pick the longest entry so the container reserves space for the widest line and
// the trailing cursor stays put as text is typed in/out.
const longestText = textSequence.reduce(
  (a, b) => (b.length > a.length ? b : a),
  textSequence[0],
);

const LandingScreen = () => {
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
    }, 3000);
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
    <Container className="select-none sm:text-2xl lg:text-7xl xl:text-7xl">
      {/* Invisible sizer fixes the container width to the longest line; the
          visible text+cursor overlay it so the cursor never shifts. */}
      <Sizer aria-hidden="true">{`Hi I'm ${longestText}`}</Sizer>
      <Visible>
        {`Hi I'm ${text}`}
        <Cursor>|</Cursor>
      </Visible>
    </Container>
  );
};

export default LandingScreen;

const Container = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;
  font-family: var(--font-display), monospace;
`;

const Sizer = styled.span`
  visibility: hidden;
  white-space: pre;
`;

const Visible = styled.span`
  position: absolute;
  inset: 0;
  white-space: pre;
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
