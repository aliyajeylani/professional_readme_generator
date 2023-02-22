// Added the packages needed for the application to work

const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
const fs = require('fs');


// Created an array to store the questions for the user to answer
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
        choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },


]


//Function will retrieve the response from the user and write to my README file
function writeToFile(file, data) {

    fs.writeFile(file, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success'));

};

//Function to show the questions to the user
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            writeToFile('READMETEST.md', response);
        })
}

init();
