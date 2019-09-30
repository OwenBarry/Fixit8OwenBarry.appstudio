/*
Create a function named Calculate 
that takes 2 parameters , 
adds them together, and 
returns the answer to the program where it is 
stored in a variable named 'summedNumbers'. 
In the main program, get two numbers from the user, 
then call the function with the two numbers. 
Output this to the console:

The sum of X and Y is Z.     
(where X  and Y come from the user, 
and Z is the sum  from the function). 
*/

function calculate(num1, num2) {
  let summedNumbers = num1 + num2
  return summedNumbers; 
}
// main program
let num1 = Number(prompt("enter a number to represent X"))
let num2  = Number(prompt("enter a number to represent Y"))
alert(`The sum of X and Y is ${calculate(num1, num2)}`);
var people = ["Bob", "Janet", "Tom", "Bob", "Randy", "Elizabeth", "Kim", "Nancy"];
for (i = 0; i < people.length; i++) {
  alert(people[i])
}
var i = Number(prompt("Enter a number between 1 and 10"));
while (i < 10) {
  alert(`This is loop iteration ${i}.`)
  i++;
}
alert("The loop is now done.")