import { Shape } from './main';
import Point from './classPoint';

export default class Circle extends Shape {
    private radius: number;
    constructor(center: Point, radius: number) {
        super(center);
        this.radius = radius;
    }
    square(): number {
        const sqr = 2;

        return Math.PI * (this.radius ** sqr);
    }

    perimeter(): number {
        const two = 2;

        return two * Math.PI * this.radius;
    }
}
