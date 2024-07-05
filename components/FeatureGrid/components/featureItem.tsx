import React, { useState } from 'react';
import styled from 'styled-components';

export const FeatureItem = () => {
  const [showOverlay, setShowOverlay] = useState(false);
    
  return(
    <>
      <FeatureOverlay isVisible={showOverlay} onClick={() => setShowOverlay(true)} />
      <FeatureBackground />
    </>
  );
}

const FeatureBackground = styled.div`
    height: 100%;
    width: 100%;
    background-color: yellow;
`;
const FeatureOverlay = styled.div<{isVisible: boolean}>`
    height: 100px;
    width: 100px;
    background-color: red;
    opacity: 0;
    ${({ isVisible }) => isVisible && `
        opacity: 1;
        -webkit-animation: swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
                animation: swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;`
}
`;