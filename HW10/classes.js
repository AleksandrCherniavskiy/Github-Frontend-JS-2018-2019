class shape {
  constructor(center) {
    this.center = center;
  }
}

class polygon extends shape {
  constructor(center, points) {
    super.center = center;
    this.points = points;
  }
}
