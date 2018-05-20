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
let employees = [];

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
    //$('').empty();
    let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(), $('#employeeId').val(), $('#title').val(), $('#annualSalary').val());
    employees.push(newEmployee);
    console.log(employees);
    displayEmployees();
    //create spread of employee info
    //push into an array


} // add Employee
function displayEmployees() {
    console.log("in displayEmployees");
    let el = $('#outputInfo');
    el.empty();
    for (employee of employees) {
        let outputString = '<td>';

        outputString += employee.firstName;
        outputString += '</td>';

        outputString += '<td>';
        outputString += employee.lastName;
        outputString += '</td>';

        outputString += '<td>';
        outputString += employee.employeeId;
        outputString += '</td>';

        outputString += '<td>';
        outputString += employee.title;
        outputString += '</td>';

        outputString += '<td>';
        outputString += employee.annualSalary;
        outputString += '</td>';

        el.append(outputString);

    } // end for
}