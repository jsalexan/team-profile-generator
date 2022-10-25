const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const testHTML = require("./testHTML");

let totalTeam = [];

// function addNewEmployee() {
//  inquirer
//     .prompt(employeeRole)
//     .then (data => {

//         if (data.employeeRole == "Manager") {
//             inquirer.prompt(managerQuestions)
//             .then(data => {
//                 const manager = new Manager
//                 (
//                 data.name,
//                 data.id,
//                 data.email,
//                 data.officeNumber
//                 );

//                 totalTeam.push(manager);
//                 if (data.addEmployee) == "Yes." {
//                     addNewEmployee();
//                 } else {
                    
//                 }

//             }
//         }
//     })
       
// }
// if they choose Manager, ask Manager question;
// if they choose Engineer, as Engineer question;
// if they choose Intern, as Intern question;
// after each, ask if they'd like to add another employee
// if yes, repeat
// if no, render answers to HTML

// May want to rethink this. We could create a questions page that has the questions for each team member, then in the createTeam function, call the relevent questions based on the first question (ask role first). Which would be best? 
const testFunction = () => {
    inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "What is the Manager's name?"
},

{
    type: "input",
    name: "id",
    message: "What is the Manager's ID number?"
}
])
    .then(function(testAnswers){
        console.log(testAnswers)
        let newManager = new Manager (
            testAnswers.name,
            testAnswers.id
        )
        totalTeam.push(newManager)
        console.log(totalTeam)
        makeProfile();
    })
};


function makeProfile() {
    const page = testHTML(totalTeam)
    console.log("Here's your page!", page)
    fs.writeFile("./dist/myTeam.html", page, (err) => {
        if (err) console.log("Couldn't creat file.", err)
    }
    )
}

testFunction();


// const employeeRole = 
//     {
//         type: "input",
//         name: "rawlist",
//         message: "What is the team role of this employee?",
//         choices: ["Manager", "Engineer", "Intern"]
//     };

// const managerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the Manager's name?"
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is the Manager's ID number?"
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "What is the Manager's email address?"
//     },
//     {
//         type: "number",
//         name: "officeNumber",
//         message: "What is the Manager's office number?"
//     },
//     {
//         type: "rawlist",
//         name: "addEmployee",
//         message: "Would you like to add another employee?",
//         choices: ["Yes.", "No."]
//     }
// ];

// const engineerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the Engineer's name?"
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is the ID number for this Engineer?"
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "What is the email address for this Engineer?"
//     },
//     {
//         type: "input",
//         name: "gitHubName",
//         message: "What is the Engineer's GitHub username?"
//     },
//     {
//         type: "rawlist",
//         name: "addEmployee",
//         message: "Would you like to add another employee?",
//         choices: ["Yes.", "No."]
//     }
// ];

// const internQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the name of this Intern?"
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is the ID number for this Intern?"
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "What is the email address for this Intern?"
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What school does the Intern attend?"
//     },
//     {
//         type: "rawlist",
//         name: "addEmployee",
//         message: "Would you like to add another employee?",
//         choices: ["Yes.", "No."]
//     }
// ];
