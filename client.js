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

    let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(), $('#employeeId').val(), $('#title').val(), $('#annualSalary').val());
    employees.push(newEmployee);
    console.log(employees);
    displayEmployees();
    calculateSalary();


    $('#firstName').val(''), $('#lastName').val(''), $('#employeeId').val(''), $('#title').val(''), $('#annualSalary').val('');



} // add Employee

function displayEmployees() {
    console.log("in displayEmployees");
    let el = $('#outputInfo');
    el.empty();

    for (let employee of employees) {

        let outputString = '<tr class="table-dark">';
        outputString += '<td>' + employee.firstName + '</td>' + '<td>' + employee.lastName + '</td>' + '<td>' + employee.employeeId + '</td>' + '<td>' + employee.title + '</td>' + '<td class="yearCash" >' + employee.annualSalary + '</td>' + '</tr>';
        el.append(outputString);




    } // end for
}

function calculateSalary() {
    let sum = 0;
    $('#span').empty();
    for (let salary of employees) {
        sum += (salary.annualSalary / 12);
    } //end for 
    let num = sum.toFixed(2);
    $('#span').append(num);
    if (num > 20000) {
        $('#span').css("background-color", "red");
    } else {
        $('#span').css("background-color", '#518282');
    } // end if/else
} // end calculateSalary



//A 'Submit' button should collect the form information, store the information 
//to calculate monthly costs, append information to the DOM and clear the input 
//fields. Using the stored information, calculate monthly costs and append this 
//to the to DOM. If the total monthly cost exceeds $20,000, add a red background
//color to the total monthly cost.