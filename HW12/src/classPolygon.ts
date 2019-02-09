import { Shape } from './main';
import Point from './classPoint';

export default class Polygon extends Shape {
    private points: Array<Point>;
    constructor(center: Point, points: Array<Point>) {
        super(center);
        this.points = points;
    }
}
