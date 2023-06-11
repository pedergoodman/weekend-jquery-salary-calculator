$(document).ready(onReady);

let totalAnnualSalary = 0;
let totalMonthlySalary = 0;

function onReady() {
  //   console.log("hey js & jQ");

  // Listener for submit button
  $("#submit-button").on("click", addEmployee);

  // delegated listener for delete button
  $("#table-body").on("click", ".delete", deleteEmployee);
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
  let firstNameValue = $("#input-first-name").val();
  let lastNameValue = $("#input-last-name").val();
  let employeeIdValue = +$("#input-employee-id").val();
  let jobTitleValue = $("#input-job-title").val();
  let annualSalaryValue = +$("#input-salary").val();

  // Grab Value Tests
  //   console.log("firstNameValue is:", firstNameValue);
  //   console.log("lastNameValue is:", lastNameValue);
  //   console.log("employeeIdValue is:", employeeIdValue);
  //   console.log("jobTitleValue is:", jobTitleValue);
  //   console.log("annualSalaryValue is:", annualSalaryValue);

  $("#table-body").append(`
    <tr>
    <td class="left-justified">${firstNameValue}</td>
    <td class="left-justified">${lastNameValue}</td>
    <td class="left-justified">${employeeIdValue}</td>
    <td class="left-justified">${jobTitleValue}</td>
    <td class="right-justified">$<span class="table-salary">${annualSalaryValue.toLocaleString(
      "en-US"
    )}</span></td>
    <td class="center-justified"><button class="delete">Delete</button></td>
    </tr>
    `);
  // for got to add the class here for my testing....
  
  
  
  
  
  
  // store data??
  addToMonthly(annualSalaryValue);

  //clear form
  $("#input-first-name").val("");
  $("#input-last-name").val("");
  $("#input-employee-id").val("");
  $("#input-job-title").val("");
  $("#input-salary").val("");
} // end addEmployee

function deleteEmployee() {
  console.log("inside deleteEmployee");

  let testVal = $(this).closest("tr").find(".table-salary").text();

  testVal = parseFloat(testVal.replace(/\,/g, ""));
  console.log(testVal);
  // trying to understand what's happening with replace
  // because it looks funny even though it works
  // "/" to select a character, "\," excape to get a comma,
  // " /g, '' " to set to global change and what to change to

  removeFromMonthly(testVal);

  $(this).closest("tr").remove();

  // I want to grab the employee id?
  // save for later
  // let firstNameValue = $(this).closest(tr).
  // let value = $(this).parent().parent()
  // console.log(value);
} // end deleteEmployee

// CALC for Monthly cost, input pulled from form
function addToMonthly(salaryInput) {
  // store in some variables
  totalAnnualSalary += salaryInput;
  // calculate total monthly
  totalMonthlySalary = totalAnnualSalary / 12;

  // Tests
  //console.log("addToMonthly, value passed:", salaryInput);
  // console.log('totalAnnualSalary', totalAnnualSalary);
  // console.log('totalMonthlySalary', totalMonthlySalary);

  // append to DOM
  $("#monthly-cost").text(totalMonthlySalary.toLocaleString("en-US"));

  // checks if totalMonthlySalary > 20K
  totalMonthlyBackground();
} // end addToMonthly

// CALC needs connection --> removedSalary = Annual Salary data
function removeFromMonthly(removedSalary) {
  console.log("in removeFromMonthly, value passed is:", removedSalary);
  // update variables
  totalAnnualSalary -= removedSalary;
  // calculate new total monthly
  totalMonthlySalary = totalAnnualSalary / 12;
  // Tests
  console.log("totalAnnualSalary", totalAnnualSalary);
  console.log("totalMonthlySalary", totalMonthlySalary);
  $("#monthly-cost").text(totalMonthlySalary.toLocaleString("en-US"));

  // checks if totalMonthlySalary > 20K
  totalMonthlyBackground();
} // end removeFromMonthly

// checks if totalMonthlySalary > 20K
function totalMonthlyBackground() {
  if (totalMonthlySalary > 20000) {
    // if greater than 20K, highlight red
    console.log('changed bg to "red"');
    $("#monthly-cost").parent().css("background", "red");
  } else {
    console.log('changed bg to "green"');
    $("#monthly-cost").parent().css("background", "var(--background)");
  }
} // end totalMonthlyBackground
