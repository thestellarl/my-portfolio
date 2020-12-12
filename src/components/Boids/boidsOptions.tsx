import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../../utilities/window-resize';
import { BoidSettings } from './interfaces';

interface IBoidsOptionsProps {
    settings: BoidSettings;
    onChange: (value: BoidSettings) => void;
}

export const BoidsOptions = ({ settings, onChange }: IBoidsOptionsProps) => {
    const [isVisible, setVisible ] = useState(false);

    return(
        <Wrapper>
            <ArrowWrapper onClick={() => setVisible(!isVisible)}>
                <ArrowIcon src='SVG/arrow.svg' width={16} height={16} isVisible={isVisible}/>
            </ArrowWrapper>
            <OptionsWrapper isVisible={isVisible}>
                {/* <Placeholder>Boid Settings Coming Soon</Placeholder> */}
                <li>Separation</li>
                <li>Cohesion</li>
                <li>Alignment</li>
                <li>Vision Range <input type="range" min="1" max="100" value={settings.sightDropOff} id="myRange" onInput={(e) => onChange({ ...settings, sightDropOff: parseInt(e.currentTarget.value)})}/> {settings.sightDropOff}</li>
                <li>Show Vision <input type="checkbox" value={"Vision"} onInput={(e) => onChange({ ...settings, showVision: e.currentTarget.checked}) }/> </li>
                <li>Show Cohesion <input type="checkbox" value={"Vision"} onInput={(e) => onChange({ ...settings, showCohesionVector: e.currentTarget.checked}) }/> </li>
                {/* <li>view drop-off <input type="range" min="1" max="100" value={settings.sightDropOff} id="myRange" onInput={(e) => onChange({ ...settings, sightDropOff: parseInt(e.currentTarget.value)})}/></li>
                <li>view drop-off <input type="range" min="1" max="100" value={settings.sightDropOff} id="myRange" onInput={(e) => onChange({ ...settings, sightDropOff: parseInt(e.currentTarget.value)})}/></li> */}
            </OptionsWrapper>
        </Wrapper>

    );
}

const Placeholder = styled.li`
    margin: 25px;
`;

const ArrowIcon = styled.img<{ isVisible: boolean}>`
    transform: scaleX(${({ isVisible }) => isVisible ? '1' : '-1'});
    transition: transform 0.25s linear;
`;

const ArrowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 12px;
    right: -1px;
    cursor: pointer;
    border: 1px solid white;
    width: 24px;
    height: 24px;
    border-radius: 8px 0px 0px 8px;
    transition: transform 0.2s ease-in-out;
    transform: translateZ(0);
    background-color: #2a9d8f;
    :hover {
        transform: scale(1.1);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: -1px;
    top: 0;
`;

const OptionsWrapper = styled.ul<{ isVisible: boolean }>`
    margin: 0;
    border: 1px solid white;
    border-right: none;
    border-radius: 8px 0px 0px 8px;
    list-style: none;
    overflow-x: hidden;
    background-color: #2a9d8f;
    width: ${({ isVisible }) => isVisible ? 250 : 0}px;
    white-space: nowrap;
    transition: width 0.25s linear;
    padding: 0px;
    padding-right: 0;
    z-index: 2;
    > * {
        text-align: left;
    }
`;