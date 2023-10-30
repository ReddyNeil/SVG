// Required packages and file system modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Questions for user input using inquirer
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 || 'Please enter up to 3 characters only!'
  },
  {
    type: 'input',
    name: 'textColour',
    message: 'Enter the text colour (colour keyword or hex):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColour',
    message: 'Enter the shape colour (colour keyword or hex):'
  }
];
inquirer.prompt(questions).then(answers => {
  let shape;
  // Determines the shape to create based on user choices.
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColour);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColour);
      break;
    case 'square':
      shape = new Square(answers.shapeColour);
      break;
  }
  
  // Generates SVG content
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.toSVG(answers.text, answers.textColour)}
    </svg>
  `;
  
  // Writing the generated SVG to examples folder and logging success message.
  fs.writeFileSync('./examples/logo.svg', svgContent);
  console.log('Congrats! Your logo is now created and saved to the examples folder as logo.svg.');
});

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