import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useViewport } from '../../utilities/window-resize';
import { BoidSettings } from './interfaces';

export const BoidsOptions = (settings: BoidSettings) => {
    const [isVisible, setVisible ] = useState(false);
    
    return(
        <OptionsWrapper>

        </OptionsWrapper>

    );
}

const PanelArrow = styled.div`
    height: 20px;
    width: 20px;
`;

const OptionsWrapper = styled.div`
    position: absolute;
    left: 0;
`;