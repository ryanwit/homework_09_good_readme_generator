var fs  = require("fs");
var inquirer = require("inquirer");
var path = require("path");
var generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github User Name?",
        name: "username"

    },
    {
        type: "input",
        message: "What is your Email Address?",
        name: "userEmail"
    },
    {
        type: "input",
        message: "What is your Project Name?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please provide a short description of your project?",
        name: "userProject"
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "userLicense",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "userInstDepend"
        
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "userRunTests"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "userRepo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "userConRepo"
    },

];


    


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(),fileName),data)
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("writing to file");
        writeToFile("exampleReadMe.md", generateMarkdown({...response}))
    });

};
// function call to initialize program
init();
