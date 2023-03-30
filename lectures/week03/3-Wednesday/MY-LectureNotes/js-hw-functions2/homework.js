//1. Write a function that takes two numbers as arguments and returns their sum.

// function add(num1, num2){
//     console.log(num1 + num2)
// }
// add (55,11)
// add (-10,42)

//2. Write a function that takes a string as an argument and returns the length of the string.

// let myString = "Hello World";
// function getStringLength(str) {
//     return str.length;
//   }

//   let stringLength = getStringLength(myString);
//   console.log(stringLength);

//3.  Write a function that takes an array of numbers as an argument and returns the average of those numbers.


// function getAverage(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     let average = (sum / numbers.length);
//     return average;
//   }
//   let myNumbers = [1, 2, 3, 4, 5];
//   let average = getAverage(myNumbers);
//   console.log(average);

  //4.  Write a function that takes a number as an argument and returns true if the number is even, and false if it's odd.

//   function isEven(number) {
//     return number % 2 === 0;
//   }
// let myNumber = 28;
// let isNumEven = isEven(myNumber);
// console.log(isNumEven);

//5. Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.

// function capitalizeStrings(strings) {
//     let capitalizedStrings = [];
//     for (let i = 0; i < strings.length; i++) {
//       let capitalizedString = strings[i].toUpperCase();
//       capitalizedStrings.push(capitalizedString);
//     }
//     return capitalizedStrings;
//   }

//   let myStrings = ["hello", "world", "how", "are", "you"];
//   let capitalizedStrings = capitalizeStrings(myStrings);
//   console.log(capitalizedStrings)

  //6. Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.

//   function doubleNumbers(numbers) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//       let doubledNumber = numbers[i] * 2;
//       newArr.push(doubledNumber);
//     }
//     return newArr;
//   }
//   let myNumbers1 = [1, 2, 3, 4, 5];
//   console.log(doubleNumbers(myNumbers1));

  //7.  Write a function that takes a string as an argument and returns true if the string is a palindrome (reads the same backwards and forwards), and false if it's not.

//   function isPalindrome(str){
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
//   }

// let myString1 = "rotator";
// let myString2 = "papa"
// let isMyStringPalindrome1 = isPalindrome(myString1);
// let isMyStringPalindrome2 = isPalindrome(myString2);
// console.log(isMyStringPalindrome1, isMyStringPalindrome2);

//8. Write a function that takes an array of strings as an argument and returns the longest string in the array.

function findLongestString(strings){
    let longestString = "";
    for (let i = 0; i < strings.length; i++){
      let currentString = strings[i];
      if (currentString.length > longestString.length){
        longestString = currentString;
      }
    }
    return longestString;
  }
  let myStrings = ["apple", "banana", "kiwi", "strawberry"];
  let longestString = findLongestString(myStrings);
  console.log(longestString);

  //9.  Write a function that takes an array of numbers as an argument and returns the largest number in the array.

  function findLargestNumber(arr){
    let largestNumber = "";
    for (let i = 0; i < arr.length; i++){
      let currentNumber = arr[i];
      if (currentNumber > largestNumber){
        largestNumber = currentNumber;
      }
    }
    return largestNumber;
  }
  let myNumbers = [6,12,18,24,30];
  let largestNumber = findLargestNumber(myNumbers);
  console.log(largestNumber);

  // 10. Write a function that takes an array of objects (where each object has a "name" and "age" property) as an argument and returns a new array of only the names of people who are older than 18.

  function filterNamesByAge(people){
    let names = [];
    for (let i = 0; i < people.length; i++) {
      let person = people[i];
      if (person.age > 18){
        names.push(person.name);
      }
    }
    return names;
  }

  let people = [{name: "Justin", age: 37},  {name: "Kerri", age: 7},  {name: "Celeste", age: 34},  {name: "Frankie", age: 5}, {name: "Kacie", age: 12}, {name: "Wes", age: 11}];
let names = filterNamesByAge(people);
console.log(names);

