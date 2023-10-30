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
    validate: input => input.length <= 3 || 'Please enter 3 characters only.'
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

module.exports = { Circle, Square, Triangle };