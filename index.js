// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',

    },
    {
        type: 'input',
        message: "Provide a short description explaining the what, why, and how of your project: ",
        name: 'description',

    },
    {
        type: 'input',
        message: "What are the steps require to install your project?",
        name: 'installation',

    },
    {
        type: 'input',
        message: "Provide instruction and example for use:",
        name: 'usage',

    },
    {
        type: 'input',
        message: "List your collaborators or third-party assets used for this project:",
        name: 'credits',

    },
    {
        type: 'input',
        message: "What are the test instsructions for you application?",
        name: 'test',

    },
    {
        type: 'list',
        message: "What is your license type?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license',


    },

]


// TODO: Create a function to write README file
function writeToFile(file, data) {

    fs.writeFile(file, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success'));

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            writeToFile('README.md', response);
        })
}

// Function call to initialize app
init();
