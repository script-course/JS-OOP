class Circle {
    /**
     * cicle constructor
     * @param {number} radius the radius of the circle
     * @param {string} color the color of the circle
     * @param {string} name the name of the circle
     */
    constructor(radius, color, name) {
        this._radius = radius;
        this._color = color;
        this._name = name;
    }

    get radius() {
        return this._radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    get name() {
        return this._name;
    }
}

const a = new Circle(1.5, 'blue', 'blue circle');
const b = new Circle(10, 'red', 'red circle');
const c = new Circle(20, 'yellow', 'yellow circle');
console.log(a.area, b.area, c.area);

class Square {
    /**
     * square constructor
     * @param {number} size the size of the square
     * @param {string} color the color of the square
     * @param {string} name the name of the square
     */
    constructor(size, color, name) {
        this._size = size;
        this._color = color;
        this._name = name;
    }

    get size() {
        return this._size;
    }

    get area() {
        return this.size * this.size;
    }

    get name() {
        return this._name;
    }
}

const d = new Square(2, 'black', 'black square');
const e = new Square(5, 'green', 'green square');
const f = new Square(100, 'orange', 'orange square');
console.log(d.area, e.area, f.area);

class Rectangle {
    /**
     * rectangle constructor
     * @param {number} width the width of the rectangle
     * @param {number} height the size of the rectangle
     * @param {string} color the color of the rectangle
     * @param {string} name the name of the rectangle
     */
    constructor(width, height, color, name) {
        this._width = width;
        this._height = height;
        this._color = color;
        this._name = name;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return (this.width * this.height) / 2;
    }

    get name() {
        return this._name;
    }
}

const g = new Rectangle(2, 5, 'black', 'blue rectangle');
const h = new Rectangle(5, 10, 'green', 'red rectangle');
const i = new Rectangle(100, 100, 'orange', 'yellow rectangle');
console.log(g.area, h.area, i.area);
