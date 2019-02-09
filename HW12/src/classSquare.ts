import Rectangle from './classRectangle';
import Point from './classPoint';

export default class Square extends Rectangle {
    constructor(center: Point, width: number) {
        super(center, width, width);
    }

    square(): number {
        const sqr = 2;

        return this.width ** sqr;
    }
    perimeter(): number {
        const numberOfSides = 4;

        return this.width * numberOfSides;
    }
}
