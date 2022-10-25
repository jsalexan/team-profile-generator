const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

let totalTeam = [];

function startSurvey() {
 inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your employee?"
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
        
        
    ])

// if they choose Manager, ask Manager question;
// if they choose Engineer, as Engineer question;
// if they choose Intern, as Intern question;
// after each, ask if they'd like to add another employee
// if yes, repeat
// if no, render answers to HTML

// May want to rethink this. We could create a questions page that has the questions for each team member, then in the createTeam function, call the relevent questions based on the first question (ask role first). Which would be best? Think.