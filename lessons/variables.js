/* 
Variables:

Variables are used to store information that we can later rreference by recalling the variables name. 
Anytime you create a variable it is  creating a memory slot for us to reference.

Math Class Example:

x= 10

x + 5 = ?

*/

// ! Rules of naming variables
/* 
- Names can containe letters, numbers, underscores, and dollar signs.
-Names must begin with non-numeric
-Names are case sensitive (shoppingCart and shoppingcart are different)
-Reserved words can NOT be used (class, let, const, var)

*/

//! Cassing of Variables 
/* 
camelCase - you will lowercase the first letter of first word, uppercase first letter of each following word. (exampleNameUsed) 

PascalCasing -  every first letter is capitalized
-mostly used for classes

SNAKE_CASE - all caps + underscore btwn words
-used for constants or general settings
-DEVELOPER_API_URL
*/

// ! There are 3 ways to declare variables [var, let, const]

// prettier-ignore
    let             firstName = "Jason"
//  (1)                (2)    (3)  (4)
/* 
1) JS Keyword that denotes the creation of a variable

2) The name of the variable that the developer will reference 
in order to used the value that is stored.

3) Assignment Operator

4) Initial Value

*/

console.log("First Name", firstName)

// ! VAriables are case sensitive
/* 
If your code breaks the rest of your code after the break will not execute.
*/
//console.log("First Name", firstname)

console.log("Hello World")

// ! Variable Reassigment 
/* 
-You do not need to reinitialize the variable with a let or a var
- Only the variable name followed by the assignment operator and the value that you want to assign to it is needed

*/

// ! Important Note: ONLY VAR and LET will allow you to reassign.

firstName = "Mary"

console.log("First Name Changed", firstName)

// ! Const Example: 

const stateTax = 0.03;
// stateTax = 0.04; we get an error because cant reassign values to const

// ? 1) Create a variable to store the last name of someone
// ? 2) Reassign that variable to another last name
// ? 3) Make sure you console log as you go

let lastName = "Howard"
console.log("Last Name:", lastName)
lastName = "Johnson"
console.log("New Last Name:", lastName)

// ! When coming up with variable names avoid single letters

const seconds = 60;
const minutes = 60;
const hours = 24;
let totalSeconds = seconds * minutes * hours

console.log("Total seconds in a day:", totalSeconds);
