console.log('in JS');

$(document).ready(readyNow);
class Employee {
    constructor(firstName, lastName, employeeId, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.title = title;
        this.annualSalary = annualSalary;

    }
}

function readyNow() {
    console.log('JQ');

    $('#addButton').on('click', addEmployee);

}

// add on click even for each button
// populate into a row 
// create employee object with variables of the buttons
//create a function that calculates the total salaries of the employees
function addEmployee() {
    console.log('In addEmployee');
    let newEmployee = new Employee('ffff', 'dfsd', 445, 'mand', 45354);
    console.log(newEmployee);
    //get user input
    //create spread of employee info
    //push into an array


} // add Employee