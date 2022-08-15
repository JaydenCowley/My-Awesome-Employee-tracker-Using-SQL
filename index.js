const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();
// Connecting to the database using the .env variables
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
    // This start prompt is used to decide what the user wants to do
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          // new inquirer.Separator("---Add---"),
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "EXIT",
          //new inquirer.Separator("---view---"),
        ],
      },
    ])
// It then takes the answer from the prompt and depending on the answer it will execute the corisponding function 
    .then((answer) => {
      if (answer.option == "View all departments") {
        viewAllDepartments();
      } else if (answer.option == "View all roles") {
        viewAllRoles();
      } else if (answer.option == "View all employees") {
        viewAllEmployees();
      } else if (answer.option == "Add a department") {
        addDepartment();
      } else if (answer.option == "Add a role") {
        addRole();
      } else if (answer.option == "Add an employee") {
        addEmployee();
      } else if (answer.option == "Update an employee role") {
        updateEmployeeRole();
      } else if (answer.option == "EXIT") {
        db.end();
      } else {
        db.end();
      }
    });
}
// All query functions
const viewAllDepartments = () => {
  db.query("SELECT * FROM department", (err, res) => {
    console.table(res);
    startPrompt();
  });
};
const viewAllRoles = () => {
  db.query("SELECT * FROM role", (err, res) => {
    console.table(res);
    startPrompt();
  });
};
const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", (err, res) => {
    console.table(res);
    console.log(err);
    startPrompt();
  });
};
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department would you like to add?",
        name: "addDepartmentConfirm",
      },
    ])
    .then((answer) => {
      //const test = "INSERT INTO department (name) VALUES ? ',('addDepartmentConfirm')"
      //   console.log(test)
      db.query(
        "INSERT INTO department SET name = '" +
          answer.addDepartmentConfirm +
          "'",
        function (err, res) {
          console.log(err);
          console.log(answer.addDepartmentConfirm);
        }
      );
      console.log("Department has been added");
      viewAllDepartments();
    });
};
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "addRoleConfirm",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO role SET title = '" + answer.addRoleConfirm + "'",
        function (err, res) {
          console.log(err);
          console.log(answer.addRoleConfirm);
        }
      );
      console.log("Role has been added");
      viewAllRoles();
    });
};
const addEmployee = () => {
    // This prompt asks for the first and last name of the new employee
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employees last name?",
        name: "lastName",
      },
    ])
    // then it takes that information and plugs it into a query
    .then((answers) => {
      db.query(
        "INSERT INTO employee(first_name, last_name) VALUES ('" +
          answers.firstName +
          "', '" +
          answers.lastName +
          "')",
        function (err, res) {
          console.log(err);
          console.log(answers.addRoleConfirm);
        }
      );
      console.log("Role has been added");
    //  Then It will print out the employees so you can see you added them to the database
      viewAllEmployees();
    });
};
const updateEmployeeRole = () => {
    // this prompt asks for the employees Id number and for the Role ID you would like to change it to
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Employees ID number",
        name: "employeeIdNum",
      },
      {
        type: "input",
        message: "Enter the NEW Role number for the selected employee",
        name: "updatedRoleNum",
      },
    ])
    // Then it plugs that information into a query statement
   .then((answers) => {
    db.query(
        "UPDATE employee SET role_id = " +
          answers.updatedRoleNum +
          " WHERE id = " +
          answers.employeeIdNum
    );
    console.log("Role has been updated")
    viewAllEmployees();
   })
};
startPrompt();
