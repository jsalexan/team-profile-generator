const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { createHTML, finalTeamPage, createManager, createEngineer, createIntern, cards } = require("./renderHTML");


let totalTeam = [];

function addManager() {
    inquirer.prompt ([ 
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
    }
])
        .then(function(answers){
            let newManager = new Manager 
            (
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
            )
            totalTeam.push(newManager);
            addNewEmployee();
            });
};

function addEngineer() {
    inquirer.prompt ([ 
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
    },
])
    .then(function(answers){
        let newEngineer = new Engineer
        (
        answers.name,
        answers.id,
        answers.email,
        answers.gitHubName
        )
        totalTeam.push(newEngineer);
        addNewEmployee();
        });
};

function addIntern() {
    inquirer.prompt ([ 
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
    },
])
        .then(function(answers){
            let newIntern = new Intern
            (
            answers.name,
            answers.id,
            answers.email,
            answers.school
            )
            totalTeam.push(newIntern);
            addNewEmployee();
            });
};

function makeProfile() {
    const data = createHTML(totalTeam);
    const page = finalTeamPage(cards);
    console.log("Here's your page!", totalTeam)
    fs.writeFile("./dist/myTeam.html", page, data, (err) => {
        if (err) console.log("Couldn't create file.", err)
    }
    )
};


function addNewEmployee() {
    inquirer.prompt([
        {
        type: "rawlist",
        name: "role",
        message: "Would you like to add an employee to your team?",
        choices: ["Manager", "Engineer", "Intern", "My team is complete!"]
    }
    ])
    .then(function(answers){
        switch (answers.role) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                makeProfile();
        }
    })
}; 
    
  

addNewEmployee();


