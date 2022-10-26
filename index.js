const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const testHTML = require("./testHTML");


let totalTeam = [];

const survey = {
    employeeRole: [
    {
        type: "rawlist",
        name: "role",
        message: "What is the team role of this employee?",
        choices: ["Manager", "Engineer", "Intern"]
    }
     ],

     Manager: [
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
    },
    {
        type: "rawlist",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Yes." , "No, my team is complete."]
    }
],

    Engineer: [
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
    {
        type: "rawlist",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Yes." , "No, my team is complete."]
    }
],

Intern: [
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
    {
        type: "rawlist",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Yes." , "No, my team is complete."]
    }
]
};

function addNewEmployee() {
    inquirer.prompt(survey.employeeRole)
    .then(function(answers){
    console.log(answers.employeeRole);

    if (answers.employeeRole === "Manager") {
        inquirer.prompt(survey.Manager)
        .then(function(answers){
            let newManager = new Manager 
            (
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
            )
        totalTeam.push(newManager);
           
        });
    }  
    if (answers.employeeRole === "Engineer") {
        inquirer.prompt(survey.Engineer)
        .then(function(answers){
            let newEngineer = Engineer 
            (
                answers.name,
                answers.id,
                answers.email,
                answers.gitHubName
            );
            totalTeam.push(newEngineer);
        if (answers.addEmployee === "Yes.") {
            addNewEmployee();
        } else {
            makeProfile();
        }                  
        });
    
    } else if (answers.employeeRole === "Intern") {
        inquirer.prompt(survey.Intern)
        .then(function(answers){
            let newIntern = Intern 
            (
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
            totalTeam.push(newIntern);
        if (answers.addEmployee == "Yes.") {
            addNewEmployee();
        } else {
            makeProfile();
        }                  
        });
    };
    
function makeProfile() {
    const page = testHTML(totalTeam)
    console.log("Here's your page!", page)
    fs.writeFile("./dist/myTeam.html", page, (err) => {
        if (err) console.log("Couldn't create file.", err)
    }
    )
}
})}    
addNewEmployee();


