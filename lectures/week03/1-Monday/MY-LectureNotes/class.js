let day1 = "Sunday"
let day2 = "Monday"
let day3 = "Tuesday"
let day4 = "Wednesday"
let day5 = "Thursday"
let day6 = "Friday"
let day7 = "Saturday"

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// console.log(days[3]);

// let myArr = [3,6,5,4,2];
// console.log(myArr[3]);

// console.log(`myArr length ${myArr.length}`)
// console.log(`days length ${days.length}`)

// CRUD - create, read, update, delete

// update a value inside of myArr

// myArr[1] = 99;
// console.log(myArr);

//? list of numbers - add items to an array (push)

// let nums = []
// nums.push(45)
// nums.push("Hello")
// nums.push(true)
// nums.push([1, 2, 3, 4])
// console.log(nums);

//? unshift to append to beginning of an array (unshift)

// let nums = [4, 5, 6, 7]
// console.log(nums);
// nums.unshift(3);
// nums.unshift(2);
// nums.unshift(1);
// nums.unshift(1);
// nums.unshift(0);
// console.log(nums);


//to-do list


// let animals = ["dog", "cat", "rabbit", "horse", "pig"]
// console.log(animals);
// for(let index = 0; index<animals.length;index++){ //animals[0],1,2, etc.
//     // console.log(animals[index]);
//     console.log(`${index + 1}. ${animals[index]}`);
// }


// //? pop()

// // let lottoNums = [23, 11, 43, 19, 37, 16];
// // lottoNums.pop();  // removes from end of list
// // lottoNums.shift(); // removes from beggining of list


// // //? splicing - mutates old array
// // let lottoNums = [23, 11, 43, 19, 37, 16];
// // lottoNums.splice(2, 2);  // [23, 11, 37, 16]
// // console.log(lottoNums);

// //? slicing
// let lottoNums = [23, 11, 43, 19, 37, 16];
// let newLottoNums = lottoNums.slice(2, 5) // not inclusive, have to declare a new variable
// console.log(lottoNums);
// console.log(newLottoNums);

// let myBootcamp = "Digital Crafts"
// myBootcamp[0] = "d"
// console.log(myBootcamp);

// for(let i = 0; i < myBootcamp.length; i++){
// console.log(myBootcamp[i]);
// }

// let newBootcamp = myBootcamp.split('')
// console.log(newBootcamp);
// myBootcamp = newBootcamp.join('*')
// console.log(newBootcamp);

//? Multi-Dimensional Arrays

// let multi = [2, 3, true, [4, 5, 6]]
// console.log(multi[3][2]);
// console.log(multi[3]);

let rows = [ [2, 4, 6, 8 ], [ 1, 3, 5, 7 ], [ 8, 6, 4, 2 ], [ 7, 5, 3, 1 ] ]


// rows[0]
// console.log(rows[0][3]);

// for(let outerIndex = 0; outerIndex < rows.length; outerIndex++){
//     let arrElement = rows[outerIndex]
//     for (let innerIndex = 0; innerIndex < arrElement.length; innerIndex++){
//         console.log(rows[outerIndex][innerIndex]);
//     }
// }

// let a = 4;
// let b = a;

// a = 5;
// // console.log(a); //
// // console.log(b);

// let arrA = [1, 2, 3, 4]
// let arrB = arrA

// arrA.push(99);

// console.log(arrA);
// console.log(arrB);

// pass by reference vs pass by value
// c/c++

//? Multi Dimension array with while loop

// let outerIndex = 0;
// let innerIndex = 0;

// while (outerIndex < rows.length){
//     let arrElement = rows[outerIndex]
//     while(innerIndex < arrElement.length){
//     console.log(rows[outerIndex][innerIndex]);
//     innerIndex++;
//     }
// outerIndex++;
// innerIndex = 0;
// }

for (let arrVal of rows){
    for (let innerVal of arrVal){
        console.log(innerVal);
    }
}
