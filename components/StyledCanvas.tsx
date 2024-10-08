import React, { useRef } from 'react';
import styled from 'styled-components';

export const FloaterBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
  let animationStart: number | undefined;

    interface boid {
        position: {x: number, y: number},
        velocity: {dx: number, dy: number},
        max_speed: number,
        orientation: number,
        size: number;
    };
    let objectData: boid[] = [];
    
    const sigmoid = (input: number) => {
      return 1/( 1 + Math.exp(input));
    }
    
    React.useEffect(() => {
      if (canvasRef.current) {
        const renderCtx = canvasRef.current.getContext('2d');
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        
        if (renderCtx) {
          setContext(renderCtx);
        }
      }
      
      window.requestAnimationFrame(draw);
    }, [context, window.innerWidth, window.innerHeight]);
    
    const draw = (timestamp: number) => {
      if (animationStart === undefined)
        animationStart = timestamp;
      const elapsed = timestamp - animationStart;
  
      for(let i = objectData.length; i < 50; i++){  
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
            //   obj.angle -= 0.1
            // if (sensor.y > window.innerHeight || sensor.y < 0)
            //   obj.angle -= 0.1

            objectData.map((otherBoid) => {
              const dist = Math.sqrt(Math.pow(obj.position.x - otherBoid.position.x, 2) + Math.pow(obj.position.y - otherBoid.position.y, 2));
              const objToOther = {dx: otherBoid.position.x - obj.position.x , dy: otherBoid.position.y - obj.position.y};

              // const angleOffset = Math.acos((Math.cos(obj.angle) * objToOther.dx + Math.sin(obj.angle) * objToOther.dy) / Math.sqrt( Math.pow(objToOther.dx, 2) + Math.pow(objToOther.dy, 2)));
              // context.beginPath();
              // context.moveTo(obj.x, obj.y);
              // context.lineTo(obj.x + Math.cos(obj.angle - Math.PI / 3 * 2) * 200, obj.y + Math.sin(obj.angle - Math.PI / 3 * 2) * 200);
              // context.moveTo(obj.x, obj.y);
              // context.lineTo(obj.x + Math.cos(obj.angle + Math.PI / 3 * 2) * 200, obj.y + Math.sin(obj.angle + Math.PI / 3 * 2) * 200);
              // context.strokeStyle = 'white';
              // context.stroke();
              // context.closePath();

              // context.beginPath();
              // context.arc(obj.x, obj.y, 200, obj.angle - Math.PI / 3 * 2, obj.angle + Math.PI / 3 * 2);
              // context.stroke();
              // context.closePath();

              // if(dist < 200 && Math.abs(angleOffset) < Math.PI / 3){
              //obj.angle += -(Math.min(obj.angle - otherBoid.angle, otherBoid.angle - obj.angle - Math.PI * 2 )) * sigmoid(dist/100) * obj.speed * 0.001;
              // let outer = otherBoid.angle - obj.angle;
              // let inner = otherBoid.angle - (obj.angle - 2 * Math.PI);
                    
              // obj.angle += (Math.abs(outer) < Math.abs(inner) ? outer : inner) * sigmoid(dist/50) * obj.speed * 0.5;
              // }
            })
            // obj.position.x += obj.velocity.dx;
            // obj.position.y += obj.velocity.dy;

            context.beginPath();
            context.arc(obj.position.x, obj.position.y, obj.size, 0, 2 * Math.PI);
            context.fill();
            context.closePath();

            context.save();
            // context.beginPath();
            // context.moveTo(obj.x, obj.y);
            // context.lineTo(obj.x + Math.cos(obj.angle) * obj.speed * 200, obj.y + Math.sin(obj.angle) * obj.speed * 200);
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
      <StyledCanvas 
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}/>
    );
}

const StyledCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  backgroundColor: rgb(38,70,83); 
  background: linear-gradient(336deg, rgba(38,70,83,1) 0%, rgba(42,157,143,1) 100%);
`;