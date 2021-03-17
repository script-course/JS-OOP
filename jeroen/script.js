const shapes = [];

class Shape {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }

  toString() {
    return `Het oppervlak van ${this.name} is ${this.getArea().toFixed(2)}<br>`;
  }
}

class Circle extends Shape {
  constructor(radius, color, name) {
    super(color, name);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(size, color, name) {
    super(color, name);
    this.size = size;
  }

  getArea() {
    return Math.pow(this.size, 2);
  }

  getSize() {
    return this.size;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color, name) {
    super(color, name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getWidth() {
    return this.size;
  }

  getHeight() {
    return this.name;
  }
}

shapes.push(new Circle(1.5, "blue", "Blue Circle"));
shapes.push(new Circle(10, "red", "Red Circle"));
shapes.push(new Circle(20, "yellow", "Yellow Circle"));

shapes.push(new Square(2, "black", "First Square"));
shapes.push(new Square(5, "green", "Second Square"));
shapes.push(new Square(100, "orange", "Third Square"));

shapes.push(new Rectangle(2, 5, "black", "First Rectangle"));
shapes.push(new Rectangle(5, 10, "green", "Second Rectangle"));
shapes.push(new Rectangle(100, 100, "orange", "Third Rectangle"));

shapes.forEach((shapeItem) => {
  document.write(iteshapeItemm.toString());
});
