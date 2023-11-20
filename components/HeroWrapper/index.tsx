"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const HeroWrapper = () => {
  return (
    <Container className="relative flex items-center justify-center h-screen w-screen whitespace-nowrap"></Container>
  );
};

export default HeroWrapper;

const Container = styled.section`
  background: rgb(83, 75, 82);
  background: radial-gradient(
    circle,
    rgba(83, 75, 82, 1) 0%,
    rgba(45, 35, 46, 1) 100%
  );
`;
