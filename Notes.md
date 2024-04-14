# **GOAL**

**Required**
- ✅Take in information from a form
- (do i need to save it to a database?) save that info to a database
- calculate monthly costs for employees
- If total monthly cost exceeds $20,000, add a red background color to the total monthly cost
- append info to the DOM
- create a delete button that removes line from the DOM
- for the base mode, it doesn't need to remove the Employees salary from reported total

**Stretch**

add extra styling or functionality
-- on empty form flash the fields to submit something
-- individual empty fields flash?
-- over 20K flashes red and settles to a lighter red
-- add comma and $ in salary??

## **Thinking Through**

**Input Data**
- employee first name
- last name
- ID number
- job title
- annual salary

### **Submit button**

1. Collect and store info
   - collects what is in the form fields
   - stores in an object array
     - properties == input data mentioned above
2. Clear input fields
3. calculate monthly costs
   - calculates total monthly costs
     - returns red BG if total monthly is > $20K
4. append returned info to DOM

### **Delete Button**

**Base Functionality**

Delete employee line from DOM

**Stretch**

Once employee is deleted, update the total monthly cost to reflect changes

- \*Figure out which employee was removed

thoughts on how i can build this.

- generic delete button that adds class/id so I can target a line to delete (like the blocks this)
  - using $this to access an element and the content inside?

### **Form - input**

how do input forms work? 😂

### **Form - display/output**

spread sheet style
first row is data names and info
every row below the first row should add a line or remove a line based on the submit/delete buttons

on the bottom is the total employee monthly cost

## Organizing the HTML

header with title

form input section w/ button

// this is what I'm most interested in the structure
output array section
- top is static
- bottom places info in 5 places and generates a button 
- 6 x n

?footer to display monthly total, or dynamically below the array




# Things to wrap up




