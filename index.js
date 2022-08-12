const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DATABASE_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  console.log(`Connected to the employee_db database.`)
);

// const departments = db.department.name;
// const roles = db.role.title;
// const employees = db.employees.first_name;

const cTable = require("console.table");
function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
          "View all departments",
          "view all roles",
          "view all employees",
          // new inquirer.Separator("---Add---"),
          "Add a department",
          "add a role",
          "add an employee",
          "update and employee role",
          "exit",
          //new inquirer.Separator("---view---"),
        ],
      },
    ])
    .then(( answer ) => {
      if ((answer = "View all departments")) {
        viewAllDepartments();
        console.table(["Departments"]);
      }
      //   if ((answer = "view all roles")) {
      //     console.table(["Roles"], roles);
      //   }
      //   if ((answer = "view all employees")) {
      //     console.table(["Employees"], employees);
      //   }
      if ((answer = "Add a department")) {
        addDepartment();
      }
    //   if ((answer = "exit")) {
    //     db.end();
    //   }
    });
}

const viewAllDepartments = () => {
  db.query("SELECT * FROM department", (err, res) => {
    console.table(res);
    startPrompt();
  });
};
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department would you like to add?",
        name: "addDepartmentConfirm"
      }
    ])
    .then(( addDepartmentConfirm ) => {
      //const test = "INSERT INTO department (name) VALUES ? ',('addDepartmentConfirm')"
    //   console.log(test)
        db.query("INSERT INTO department SET name = '"+ (addDepartmentConfirm.addDepartmentConfirm) + "'", function(err, res) {
            console.log(err)
            console.log(addDepartmentConfirm.addDepartmentConfirm)
        });
      console.log("Department has been added");
      viewAllDepartments();
    });
};
startPrompt();
