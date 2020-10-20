import React from 'react';
import styled from 'styled-components';
import { FeatureItem } from './components/featureItem';

interface IFeatureGridProps {
    children ?: React.ReactNode;
};

export const FeatureGrid = ({ children }: IFeatureGridProps) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`;