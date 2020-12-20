import { number } from "prop-types";

export interface boid {
    position: {x: number, y: number},
    velocity: {dx: number, dy: number},
    max_speed: number,
    orientation: number,
    size: number;
};

export interface BoidSettings {
    cohesionFactor: number;
    showCohesion: boolean;
    separationFactor: number;
    showSeparation: boolean;
    alignmentFactor: number;
    showAlignment: boolean;
    
    sightDropOff: number;
    showVision: boolean;
};