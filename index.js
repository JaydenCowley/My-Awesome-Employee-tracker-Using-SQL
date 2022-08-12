import inquirer from "inquirer"

const departments = department.name;
const roles = role.title;
const employees = employees.first_name;

const cTable = require('console.table');
function startPrompt() {
    inquirer.prompt([
     {
        type: 'list',
        message: 'What would you like to do?',
        name: 'option',
        choices: [
            'View all departments', 'view all roles', 'view all employees', new inquirer.Separator('---Add---'), 
            'Add a department', 'add a role', 'add an employee', 'update and employee role',new inquirer.Separator('---view---')]
     }   
    ]).then((answer) => {
        if (answer = 'view all departments') {
            console.table(['Departments'], departments)
        }
        if (answer = 'view all roles') {
            console.table(['Roles'], roles)
        }
        if (answer = 'view all employees') {
            console.table(['Employees'], employees)
        }
    })
}
startPrompt();