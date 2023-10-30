const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
  it('Circle should return correct SVG', () => {
    const circle = new Circle('#fff');
    expect(circle.toSVG('AI', '#000')).toContain('<circle');
  });
  
  it('Square should return correct SVG', () => {
    const square = new Square('#fff');
    expect(square.toSVG('AI', '#000')).toContain('<rect');
  });
  
  it('Triangle should return correct SVG', () => {
    const triangle = new Triangle('#fff');
    expect(triangle.toSVG('AI', '#000')).toContain('<polygon');
  });
});