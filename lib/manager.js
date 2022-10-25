const inquirer = require("inquirer");
const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;       
    }

    getOfficeNumber () {
        return this.officeNumber
    }

    getRole (){
        return "Manager";
    }
};

// Class, extends, constructor, methods
module.exports = Manager;