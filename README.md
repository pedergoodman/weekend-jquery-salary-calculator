# Project Name

Weekend jQuery salary calculator

## Description

Your project description goes here. What problem did you solve? How did you solve it?


### Input Form
**Goals**
    Add Employee submit form:
    Takes in:
    -- Employee First & Last Name
    -- Employee ID
    -- Job Title
    -- Salary

    The submitted data needs to append to the table below the form.

Grabbing the form data was pretty strait forward from what we learned in class. I used jQuery to grab the values of each form element and assign the data to variables. 
From there I formatted and appended the data to the table. 

I also passed the salary value into a function to calculate the total monthly cost. More on that below.



### Table
**Goals**
within the form there needs to be a delete button, which deletes the entire employee row from the table.

The table was formatted with a <tr> element and several nested <td> elements that accepted the submitted form values. 
the tricky part here was to format the annual salary. 

I used a span element to ensure the '$' would always be there and to make it easier to grab the number value later when deleting rows. To format the number with commas, I used .toLocaleString("en-US"). 

Grabbing salary data within the table was tricky. I used tree traversal to find the <span> element that the salary value was sitting in. But I had to remove the commas and convert the string value to a number again. From there I was able to send it through a removeFromMonthly function. 




### Salary Data 
**Goals**
when adding or removing an employee, their annual salary needs to be 
calculated and added to the total monthly cost
-- added or subtracted from monthly total
-- if the total monthly cost is > $20K highlight totals months red

There are three functions at work here. 
addToMonthly
removeFromMonthly
totalMonthlyBackground

When employee data is added via the form or removed from the table, the resulting action sends the salary value into the corresponding function addTo or removeFrom function here.

addEmployee => addToMonthly
deleteEmployee => removeFromMonthly

The addToMonthly & removeFromMonthly functions simply add or remove from the total annual salary and recalculate the monthly cost. pushing the new value back to the DOM and displaying the new monthly cost number. This is also formatted using .toLocaleString("en-US"). 

after each calculation, added or removed, totalMonthly is passed to totalMonthlyBackground to check if it is > $20K. And it will change the BG property of the of monthly total accordingly. 


### CSS & formatting
**Goals**
good colors, good layout


Here I wanted to have the table formatted in a way that looked good. 
I used the typical table color pattern, bold on top and alternating color rows for the data. 
I rounded the corners to make the table a little sleeker. this actually took a little bit of finagling to get the rounded corners to work properly with the border of the cells.

for both the submit button and the buttons on the table I used :hover to make them more interactive. 

I used a site called Realtime Color to generate a palette for the site. https://realtimecolors.com/?colors=100217-f9f1fe-e8a217-f4e3fc-0e8b61 
Through using I discovered how to use variables with CSS properties with will be SUPER helpful going forward. 

The trickiest part of styling was getting the footer to land at the bottom of the page and then the table to push the footer further down without intersecting it.  





Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
