/**
 * shape factory
 * @param {string} color the color of the shape
 * @param {string} name the name of the shape
 */
const ShapeFactory = (name, color) => {
    return {name, color};
};

/**
 * cicle factory
 * @param {number} radius the radius of the circle
 * @param {string} color the color of the circle
 * @param {string} name the name of the circle
 */
const CircleFactory = (radius, name, color) => {
    const shape = ShapeFactory(name, color);
    const circle = {
        radius,
        get area() {
            return Math.PI * radius * radius;
        },
    };

    return Object.assign(shape, circle);
};

const a = CircleFactory(1.5, 'blue', 'blue circle');
const b = CircleFactory(10, 'red', 'red circle');
const c = CircleFactory(20, 'yellow', 'yellow circle');
console.log(a.area, b.area, c.area);

/**
 * square factory
 * @param {number} size the size of the square
 * @param {string} color the color of the square
 * @param {string} name the name of the square
 */
const SquareFactory = (size, name, color) => {
    return {
        ...ShapeFactory(name, color),
        size,
        get area() {
            return size * size;
        },
    };
};

const d = SquareFactory(2, 'black', 'black square');
const e = SquareFactory(5, 'green', 'green square');
const f = SquareFactory(100, 'orange', 'orange square');
console.log(d.area, e.area, f.area);

/**
 * rectangle factory
 * @param {number} width the width of the rectangle
 * @param {number} height the size of the rectangle
 * @param {string} color the color of the rectangle
 * @param {string} name the name of the rectangle
 */
const RectangleFactory = (width, height, name, color) => ({
    ...ShapeFactory(name, color),
    width,
    height,
    get area() {
        return (width * height) / 2;
    },
});

const g = RectangleFactory(2, 5, 'black', 'blue rectangle');
const h = RectangleFactory(5, 10, 'green', 'red rectangle');
const i = RectangleFactory(100, 100, 'orange', 'yellow rectangle');
console.log(g.area, h.area, i.area);
