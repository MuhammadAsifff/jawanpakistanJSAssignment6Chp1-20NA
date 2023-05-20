
// JS Assignment 6 (Chp: 1 - 20)




//=============== Chapter 1 (Alerts)==================



// 1. Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password


// var firstName = "Muhammad";
// alert("First Name: " + firstName);


// var lastName = "Asif";
// alert("Last Name: " + lastName);


// var Email = "muhammadasif@gmail.com";
// alert("Email: " + Email);


// var phoneNumber = "03012635557";
// alert("Phone Number: " + phoneNumber);


// var Password = "12345";
// alert("Password: " + Password);









// 2. Correct this statement: alert"You're learning JavaScript!";


// alert("You're learning JavaScript!");









// 3. Code an alert statement displaying any message you like.


// alert("!Alhamdulillah!");


















//=================== Chapter 2 (Variables for string)================


// 1. Declare any variable in the camelCase format.


// let myFavoriteColor = "blue";

// alert(myFavoriteColor);









// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.


// let myVariable;
// myVariable = "Alhamdulillah!";

// alert(myVariable);









// 3. Declare the variable teamName and Alert your Team name.


// let teamName = "Imran Butt, Aamer Jamal, Babar Azam, Muhammad Hurraira, Mubasir Khan, Saim Ayub, Mehran Mumtaz, Shahnawaz Dahani, Haseebullah Khan, Mir Hamza";
// alert("Team Name: " + teamName);









// 4. This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string.


// var bestMan = "Charlie";
// bestMan = "Asif";














//=================== Chapter 3 (Variables for numbers)===========


// 1. Declare a variable “caseQty”


// var caseQty;
 
// or

// let caseQty;

// or

// const caseQty;









// 2. Assign to the variable caseQty, which has already been declared,
// the value 144.


// var caseQty = 144;









// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";

// var num = parseInt("9");









// 4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.


// var result;
// result = 5 + 3;









// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.


// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;

// console.log(orderTotal);









// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.


// var num = 5;
// num = num + 3;

// console.log(num);














//================== Chapter 4 (Variable names Legal and
//     Illegal)===========


// 1. Correct this statement.
// var product cost = 3.45;


// var productCost = 3.45;









// 2. Rewrite this using camelCase.
// var Nameofband;


// var nameofband;









// 3. In a single statement declare a legally-named variable and assign a
// number to it.


// var myNumber = 42;









// 4. Declare a variable that is a combination of your first and last
// names. Use camelCase.

// var firstName = "John";
// var lastName = "Cena";
// var fullName = firstName + lastName;

// console.log(fullName);









// 5. List the legal and Illegal Variables.


// Legal variable names in JavaScript:

// Must start with a letter (a-z, A-Z) or underscore (_).
// Can contain letters, digits (0-9), or underscores (_).
// Can't contain spaces or special characters like !, @, #, $, %, etc.
// Can't be a reserved keyword (e.g., if, for, while, function, etc.).
// Examples of legal variable names:


// var myVariable;
// var _underscoreVariable;
// var number123;
// var camelCase;




// On the other hand, using illegal variable names will result in syntax errors. Here are some examples of illegal variable names:

// Illegal variable names in JavaScript:


// var 123number;   // starts with a digit
// var my-variable; // contains a hyphen
// var my variable; // contains a space
// var var;        // reserved keyword














// ==================Chapter 5 (Math Expression I)===============


// 1. What is the name and symbol of the arithmetic operator that
// gives you the remainder when one number is divided by another?


// var dividend = 17;
// var divisor = 5;
// var remainder = dividend % divisor;

// console.log(remainder);









// 2. What is the value of num?
// var num = 20 % 6;


// Answer = 2









// 3. In a single statement, declare the variable largeNum and assign it
// the result of 1,000 multiplied by 2,000.

// var largeNum = 1000 * 2000;









// 4. Assign to a variable the value represented by one variable
// subtracted from the value represented by another variable


// var variable1 = 10;
// var variable2 = 5;
// var result = variable1 - variable2;









// 5. Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.

// var myRemainder = 17 % 5;









// 6. Code an alert that displays the result of a multiplication on 2
// numbers.


// var number1 = 5;
// var number2 = 7;
// var result = number1 * number2;

// alert("The result of the multiplication is: " + result);














// ===================Chapter 6 (Math Expression II)==============



// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.


// 1.The first expression is using the increment operator ++:

// x++;


// The second expression is using the addition assignment operator +=:


// x += 1;









// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?


// x = x - 1;


// Alternatively, you can use the shorthand form of subtraction assignment:


// x -= 1;









// 3. var x = 50;
// var y = x++;
// What is the value of y?


// var x = 50;
// var y = x++;









// 4. var y = 50;
// var z = --y;
// What is the value of z?


// var y = 50;
// var z = --y;








// 5. In a single statement, decrement num and assign its original value
// to newNum.


// var num = 10;
// var newNum = num--;



// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.


// var num1 = 5;
// var num2 = num1++;









// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert


// var num = 10;
// num++;
// alert("The new value is: " + num);














// ===================Chapter 7 (Math Expression III)===========

// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?


// Let's break down the expression:










// 2 * 6 evaluates to 12.
// Adding 2 to the result, 2 + 12, gives us 14.
// Therefore, the value of calculatedNum is 14.


// Let's break down the expression:

// 2 + 2 evaluates to 4.
// Multiplying 4 by 6, (4) * 6, gives us 24.
// Therefore, the value of calculatedNum is 24.









// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?


// Let's break down the expression:

// 2 + 2 evaluates to 4.
// 4 + 2 evaluates to 6.
// Multiplying 4 by 6, (4) * (6), gives us 24.
// Therefore, the value of calculatedNum is 24.









// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?


// Let's break down the expression:

// 2 + 2 evaluates to 4.
// Multiplying 4 by 4, (4) * 4, gives us 16.
// Adding 2 to the result, 16 + 2, gives us 18.
// Therefore, the value of calculatedNum is 18.









// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.


// var cost = (2 + (2 * 4) + 10);


// Let's break down the expression:

// 2 * 4 evaluates to 8.
// Adding 2 to the result, 2 + 8, gives us 10.
// Adding 10 to the result, 10 + 10, gives us 20.
// Therefore, the value of cost will be 20.









// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.


var units = ((2 + 2) * 4) + 10;


// Let's break down the expression:

// 2 + 2 evaluates to 4.
// Multiplying 4 by 4, (4) * 4, gives us 16.
// Adding 16 to 10, 16 + 10, gives us 26.
// Therefore, the value of units will be 26.









// var pressure = (4 / 2) * 4;


// Let's break down the expression:

// 4 / 2 evaluates to 2.
// Multiplying 2 by 4, (2) * 4, gives us 8.
// Therefore, the value of pressure will be 8.














// ===============Chapter 8 (Concatenating Text
//     Strings)==============


// Strings)
// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.


// The value of num in JavaScript would be "22" (including the quotation marks).

// In this statement, the + operator is used for string concatenation when applied to two strings. Therefore, when the strings "2" and "2" are concatenated, they result in "22".

// So, the value of num will be the string "22" enclosed in quotation marks.









// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement


// var message = "Hello," + "Dolly";
// alert(message);









// 3. alert("33" + 3);
// What message displays in the alert box?



// The message that displays in the alert box when executing the code alert("33" + 3) in JavaScript would be "333".

// The + operator in this case is performing string concatenation because one of the operands is a string ("33"). When you concatenate a string with another value, such as a number, JavaScript converts the non-string value to a string and then concatenates them together.

// In this case, "33" is a string, and 3 is a number. The number 3 gets converted to a string and then concatenated with "33", resulting in "333". Therefore, the message that displays in the alert box would be "333".









// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".


// var part1 = "Pakistan";
// var part2 = "Zindabad";

// alert(part1 + " " + part2);









// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number


// var concatenated = "Hello" + 123;









// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable


// var string1 = "Hello";
// var string2 = "world";

// var concatenatedString = string1 + " " + string2;














// =====================Chapter 9 (Prompts)=========================




// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.


// var firstName = prompt("Enter first name");









// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.


// var country = prompt("Country?", "China");









// 3. Correct this statement
// var yourName = prompt(Enter Your Name");


// var yourName = prompt("Enter Your Name");









// 4. Code a prompt that specifies a string as the message Include a
// default input.


// var userInput = prompt("Please enter your favorite color", "Blue");









// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.


// var message = "Enter your favorite color";
// var defaultResponse = "Blue";

// var userResponse = prompt(message, defaultResponse);









// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.


// var message = "What is your favorite food?";
// var defaultResponse = "Pizza";

// var userResponse = prompt(message, defaultResponse);
// alert("Your favorite food is: " + userResponse);














// =======================Chapter 10 (if statments)=================


// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself


// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City of Lights");
// }









// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.


// if (x === y) {
//     var z = prompt("Please enter the value of z:");
//   }
  








// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")


// if (ZipCode === "10010") {
//     alert("Karachi");
//   } else {
//     alert("Please write correct city");
//   }
  








// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;


// var x = 1;

// if (x === 1) {
//   x = 2;
// }














// =======================Chapter 11 (Comparison
//     Operators)==============

// Operators)
// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)


// if (!(variable1 === variable2)) {
//   }









// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
  

// if (variable1 >= variable2) {
//   }
  








// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.


// var myNumber = 5;

// if (myNumber !== 10) {
//   myNumber = 10;
// }









// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.


// var number1 = 5;
// var number2 = 10;

// if (number1 !== number2) {
//   alert("Congratulations!");
// }









// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"


// var firstName = prompt("Enter your first name:");

// if (firstName !== "John") {
//   alert("No match");
// }









=============Chapter 12 (if…else and else if
    statements)============


//     1. Code an if statement that tests whether the value represented by
//     a variable is greater than or equal to the value represented by
//     another variable. If so, display an alert. If not, display a different
//     alert.


//     var variable1 = 5;
// var variable2 = 3;

// if (variable1 >= variable2) {
//   alert("Variable 1 is greater than or equal to Variable 2");
// } else {
//   alert("Variable 1 is less than Variable 2");
// }



// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)


// var marks = parseFloat(prompt("Enter your marks:"));
// var percentage = (marks / 100) * 100;
// var grade;

// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else {
//   grade = "Fail";
// }

// alert("Your percentage is " + percentage + "% and your grade is " + grade);









// 3. This is the if statement that begins the code.
// if (a === 10) {
//  alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is


// if (a === 10) {
//     alert("a is 10");
//   } else {
//     alert("The correct value of a is " + a);
//   }
  








// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.


// var city = prompt("Enter a city:");

// if (city === "Karachi") {
//   alert("Acknowledging that it is Karachi.");
// } else if (city === "Lahore") {
//   alert("Acknowledging that it is Lahore.");
// } else {
//   alert("City not recognized.");
// }
