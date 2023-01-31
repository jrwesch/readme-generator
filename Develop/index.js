// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
}, {
    type: 'input',
    message: 'Give a description of your project',
    name: 'description'
}, {
    type: 'input',
    message: 'Please provide brief installation instructions...',
    name: 'installation'
}, {
    type: 'input',
    message: 'How is this to be used?',
    name: 'usage'
}, {
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: [

      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
}, {
    type: 'input',
    message: 'How can someone contribute to this project?',
    name: 'contribute'
}, {
    type: 'input',
    message: 'How can someone test this product?',
    name: 'test'
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data,
    (err) => err ? console.error(err) : console.log ('README.md has been generated.'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        readmeContent = generateMarkdown(data);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
