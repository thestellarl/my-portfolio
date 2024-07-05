import React, { useLayoutEffect, useRef } from 'react';

function getScrollPosition( element?: React.RefObject<HTMLDivElement>) {
  const target = element ? element.current : document.body;

  return target ? target.scrollTop : 0;
}
  
export function useScrollPosition(effect: any, deps: any[], element: React.RefObject<HTMLDivElement>, wait: number) {
  const position = useRef(getScrollPosition(element));
  let throttleTimeout: any = null;
  
  const callBack = () => {
    const currPos = getScrollPosition(element);
    effect(currPos);
    position.current = currPos;
    throttleTimeout = null;
  }
  
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }
      element.current!.addEventListener('scroll', handleScroll)
  
      return () => element.current!.removeEventListener('scroll', handleScroll)
  }, deps)
}

interface ScrollControllerProps {
    appRef: React.RefObject<HTMLDivElement>;
}

export const ScrollController = ({ appRef }: ScrollControllerProps) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  
  useScrollPosition((currPos: number) => {
    setScrollPosition(currPos);
  }, [scrollPosition], appRef, 100);

  return(<></>);
}