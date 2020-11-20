import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useViewport } from '../../utilities/window-resize';
import { BoidsOptions } from './boidsOptions';
import { boid, BoidSettings } from './interfaces';
import { alignBoids, normalize } from './utilities';

export const FloaterBackground = () => {
    const initialSettings: BoidSettings = {
      sightDropOff: 50,
      showVision: false,
    }
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
    const [settings, updateSettings] = React.useState(initialSettings); 
    
    useEffect(() => {
      console.log(settings);
    }, [settings]);


    let animationStart: number | undefined;

    let objectData: boid[] = [];
    
    const sigmoid = (input: number) => {
        return 1/( 1 + Math.exp(input));
    };

    const { height, width } = useViewport();
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

    const draw = (timestamp: number) => {
      if (animationStart === undefined)
        animationStart = timestamp;
      const elapsed = timestamp - animationStart;
  
      for(let i = objectData.length; i < 120; i++){
        objectData.push({ 
          position:{x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}, 
          velocity: {dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1}, 
          max_speed: 1, 
          orientation: Math.random() * 2 * Math.PI, 
          size: 4})
      }

      if (context){
          context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          context.save();
          context!.fillStyle = "#2a9d8f";
          objectData = objectData.filter((obj) => {                
            // const sensor = {x: obj.x + Math.cos(obj.angle) * obj.speed * 50, y: obj.y + Math.sin(obj.angle) * obj.speed * 100}
            // if (sensor.x > window.innerWidth || sensor.x < 0 )
            //   obj.angle -= 0.01
            // if (sensor.y > window.innerHeight || sensor.y < 0)
            //   obj.angle -= 0.01
            let localAvg = {x: obj.position.x, y: obj.position.y};
            let num_local = 1;
            objectData.map((otherBoid) => {
              const objToOther = {dx: otherBoid.position.x - obj.position.x , dy: otherBoid.position.y - obj.position.y};
              const dist = Math.sqrt(Math.pow(objToOther.dx, 2) + Math.pow(objToOther.dy, 2));
                  
              // console.log(dist);
              // const angleOffset = Math.acos((Math.cos(obj.angle) * objToOther.dx + Math.sin(obj.angle) * objToOther.dy) / Math.sqrt( Math.pow(objToOther.dx, 2) + Math.pow(objToOther.dy, 2)));
              
              // Vision Radius 
              // context.beginPath();
              // context.moveTo(obj.x, obj.y);
              // context.lineTo(obj.x + Math.cos(obj.angle - Math.PI / 3 * 2) * 200, obj.y + Math.sin(obj.angle - Math.PI / 3 * 2) * 200);
              // context.moveTo(obj.x, obj.y);
              // context.lineTo(obj.x + Math.cos(obj.angle + Math.PI / 3 * 2) * 200, obj.y + Math.sin(obj.angle + Math.PI / 3 * 2) * 200);
              // context.strokeStyle = 'white';
              // context.stroke();
              // context.closePath();
              // context.beginPath();
              // context.arc(obj.position.x, obj.position.y, 200, Math.PI * 2, 0);
              // context.stroke();
              // context.closePath();

              // obj.angle += alignBoids(obj, otherBoid) * sigmoid(dist/settings.sightDropOff) * 0.01;
              // if(dist < 200 ){
              
              //Movement
              if(dist < 120){
                let repulsive_force = normalize({x: otherBoid.position.x - obj.position.x, y: otherBoid.position.y - obj.position.y}) ;
                obj.velocity.dx += repulsive_force.x / 20;
                obj.velocity.dy += repulsive_force.y / 20;
                //cohesion average
                num_local++;
                localAvg.x += otherBoid.position.x;
                localAvg.y += otherBoid.position.y;
                //obj.angle += (Math.abs(outer) < Math.abs(inner) ? outer : inner) * sigmoid(dist/50) * obj.speed * 0.5;
              }

              })


              context.beginPath();
              context.moveTo(obj.position.x, obj.position.y);
              context.lineTo(localAvg.x / num_local, localAvg.y / num_local);
              context.strokeStyle = 'white';
              context.stroke();
              context.closePath();
              
              //Apply Cohesion
              let c = normalize({x: obj.position.x - (localAvg.x / num_local), y: obj.position.y - (localAvg.y / num_local)})
              obj.velocity.dx += c.x / 10;
              obj.velocity.dy += c.y / 10;
              
              let g = normalize({x: obj.velocity.dx, y: obj.velocity.dy});
              obj.velocity.dx = g.x;
              obj.velocity.dy = g.y;
              obj.position.x += -obj.velocity.dx;
              obj.position.y += -obj.velocity.dy;

              context.beginPath();
              context.arc(obj.position.x, obj.position.y, obj.size, 0, 2 * Math.PI);
              context.fill();
              context.closePath();

              if(settings.showVision){
                context.beginPath();
                context.save();
                context.arc(obj.position.x, obj.position.y, 120, 0, 2 * Math.PI);
                context!.fillStyle = "#ffffff08";
                context.fill();
                context.restore();
                context.closePath();
              }

              context.save();
              // context.beginPath();
              // context.moveTo(obj.x, obj.y);
              // context.lineTo(obj.x + Math.cos(obj.angle) * obj.speed * 20, obj.y + Math.sin(obj.angle) * obj.speed * 20);
              // context.strokeStyle = 'white';
              // context.stroke();
              // context.closePath();

              context.restore();
              return !(Math.abs(obj.position.x - window.innerWidth / 2) > window.innerWidth/2 || Math.abs(obj.position.y - window.innerHeight / 2) > window.innerHeight/2)
          });
          context.restore();
      }
      window.requestAnimationFrame(draw);
    }

    return(
      <>
        <BoidsOptions settings={settings} onChange={updateSettings} />
        <StyledCanvas 
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}/>
      </>
    );
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: rgb(38,70,83); 
  background: linear-gradient(336deg, rgba(38,70,83,1) 0%, rgba(42,157,143,1) 100%);
`;