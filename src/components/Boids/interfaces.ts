import { number } from "prop-types";

export interface boid {
    x: number;
    y: number;
    angle: number;
    speed: number;
    size: number;
};

export interface BoidSettings {
    sightDropOff: number;
};