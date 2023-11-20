import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../../utilities/window-resize';
import { BoidSettings } from './interfaces';

interface IBoidsOptionsProps {
    settings: React.MutableRefObject<BoidSettings>;
    // onChange: (value: BoidSettings) => void;
}

export const BoidsOptions = ({ settings }: IBoidsOptionsProps) => {
    const [isVisible, setVisible ] = useState(false);

    return(
        <Wrapper isVisible={isVisible}>
            <ArrowWrapper onClick={() => setVisible(!isVisible)}>
                <ArrowIcon src='SVG/arrow.svg' width={16} height={16} isVisible={isVisible}/>
            </ArrowWrapper>
            <OptionsWrapper isVisible={isVisible}>
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.current = {...settings.current, showCohesion: e.currentTarget.checked}}/> </div>
                <OptionLabel>Cohesion</OptionLabel>
                <div><input type="range" defaultValue={settings.current.cohesionFactor} min="0" max="2" step={0.5} id="myRange" onInput={(e) => settings.current = {...settings.current, cohesionFactor: parseInt(e.currentTarget.value) }} /></div>
                
                <div><input type="checkbox" value={"Vision"} disabled onInput={(e) => settings.current = {...settings.current, showSeparation: e.currentTarget.checked }}/></div>
                <OptionLabel>Separation</OptionLabel>
                <div><input type="range" defaultValue={settings.current.separationFactor} min="0" max="2" step={0.5} id="myRange" onChange={(e) => settings.current = {...settings.current, separationFactor: parseInt(e.currentTarget.value) }}/></div>  
                    
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.current = {...settings.current, showAlignment: e.currentTarget.checked}}/></div>
                <OptionLabel>Alignment</OptionLabel>
                <div><input type="range" defaultValue={settings.current.alignmentFactor} min="0" max="2" step={0.5} id="myRange" onChange={(e) => settings.current = {...settings.current, alignmentFactor: parseInt(e.currentTarget.value) }}/></div>
                    
                <div><input type="checkbox" value={"Vision"} onInput={(e) => settings.current = {...settings.current, showVision: e.currentTarget.checked}}/></div>
                <OptionLabel>Vision Range </OptionLabel>
                <div><input type="range" min="0" max="2" defaultValue={settings.current.sightDropOff} step={0.5} id="myRange" onChange={(e) => settings.current = {...settings.current, sightDropOff: parseFloat(e.currentTarget.value) }}/></div>
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