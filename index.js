import inquirer from "inquirer"

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
    ])
}
startPrompt();