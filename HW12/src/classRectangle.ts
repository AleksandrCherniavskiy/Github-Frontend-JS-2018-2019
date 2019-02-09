import Polygon from './classPolygon';
import Point from './classPoint';

export default class Rectangle extends Polygon {
    protected width: number;
    private height: number;
    constructor(center: Point, width: number, height: number) {
        // @ts-ignore
        super(center);
        this.width = width;
        this.height = height;
    }

    square(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        const countOfSameSides = 2;

        return (this.width + this.height) * countOfSameSides;
    }
}
