import React, { useRef, useState, useEffect } from 'react';
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
        <Wrapper isVisible={isVisible}>
            <ArrowWrapper onClick={() => setVisible(!isVisible)}>
                <ArrowIcon src='SVG/arrow.svg' width={16} height={16} isVisible={isVisible}/>
            </ArrowWrapper>
            <OptionsWrapper isVisible={isVisible}>
                <OptionLabel>Cohesion</OptionLabel>
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.showCohesion = e.currentTarget.checked }/> </div>
                <div><input type="range" min="0" max="4" value={settings.cohesionFactor} id="myRange" onChange={(e) => console.log(e.currentTarget.value) }/></div>
                <div>{settings.cohesionFactor}</div>
                <OptionLabel>Separation</OptionLabel>
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.showSeparation = e.currentTarget.checked }/></div>
                <div><input type="range" min="0" max="4" value={settings.separationFactor} id="myRange" onInput={(e) => settings.separationFactor = parseInt(e.currentTarget.value) }/></div>  
                <div>{settings.separationFactor}</div>
                    
                <OptionLabel>Alignment</OptionLabel>
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.showAlignment = e.currentTarget.checked }/></div>
                <div><input type="range" min="0" max="4" value={settings.alignmentFactor} id="myRange" onInput={(e) => settings.alignmentFactor = parseInt(e.currentTarget.value) }/></div>
                <div>{settings.alignmentFactor}</div>
                    
                <OptionLabel>Vision Range </OptionLabel>
                <div><input type="range" min="1" max="4" value={settings.sightDropOff} id="myRange" onInput={(e) => settings.sightDropOff = parseInt(e.currentTarget.value) }/> {settings.sightDropOff}</div>
            </OptionsWrapper>
        </Wrapper>

    );
}

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

const Wrapper = styled.div<{ isVisible: boolean }>`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate3d(${({ isVisible }) => isVisible ? '0' : '300'}px, 0, 0);
    transition: transform .3s cubic-bezier(0, .52, 0, 1);
`;

const OptionLabel = styled.div`
    width: 40%;
`;

const OptionsWrapper = styled.div<{ isVisible: boolean }>`
    margin: 0;
    position: relative;
    border-radius: 8px 0px 0px 8px;
    // list-style: none;
    // overflow-x: hidden;
    background-color: #2a9d8f;
    // white-space: nowrap;
    // transition: width 0.25s linear;
    padding: 15px;
    z-index: 2;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    > * {
        text-align: left;
    }
`;