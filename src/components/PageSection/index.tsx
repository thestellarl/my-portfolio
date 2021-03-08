import React from 'react';
import styled from 'styled-components';

interface PageSectionProps{
    color?: string;
    backgroundColor?: string;
    height?: string | number;
    tapered?: number;
}

const PageSection = styled.section<PageSectionProps>`
  position: relative;
  display: flex;
  font-family: BeVietnam-Regular;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ height }) => (typeof height === 'number' ? height + `px` : height) || 'min-content'};
  overflow-x: hidden;
  color: ${({color}) => color || 'inherit'};
`;

export default PageSection;