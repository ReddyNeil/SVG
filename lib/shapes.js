// Abstract class for shapes
class Shape {
  constructor(fillColour) {
    this.fillColour = fillColour;
  }
  
  toSVG() {
    throw new Error("Method 'toSVG()' must be implemented.");
  }
}

// Circle shape class
class Circle extends Shape {
  toSVG(text, textColour) {
    return `<circle cx="150" cy="100" r="90" fill="${this.fillColour}" />
            <text x="150" y="110" font-family="Arial" font-size="48" text-anchor="middle" fill="${textColour}">${text}</text>`;
  }
}

// Square shape class
class Square extends Shape {
  toSVG(text, textColour) {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.fillColour}" />
            <text x="150" y="110" font-family="Arial" font-size="48" text-anchor="middle" fill="${textColour}">${text}</text>`;
  }
}

// Triangle shape class
class Triangle extends Shape {
  toSVG(text, textColour) {
    return `<polygon points="150,25 275,175 25,175" fill="${this.fillColour}" />
            <text x="150" y="110" font-family="Arial" font-size="48" text-anchor="middle" fill="${textColour}">${text}</text>`;
  }
}

module.exports = { Circle, Square, Triangle };