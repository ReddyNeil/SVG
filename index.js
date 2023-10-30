// Required libraries and modules
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