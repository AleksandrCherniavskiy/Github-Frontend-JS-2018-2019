export default class Point {
    private x: number;
    private y: number;

    get xFunc(): number {
        return this.x;
    }

    get yFunc(): number {
        return this.y;
    }


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getPointAtOffset(x1: number, y1: number) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point: Point) {
        const sqr = 2;

        return Math.sqrt(((this.x - point.x) ** sqr) + ((this.y - point.y) ** sqr));
    }
}
