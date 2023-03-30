// //1. Write a function called "greeting" that prints "hello world" to the console

// function greeting(){
//     console.log("Hello World");
// }

// //2.  Execute (call/ run) the "greeting function"

// greeting()

// //3. Reduce this code using functions

// function students(){
//     console.log("");
//     console.log("Students in attendance:");
//     console.log("Shu")
//     console.log("Thomas")
//     console.log("Gustavo")
//     console.log("Alim")
//     console.log("");
// }

// console.log("Day 1: Students in SRE class")
// console.log("lecture: git 101")
// students()
// console.log("Day 2: Students in SRE class")
// console.log("lecture: git 102")
// students()
// console.log("Day 3: Students in SRE class")
// console.log("lecture: python 101")
// students()

//5. Nested Functions Write a function called difference that takes in two parameters and returns the difference between the two.

// function difference(num1, num2){
// return (num1 - num2)
// }

// console.log(difference (2,2))
// console.log(difference (0,2))

//6. Write a function called product that takes in two parameters and returns the product between of the two.

// function product(num1, num2){
//     return (num1 * num2)
//     }

//     console.log(product (2,2))
//     console.log(product (0,2))

//7.  Write a function called print_day that takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return None

// function printDay(dayNum) {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     if (dayNum >= 1 && dayNum <= 7) {
//       return days[dayNum - 1];
//     } else {
//       return "None";
//     }
//   }

//   console.log(printDay(4))
//   console.log(printDay(41))

//8.  Write a function called lastElement that takes in one parameter (an array) and returns the last value in the array. It should return Undefined if the list is empty.

function lastElement(arr){
    if (arr.length === 0){
      return "undefined";
    } else{
      return arr[arr.length - 1];
    }
  }

  console.log(lastElement([1,2,3,4]));
  console.log(lastElement([]));

  //9.   Create a function that creates the following recommendation letter. The Parameters for the functions should be the first and last name person you are recommending

  function recLetter(firstName, lastName){
    let letter = `Karen Jones
     1234 Park St
     Anytown, Pennsylvania 12345

    April 14, 2019

    ABC College Admission's Board 1234 Butler Ave Everywhere, CA 12345

    Dear ABC College Admission's Board:

    My name is Karen Jones. I have served as a science teacher at Parktown High School for the past fifteen years and have had the privilege to serve as ${firstName} ${lastName}'s teacher for the past three. I have also been ${firstName}'s advisor on the science academic team here at school. Due to his qualifications, I feel that ${firstName} would be an excellent addition to your school.

    While he has been a student here, ${firstName} has always challenged himself academically, taking all of the AP courses that our school has to offer. He has been captain of the academic team for the past two years, showing strong leadership qualities and organizational skills. His superior written and verbal skills have far surpassed any student of his age.

    ${firstName} would bring much to your school, both in and out of the classroom. If you have any questions regarding ${firstName}'s qualifications, please contact me at (123) 555-5555 or at Karen.Jones@email.com.

    Sincerely,

    Karen Jones Science Department Head Park Town High School`;

    return letter;
}

console.log(recLetter("Ryan", "Thomas"));
