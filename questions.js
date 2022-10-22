const inquirer = require("inquirer");


// List of questions for everyone entered.
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the ID number for this employee?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the email address for this employee?"
    },

    {
        type: "input",
        name: "rawlist",
        message: "What is the team role of this employee?",
        choices: ["Manager", "Engineer", "Intern"]
    },

]
   