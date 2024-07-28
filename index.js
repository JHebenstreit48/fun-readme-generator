// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'

// TODO: Create an array of questions for user input
// const readmeQuestions = [];

inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName'
    },
    {
       type: 'input',
       message: 'What is the what, why, and how description of your project?',
       name: 'projectDescription'
    },
    {
        type: 'input',
        message: 'What are the the step-by-step instructions on how someone can install your project?',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'How can someone else use your project?',
        name: 'usageInstructions'
    },
    {
        type: 'input',
        message: 'What resources were used or who contributed to the project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What tests, commands, or resources were used to test your project?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'Which license was used on your project?',
        name: 'licenseInformation',
        choices: ['MIT', 'GNU GPLv3', 'Rails', 'Apache License 2.0', 'ISC']
    },
    {
        type: 'input',
        message: 'What is your GitHub name?',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'What email address can you be reached at?',
        name: 'emailAddress'
    },
])
// TODO: Create a function to write README file

// .then((answers) => console.log(answers))

.then((answers) => {
    const templateREADME = generateHTML(answers);

fs.writeToFile(`${answers.projectName}.md`, templateREADME, (err) => err ? console.error(err) : console.log('Success!'))

})
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
