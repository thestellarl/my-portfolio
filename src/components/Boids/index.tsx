import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useViewport } from '../../utilities/window-resize';
import { BoidsOptions } from './boidsOptions';
import { boid, BoidSettings } from './interfaces';
import { normalize } from './utilities';

export const FloaterBackground = () => {
    const initialSettings: BoidSettings = {
      cohesionFactor: 1,
      showCohesion: false,
      separationFactor: 1,
      showSeparation: false,
      alignmentFactor: 1,
      showAlignment: false,
      sightDropOff: 50,
      showVision: false
    }
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
    
    const settings = useRef(initialSettings);
    
    let animationStart: number | undefined;
    
    let objectData: boid[] = [];
    
    const sigmoid = (input: number) => {
      return 1/( 1 + Math.exp(input));
    };
    
    const { height, width } = useViewport();
    const mousePosition = useRef({x: width / 2, y: height / 2 });

    React.useEffect(() => {
      if (canvasRef.current) {
        const renderCtx = canvasRef.current.getContext('2d');
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        
        if (renderCtx) {
          setContext(renderCtx);
        }
      }
      window.requestAnimationFrame(draw);
    }, [context, height, width]);

    const handleMouseOver = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      mousePosition.current = { x: event.pageX, y: event.pageY }
    }

    for(let i = objectData.length; i < 120; i++){
      objectData.push({ 
        position:{x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}, 
        velocity: {dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1}, 
        max_speed: 1, 
        orientation: Math.random() * 2 * Math.PI, 
        size: 4})
    }

    const draw = (timestamp: number) => {
      if (animationStart === undefined)
        animationStart = timestamp;
      const elapsed = timestamp - animationStart;
      
      if (context){
          context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          context.save();
          context!.fillStyle = `#2a9d8f`;
          objectData = objectData.filter((obj) => {                
            let localAvg = {x: obj.position.x, y: obj.position.y};
            let avgVelocity = {dx: 0, dy: 0};
            let num_local = 1;
            objectData.map((otherBoid) => {
              const objToOther = {dx: otherBoid.position.x - obj.position.x , dy: otherBoid.position.y - obj.position.y};
              const dist = Math.sqrt(Math.pow(objToOther.dx, 2) + Math.pow(objToOther.dy, 2));
                  
              //Movement
              if(dist < 120){
                let repulsive_force = normalize({x: otherBoid.position.x - obj.position.x, y: otherBoid.position.y - obj.position.y}) ;
                obj.velocity.dx += repulsive_force.x / 15;
                obj.velocity.dy += repulsive_force.y / 15;
                //cohesion average
                num_local++;
                localAvg.x += otherBoid.position.x;
                localAvg.y += otherBoid.position.y;
                avgVelocity.dx += otherBoid.velocity.dx;
                avgVelocity.dy += otherBoid.velocity.dy;
              }

            })
            if(settings.current.showCohesion){
              context.beginPath();
              context.moveTo(obj.position.x, obj.position.y);
              context.lineTo(localAvg.x / num_local, localAvg.y / num_local);
              context.strokeStyle = 'white';
              context.stroke();
              context.closePath();
            }

              
            //Apply Cohesion
            let c = normalize({x: obj.position.x - (localAvg.x / num_local), y: obj.position.y - (localAvg.y / num_local)})
            obj.velocity.dx += c.x / 4;
            obj.velocity.dy += c.y / 4;
            
            let alignmentVector = {x: avgVelocity.dx / num_local, y: avgVelocity.dy / num_local};
            obj.velocity.dx += (alignmentVector.x - obj.velocity.dx) / 20;
            obj.velocity.dy += (alignmentVector.y - obj.velocity.dy) / 20;

            let edgeAvoidance = {x: Math.tan(Math.PI * ((obj.position.x / width + 1/2))) / 400, y: Math.tan(Math.PI * ((obj.position.y / height + 1/2))) / 400};
            obj.velocity.dx += edgeAvoidance.x;
            obj.velocity.dy += edgeAvoidance.y;
            
            // context.beginPath();
            // context.moveTo(obj.position.x, obj.position.y);
            // context.lineTo(obj.position.x + edgeAvoidance.x * -1600, obj.position.y + edgeAvoidance.y * -1600);
            // context.strokeStyle = 'red';
            // context.stroke();
            // context.closePath();

            let g = normalize({x: obj.velocity.dx, y: obj.velocity.dy});
            obj.velocity.dx = g.x;
            obj.velocity.dy = g.y;
            obj.position.x += -obj.velocity.dx;
            obj.position.y += -obj.velocity.dy;
            if(settings.current.showAlignment){
              context.beginPath();
              context.moveTo(obj.position.x, obj.position.y);
              context.lineTo(obj.position.x + obj.velocity.dx * -40, obj.position.y + obj.velocity.dy * -40);
              context.strokeStyle = 'blue';
              context.stroke();
              context.closePath();
            }

            context.beginPath();
            context.arc(obj.position.x, obj.position.y, obj.size, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
            
            if(settings.current.showVision){
              context.beginPath();
              context.save();
              context.arc(obj.position.x, obj.position.y, 120, 0, 2 * Math.PI);
              context!.fillStyle = "#ffffff08";
              context.fill();
              context.restore();
              context.closePath();
            }

            context.save();
            context.restore();
            return !(Math.abs(obj.position.x - window.innerWidth / 2) > window.innerWidth/2 || Math.abs(obj.position.y - window.innerHeight / 2) > window.innerHeight/2)
          });
          context.restore();
      }
      
      window.requestAnimationFrame(draw);
    };

    const getBoidsOptions = useCallback(() => <BoidsOptions settings={settings.current} onChange={(newSettings) => settings.current = newSettings} />
    , [settings.current])

    return(
      <>
        {getBoidsOptions()}
        <StyledCanvas 
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseOver}
        />
      </>
    );
}

const StyledCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: linear-gradient(336deg, #264653, #2a9d8f);
`;