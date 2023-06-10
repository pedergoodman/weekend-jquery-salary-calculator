$(document).ready(onReady)

let totalAnnualSalary = 0;
let totalMonthlySalary = 0;


function onReady() {
    console.log('hey js & jQ');

    // Listener for submit button
    $('#submit-button').on('click', addEmployee)

    // delegated listener for delete button
    $('#table-body').on('click', '.delete', deleteEmployee)

    // Listen for total monthly cost to go above 20K?
    
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

    // grab form data
    let firstNameValue = $('#input-first-name').val()
    let lastNameValue = $('#input-last-name').val()
    let employeeIdValue = +$('#input-employee-id').val()
    let jobTitleValue = $('#input-job-title').val()
    let annualSalaryValue = +$('#input-salary').val()
    
    // Grab Value Tests
    console.log('firstNameValue is:', firstNameValue);
    console.log('lastNameValue is:', lastNameValue);
    console.log('employeeIdValue is:', employeeIdValue);
    console.log('jobTitleValue is:', jobTitleValue);
    console.log('annualSalaryValue is:', annualSalaryValue);

    $('#table-body').append(`
    <tr>
    <td>${firstNameValue}</td>
    <td>${lastNameValue}</td>
    <td>${employeeIdValue}</td>
    <td>${jobTitleValue}</td>
    <td>$${annualSalaryValue.toLocaleString("en-US")}</td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `)
    
    // store data 
    

    addToMonthly(annualSalaryValue);
    
    //clear form
    $('#input-first-name').val('')
    $('#input-last-name').val('')
    $('#input-employee-id').val('')
    $('#input-job-title').val('')
    $('#input-salary').val('')

}

function deleteEmployee() {
    console.log('inside deleteEmployee');

    let testVal = $(this).closest('tr').get()
    console.log(testVal);


    // removeFromMonthly(.toLocaleNumber())

    $(this).closest('tr').remove()

    
    
    // I want to grab the employee id? 
    // save for later
    // let firstNameValue = $(this).closest(tr).
        // let value = $(this).parent().parent()
        // console.log(value);
}


// CALC for Monthly cost 
function addToMonthly(salaryInput) {
    // take salary input
    console.log('in addToMonthly, value passed is', salaryInput);
    // store in some variables
    totalAnnualSalary += salaryInput
    // calculate total monthly
    totalMonthlySalary = totalAnnualSalary / 12
    // Tests math
    // console.log('totalAnnualSalary', totalAnnualSalary);
    // console.log('totalMonthlySalary', totalMonthlySalary);
    
    // append to DOM
    $('#monthly-cost').text(totalMonthlySalary.toLocaleString("en-US"))

    if (totalMonthlySalary > 20000) {
        $('#monthly-cost').parent().css("background", "red")
    } else {
        $('#monthly-cost').parent().css("background", "default")
    }
}

// needs connection --> removedSalary = Annual Salary data
function removeFromMonthly(removedSalary) {
    console.log('in removeFromMonthly, value passed is:', removedSalary);
    // update variables
    totalAnnualSalary -= removedSalary
    // calculate new total monthly
    totalMonthlySalary = totalAnnualSalary / 12
    // Tests math
    console.log('totalAnnualSalary', totalAnnualSalary);
    console.log('totalMonthlySalary', totalMonthlySalary);
    $('#monthly-cost').text(totalMonthlySalary.toLocaleString("en-US"))

    if (totalMonthlySalary > 20000) {
        $('#monthly-cost').parent().css("background", "red")
    } else {
        $('#monthly-cost').parent().css("background", "default")
    }

}


// while (totalMonthlySalary < 20000) {
//     $('#monthly-cost').css("background-color", "red")
// }