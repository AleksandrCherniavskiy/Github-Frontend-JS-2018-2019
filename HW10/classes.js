/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */

class Shape {
  /**
   * @param {Point} center
   */
  constructor(center) {
    this._center = center;
  }
}

/* багатокутник -> фігура:
 *      вершини[координати],
 *      периметр() */
class Polygon extends Shape {
  /**
  * @param {array} center
  * @param {object} points
  * */
  constructor(center, points) {
    super(center);
    this.points = points;
  }
}

/* прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 */
class Rectangle extends Polygon {
  /**
   * @param {array} center
   * @param {number} width
   * @param {number} height
   * */
  constructor(center, width, height) {
    super(center);
    this.width = width;
    this.height = height;
  }

  square() {
    /**
     * return number
     */
    return this.width * this.height;
  }

  perimeter() {
    /**
     * return number
     */
    return (this.width + this.height) * 2;
  }
}

/* квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр() */
class Square extends Rectangle {
  /**
   * @param {array} center
   * @param {number} width
   */
  constructor(center, width) {
    super(center, width, width);
  }

  square() {
    /**
     * return number
     */
    return this.width ** 2;
  }

  perimeter() {
    /**
     * return number
     */
    return this.width * 4;
  }
}

/* круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр() */
class Circle extends Shape {
  /**
   *
   * @param {array} center
   * @param {number} radius
   */
  constructor(center, radius) {
    super(center);
    this.radius = radius;
  }

  square() {
    /**
     * return number
     */
    return Math.PI * (this.radius ** 2);
  }

  perimeter() {
    /**
     * return number
     */
    return 2 * Math.PI * this.radius;
  }
}

class Point {
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  getPointAtOffset(x1, y1) {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point) {
    return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
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
