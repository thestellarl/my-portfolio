import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IGifPlayerProps {
    source: string;
    still: string;
    loop?: boolean;
    height?: number;
    width?: number;
}

export const GifPlayer = ({source, still, height = 400, width = 400, loop = true} : IGifPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handleOnMouseOver = () => setIsPlaying(true);
    const handleOnMouseLeave = () => setIsPlaying(false);

    return(
        <Container height={height} width={width} onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
            {/* {isPlaying && <img height={height} src={source} />} */}
            <img height={height} src={still} />
        </Container>
    );
}

const Container = styled.div<{ height: number, width: number}>`
    overflow: hidden;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
`;