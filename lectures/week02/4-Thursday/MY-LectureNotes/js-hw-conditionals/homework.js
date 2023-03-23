//! DO NOT REMOVE
const prompt = require('prompt-sync')({sigint: true});

// Problem 1 Work or Sleep In Write a script that asks for a day of the week. If the day is a business day, print 'go to work!'. If the day is a weekend day, print 'sleep in!'. If whatever the user entered is not a day, print 'enter a valid day'.

// let day = (prompt("Enter a day of the week: "))
// day=day.toLowerCase()
// switch(day){
//     case "saturday", "sunday":
//         console.log("Sleep in!");
//         break;
//     case "sunday":
//         console.log("Sleep in!");
//         break;
//     case "monday", "tuesday", "wednesday", "thursday", "friday":
//         console.log("Go to work!");
//         break;
//     case "tuesday":
//         console.log("Go to work!");
//         break;
//     case  "wednesday":
//         console.log("Go to work!");
//         break;
//     case "thursday":
//         console.log("Go to work!");
//         break;
//     case "friday":
//         console.log("Go to work!");
//         break;
//     default:
//         console.log("Enter a valid day");
//         break;
// }

// Problem 2 Secret Password Write a script that asks the user for a password. If the user enters the correct word (pick one yourself) then print 'Welcome!', otherwise print 'Try Again!'

// let password = prompt('Enter a password: ')
// if(password!='juice'){
//   console.log("Try again!")
// }
// else if(password == 'juice'){
//     console.log("Welcome!");
//   }

// Problem 3 Write a script that asks the user for a number between 1-7. Print the corresponding day for the number, (i.e. 1 = 'Sunday', 2 = 'Monday' etc). If the input is invalid, print an error message.

// let day1 = Number(prompt('Enter a number (1-7): '))

// switch(day1){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Day is invalid");
// }

// Problem 4 Letter Grade Write a script that asks for a score number between 0-100. Print the corresponding grade for that number. (i.e. <60 = F, <70 = D, <80 = C, <90 = B, 90+ = A). If the input is invalid, print an error message.

// let grade = prompt('Enter a score (0-100): ')

//     if (grade >= 90 && grade <= 100){
//         console.log(`${grade} is an A`)
//     }
//     else if (grade >= 80 && grade <= 89){
//         console.log(`${grade} is a B`)
//     }
//     else if (grade >= 70 && grade <= 79){
//         console.log(`${grade} is a C`);
//     }
//     else if (grade >= 60 && grade <= 69){
//         console.log(`${grade} is a D`);
//     }
//     else if (grade <60){
//         console.log(`${grade} is an F`);
//     }
//     else{
//         console.log("Please enter a valid number: ");
//     }

// Problem 5 Picnic Game Write a script that asks the user for their name. Ask them for the food they are bringing to the picnic. Check if two input strings start with the same letter. If it does, tell them they can come to the party. If it doesn't, tell them to try again.

// let name = prompt('What is your name? ')
// let food = prompt('What food are you bring?')
// if (name.charAt(0) === food.charAt(0)) {
//     console.log("You can come to the party!");
//   } else {
//     console.log("The first characters of the two strings are different.  Therefore, you can't come to the party.  Try again!");
//   }

// Problem 6 Write a javascript script that accepts a parameter username, and checks if the username is valid. A valid username must be longer than 3 characters and less than 18.

// let username = prompt('Enter a username: ')
// if (username.length >= 3 && username.length <= 18){
//     console.log(`${username} is a valid username`);
// }
// else{
//     console.log("Invalid username");
// }

// Problem 7 Odd and Divisible by 3 Write a script that asks the user for a number, then checks if the input number is odd and divisible by 3.

// let number = Number(prompt('Enter a number: '))
// if (number % 2 != 0){
//     console.log(`${number} is odd`)
//   }
// else{
//     console.log(`${number} is not odd`)
// }
// if (number % 3 == 0){
//     console.log(`${number} is divisible by 3`)
//   }
// else{
//     console.log(`${number} is not divisible by 3`)
// }

// Problem 8 Uppercase or Lowercase? Write a program that prompts the user for a letter and checks if it is uppercase or lowercase.

// let letter1 = prompt("Enter a letter:");

// if (letter1 === letter1.toUpperCase()){
//   console.log("The letter is uppercase.");
// }
// else{
//   console.log("The letter is lowercase.");
// }

// Problem 9 Convert Temperature Write a program that prompts the user for a temperature in Fahrenheit and converts it to Celsius.

// let temp1 = Number(prompt('Enter a temperature in Fahrenheit: '))
// let temp2 = (temp1-32)*(5/9)
// let temp3 = temp2.toFixed(2);
// console.log(`${temp1} in fahrenheit converts to ${temp3} in celsius`);

// Problem 10 Tip Calculator
// Your task is to write a program that calculates how much of a tip to leave at a restaurant.

// Prompt the user for two things:

// The total bill amount The level of service, which can be one of the following: good, fair, or bad Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

// // good -> 20% fair -> 15% bad -> 10% Example session:

// let bill = Number(prompt('How much is the bill? '))
// let service = prompt('How was service (good, fair or bad)? ')
// if (service == "good"){
//     let tip = ((bill*(.2)))
//     let finalTip = tip.toFixed(2)
//     console.log(`Tip Amount: $${finalTip}`);
//     let finalBill = Number(bill)+Number(finalTip)
//     console.log(`Total Amount: $${finalBill}`);
// }
// else if(service =="fair"){
//     let tip = ((bill*(.15)))
//     let finalTip = tip.toFixed(2)
//     console.log(`Tip Amount: $${finalTip}`);
//     let finalBill = Number(bill)+Number(finalTip)
//     console.log(`Total Amount: $${finalBill}`);
// }
// else{
//     let tip = ((bill*(.1)))
//     let finalTip = tip.toFixed(2)
//     console.log(`Tip Amount: $${finalTip}`);
//     let finalBill = Number(bill)+Number(finalTip)
//     console.log(`Total Amount: $${finalBill}`);
// }

// Problem 11 Tip Calculator 2 Allow the ability to divide the check into a equal parts amount a number of people. The user will enter the number of people to be divided amongst.

let bill = Number(prompt('How much is the bill? '))
let service = prompt('How was service (good, fair or bad)? ')
let split = Number(prompt("Split how many ways? "))
if (service == "good"){
    let tip = ((bill*(.2)))
    let finalTip = tip.toFixed(2)
    console.log(`Tip Amount: $${finalTip}`);
    let finalbill = Number(bill)+Number(finalTip)
    console.log(`Total Amount: $${finalbill}`);
    let splitbill = Number(finalbill/split)
    console.log(`Amount per person: $${splitbill}`)
}
else if(service =="fair"){
    let tip = ((bill*(.15)))
    let finalTip = tip.toFixed(2)
    console.log(`Tip Amount: $${finalTip}`);
    let finalbill = Number(bill)+Number(finalTip)
    console.log(`Total Amount: $${finalbill}`);
    let splitbill = Number(finalbill/split)
    console.log(`Amount per person: $${splitbill}`)
}
else{
    let tip = ((bill*(.1)))
    let finalTip = tip.toFixed(2)
    console.log(`Tip Amount: $${finalTip}`);
    let finalbill = Number(bill)+Number(finalTip)
    console.log(`Total Amount: $${finalbill}`);
    let splitbill = Number(finalbill/split)
    console.log(`Amount per person: $${splitbill}`)
}
