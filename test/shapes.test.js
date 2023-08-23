const { Triangle, Circle, Square } = require("./shapes.js");
// test for triangle given a color blue
describe("Triangle", () => {
  test("should render background color blue.", () => {
    const shape = new shape();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="250,60 100,400 400,400" fill="blue" >'
    );
  });
});
// test for Circle given color green
describe("Circle", () => {
  test("should render background color green", () => {
    const shape = new shape();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="50" cy="50" r="40" fill="green">'
    );
  });
});
// test for Circle given color red
describe("Square", () => {
  test("should render background color red", () => {
    const shape = new shape();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="50" y="20" width="150" height="150" fill="red">'
    );
  });
});
