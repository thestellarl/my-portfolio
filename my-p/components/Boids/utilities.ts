import { boid } from "./interfaces";

const alignBoids = (source: boid, other: boid) => {
    // const diff = Math.abs(other.angle - source.angle);
    // const distance = diff > Math.PI ? 2 * Math.PI - diff : diff;
    // return (other.angle - source.angle >= 0 && other.angle - source.angle <= 180) || (other.angle - source.angle <=-180 && other.angle- source.angle>= -360) ? distance : -distance;
}

export const normalize = (vector: {x: number, y: number}) => {
    let mag = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
    return mag == 0 ? vector : { x: vector.x / mag, y: vector.y / mag };
}

export { alignBoids };