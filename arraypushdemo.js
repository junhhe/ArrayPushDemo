//build an arrray that stores first & last names. The default value of the array will be empty.
var firstNames = [];
var lastName =[];
//ask user for a first name, and store it in the first names array.
var first= prompt("Enter a name");
firstNames.push(first);
//Ask user for a Last name, and store it in the Last names array.
var last = prompt("Enter a lastName")
lastName.push(last);
//display to the window both first and Last name from the array with the Length of the both arrays
window.alert(firstNames + lastName + firstNames.length + lastName.length);
