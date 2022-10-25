const inquirer = require("inquirer");

// TODO: Add validations

const employeeRole = 
    {
        type: "input",
        name: "rawlist",
        message: "What is the team role of this employee?",
        choices: ["Manager", "Engineer", "Intern"]
    };

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the Manager's ID number?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?"
    },
    {
        type: "number",
        name: "officeNumber",
        message: "What is the Manager's office number?"
    }];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the ID number for this Engineer?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the email address for this Engineer?"
    },
    {
        type: "input",
        name: "gitHubName",
        message: "What is the Engineer's GitHub username?"
    }];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Intern?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the ID number for this Intern?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the email address for this Intern?"
    },
    {
        type: "input",
        name: "school",
        message: "What school does the Intern attend?"
    }];

