const { Triangle, Circle, Square } = require("../lib/shapes.js");
// test for triangle given a color blue
describe("Triangle", () => {
  test("should render background color blue.", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    shape.setText("fff")
    shape.setTextColor("red")
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" fill="blue"></polygon><text x="245" y="170" font-size="45" text-anchor="middle" fill="red">fff</text></svg>'
    );
  });
});
// test for Circle given color green
describe("Circle", () => {
  test("should render background color green", () => {
    const shape = new Circle();
    shape.setColor("green");
    shape.setText("fff");
    shape.setTextColor("blue")
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="110" r="60" fill="green"></circle> <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">fff</text></svg>'
    );
  });
});
// test for Circle given color red
describe("Square", () => {
  test("should render background color red", () => {
    const shape = new Square();
    shape.setColor("red");
    shape.setText("fff");
    shape.setTextColor("blue");
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="red"></rect> <text x="130" y="112" font-size="60" text-anchor="middle" fill="blue">fff</text></svg>'
    );
  });
});
