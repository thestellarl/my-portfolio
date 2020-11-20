import { number } from "prop-types";

export interface boid {
    position: {x: number, y: number},
    velocity: {dx: number, dy: number},
    max_speed: number,
    orientation: number,
    size: number;
};

export interface BoidSettings {
    sightDropOff: number;
    showVision: boolean;
};