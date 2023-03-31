
let covidData = require('./data');

/**
 * Print the follwoing for each state and territory
 *
 * 1. State Name
 * 2. State Population
 * 3. Number of Cases
 * 4. Number of Deaths
 *
 *
 * Find the following
 * 1. Total (sum) of all the cases for each state and territory
 * 2. Which state or territory had the highest number of cases
 * 3. Which state or territory had the higheest number of deaths
 * 4. Lowest state or territory for deaths
 * 5. Lowest state or territyor for cases
 */

//1. State Name

// let stateName = [];

// for (let i=0; i < covidData.length; i++){
//  console.log(stateName.push(covidData[i])
    statePop.push(covidData[i].population);
// }
// console.log(stateName);

// //2.  State Population

// let statePop = [];

// for (let i=0; i < covidData.length; i++){
//   statePop.push(covidData[i].population);
// }
// console.log(statePop);

// //3. Number of cases

// let numCases = [];

// for (let i=0; i < covidData.length; i++){
//   numCases.push(covidData[i].cases);
// }
// console.log(numCases);

// //4. Number of Deaths

// let numDeaths = [];

// for (let i=0; i < covidData.length; i++){
//   numDeaths.push(covidData[i].deaths);
// }
// console.log(numDeaths);


//1. Total (sum) of all the cases for each state and territory

//? sum of cases

// let sum = 0;

// for(let object of covidData){
//     sum += object.cases;
// }

// console.log(sum);

//? sum of deaths

let totalCases = 0
let totalDeaths = 0;
for(let i = 0; i < data.length; i++){
    console.log(`State: ${data[i].state}`)
    console.log(`Population: ${data[i].population}`)
    console.log(`Cases: ${data[i].cases}`)
    console.log(`Deaths: ${data[i].deaths}`)
    totalCases += data[i].cases
    console.log(`Total Cases: ${totalCases}`);
    totalDeaths += data[i].deaths
    console.log(`Total Deaths: ${totalDeaths}`);
    console.log('-------------------------------');
}
console.log('------------------------------------------');
// MEGA LOOP

console.log(sum);
//2. Which state or territory had the higheest number of cases

//3. Which state or territory had the higheest number of deaths
function highest(covidData){
    let largestNumber = "";
    for (let i = 0; i < covidData.length; i++){
      let currentNumber = covidData[i];
      if (currentNumber > largestNumber){
        largestNumber = currentNumber;
      }
    }
    return largestNumber;
  }
  let largestNumber = highest(covidData);
  console.log(largestNumber);
