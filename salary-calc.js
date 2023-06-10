$(document).ready(onReady)

function onReady() {
    console.log('hey js & jQ');

    // Listener for submit button
    $('#submit-button').on('click', addEmployee)

    // delegated listener for delete button
    $('#table-body').on('click', '.delete', deleteEmployee)
}



// Event handler for Submit button
    // What it actually does
        // take each form input 
        // store in variable
        // write and append to table element
        // send off numbers to math function
        // clear form
function addEmployee(event) {
    // event prevent
    event.preventDefault();
    // console.log("inside addEmployee");
    // capture form data
    let firstNameValue = $('#input-first-name').val()
    let lastNameValue = $('#input-last-name').val()
    let employeeIdValue = $('#input-employee-id').val()
    let jobTitleValue = $('#input-job-title').val()
    let annualSalaryValue = $('#input-salary').val()

    console.log('firstNameValue is:', firstNameValue);
    console.log('lastNameValue is:', lastNameValue);
    console.log('employeeIdValue is:', employeeIdValue);
    console.log('jobTitleValue is:', jobTitleValue);
    console.log('annualSalaryValue is:', annualSalaryValue);

    // todo
    // send values to array

}

function deleteEmployee() {
    console.log('inside deleteEmployee');

    // I want to grab the employee id? 




}



// 