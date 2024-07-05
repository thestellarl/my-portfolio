import React from 'react';
import styled from 'styled-components';
import { Paper } from '../Paper';

interface ICarouselProps {
    children ?: React.ReactNode;
    spacing ?: number;
}

export const Carousel = ({children, spacing = 25}: ICarouselProps) => {
  return(
    <CarouselWrapper>
      {React.Children.map( children, child => 
        <Paper color={"black"}>{child}</Paper>
      )}
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
    display: flex;
    direction: row;    
    height: 600px;
    margin-left: 20px;
`;

