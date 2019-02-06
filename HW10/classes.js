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
  * @param {Point} center
  * @param {Point[]} points
  * */
  constructor(center, points) {
    super(center);
    this._points = points;
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
   * @param {Point} center
   * @param {number} width
   * @param {number} height
   * */
  constructor(center, width, height) {
    super(center);
    this._width = width;
    this._height = height;
  }

  /**
   * @returns {number}
   */
  square() {
    return this._width * this._height;
  }

  /**
   * @returns {number}
   */
  perimeter() {
    return (this._width + this._height) * 2;
  }
}

/* квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр() */
class Square extends Rectangle {
  /**
   * @param {Point} center
   * @param {number} width
   */
  constructor(center, width) {
    super(center, width, width);
  }

  /**
   * @returns {number}
   */
  square() {
    return this._width ** 2;
  }

  /**
   * @returns {number}
   */
  perimeter() {
    return this._width * 4;
  }
}

/* круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр() */
class Circle extends Shape {
  /**
   *
   * @param {Point} center
   * @param {number} radius
   */
  constructor(center, radius) {
    super(center);
    this._radius = radius;
  }

  /**
   * @returns {number}
   */
  square() {
    return Math.PI * (this.radius ** 2);
  }

  /**
   * @returns {number}
   */
  perimeter() {
    return 2 * Math.PI * this._radius;
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
