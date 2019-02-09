import Polygon from './classPolygon';
import Point from './classPoint';
import Rectangle from './classRectangle';
import Square from './classSquare';
import Circle from './classCircle';

export class Shape {
    center: Point;
    constructor(center: Point) {
        this.center = center;
    }
}

const Shapes = {
    Shape,
    Polygon,
    Rectangle,
    Square,
    Circle,
    Point,
};
