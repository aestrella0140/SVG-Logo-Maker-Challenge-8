const inquirer = require("inquirer");

const { writeFile } = require('fs').promises;

const { Triangle, Circle, Square } = require("./lib/shapes.js");

 inquirer
 .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for logo (up to three letters)',
        },
        {
            type: 'list',
            name: 'shapeSelection',
            message: 'Choose shape for logo.',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter background color via name or Hex color.', 
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color via name or Hex color.',
        }
    ])

.then((answers) => {
    let svgInfo;
    // pulling input and render choice to create logo
    if(answers.shapeSelection ==='Circle') {
        svgInfo = new Circle();
        svgInfo.setText(answers.text);
        svgInfo.setColor(answers.color);
        svgInfo.setTextColor(answers.textColor);
    }else if(answers.shapeSelection ==='Triangle') {
        svgInfo = new Triangle();
        svgInfo.setText(answers.text);
        svgInfo.setColor(answers.color);
        svgInfo.setTextColor(answers.textColor);
    }else if(answers.shapeSelection ==='Square') {
        svgInfo = new Square();
        svgInfo.setText(answers.text);
        svgInfo.setColor(answers.color);
        svgInfo.setTextColor(answers.textColor);
    }

writeFile('./examples/logo.svg', svgInfo.render())
.then(() => console.log('Successfully created SVG'))
.catch((err) => console.error(err));
})