const prompt = require('prompt-sync')({signint: true}); //need this more setup

let firstName = prompt("What is your name? ")
console.log(firstName);

let bikeAge = prompt("How old were when you learned to ride a bike? ")
bikeAge = Number(bikeAge);
console.log(typeof(bikeAge));
// const widthOfSquare = 10; //Camel Case - upperCase lowerCase camelCase - const = constant


// // // // // let pi = 3.14; // let is a block scoped variable

// console.log(pi)

// // // // // pi = 3.0; //reassigning the value of pie

// // // // // // console.log(pi)

// // // // // printing

// // // // let a = 5.1;  //integer

// // // // console.log(5) // or
// // // // console.log(a)

// // // // //Defining a String

// // // // // "Hello World"
// // // // // 'Hello World'
// // // // // `Hello World`
// // // // "5" //Number with quotes is a string

// // // // let firstName = "Veronica"
// // // // console.log("Veronica")
// // // // console.log(firstName)

// // // // //data type
// // // //     //strings
// // // //     //numbers (integers, real numbers)
// // // //     //boolean

// // // // // Math

// // // //     let b = 5;
// // // //     let c = 99;

// // // //     let answer = b + c;
// // // //     //variable substituion - value of b + c will be assigned to 'answer'

// // // //     console.log(answer) // The answer is 14
// // // //     console.log("The answer is", answer)
// // // // //string interpolation
// // // // console.log(`The answer is ${answer}`)

// // // // //Create a string using string interpolation that says "Hello, my last name is [lastName]"
// // // // //where [lastName] is a variable containing a person's last name.

// // // // let lastName = "Anzalone"
// // // // console.log(`Hello, my last name is ${lastName}`)

// // // // //string with multiple lines

// // // // //Create 2 Variables city and age
// // // // //Create a string that says: "I live in [city] and I am [age] years old"

// // // // let city = "Buckeye";
// // // // let age = 37;

// // // // console.log(`I live in ${city} and I am ${age} years old`)


// // // // //Create a string using string interpolation that says "The sum of [num1] and [num2] is [sum]" where [num1] and [num2] are variables containing
// // // // //numbers and [sum] is their sum.

// // // // let num1 = 10;
// // // // let num2 = 22;
// // // // let sum = num1+num2;

// // // // console.log(`The sum of ${num1} and ${num2} is ${sum}.`)

// // // // //escape characters \n \t

// // // // console.log(`text`)

// // // // //String Concatenation

// // // // let firstName1 = "Justin"
// // // // let lastName1 = "Anzalone"

// // // // let myName1 = firstName1+lastName1;

// // // // console.log(myName1)

// // // // // Casting converting one dataType to another dataType
// // // // // string => number => string boolean

// // // let a = 3
// // // let b = "3"
// // // let c = parseInt(b)
// // // let sum2 = a + c

// // // let b_num = Number(b) //casting from string to an integer
// // // console.log(b_num);
// // // console.log(typeof(b_num));

// // // //? Casting from integer to string
// // // let b_num2 = Number("a") //error NAN (not a number)
// // // console.log(b_num2);

// // // //? Casting from integer to string

// // // let some_int = 5;
// // // let some_int_string = some_int.toString()
// // // console.log(some_int_string);
// // // console.log(typeof(some_int_string));

// // //? Math with JavaScript

// // let x = 10
// // let y = 3


// // // console.log(x+y); //addition
// // // console.log(x/y); //?division
// // // console.log(x-y); //subtraction
// // // console.log(x*y); //?multiplication

// // // let total = x * (9+5) / y

// // // console.log(total);

// // let modulus = x%y
// // console.log(modulus);

// let x = -89;
// Math.abs(x)
// let result = Math.abs(x);
// console.log(result);

// let e = 2.72
// result = Math.round(e)
// result = Math.floor(e)
// result = Math.pow(2,5)
// console.log(result);

// //?boolean
// // true 1
// // false 0

// // result = (true+true)
// // console.log(result);

// // let ifValid = true;
// // console.log(typeof(ifValid));
