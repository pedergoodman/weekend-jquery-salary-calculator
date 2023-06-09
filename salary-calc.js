$(document).ready(onReady)

function onReady() {
    console.log('hey js & jQ');
    $('#submit-button').on('click', addEmployee)
    // Listener for submit button

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


    
}

