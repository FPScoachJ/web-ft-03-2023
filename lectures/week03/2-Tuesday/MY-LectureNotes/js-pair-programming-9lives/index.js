//! DO NOT REMOVE
// Initialize prompt
const prompt = require('prompt-sync')({sigint: true});
// Initialize randomWords
const randomWords = require('random-words');

/**
  Example usage to prompt a user:
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);
  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//  Allow the player to play the game again
let playAgain = true
while (playAgain){


let words = new Array(randomWords(10));
// let secretWord =  words[0][1];

// Define an array of words
// let words = ["pizza", "fairy", "teeth", "shirt", "otter", "plane","computer", "book", "house", "elephant"];
// let words = new Array(randomWords(10));
console.log(words);

// Randomly select a word from the array
let secretWord = words[0][Math.floor(Math.random() * words.length)];

// Ask the player to choose a difficulty level
let difficulty = prompt("Choose your difficulty level:  easy(12 lives), medium(8 lives), or hard(4 lives): ")

// Set the number of remaining lives based on difficulty
let remainingLives = "";
  if (difficulty === "easy"){
    remainingLives = 12;
  }
  else if (difficulty === "medium"){
    remainingLives = 8;
  }
  else if (difficulty === "hard"){
    remainingLives = 4;
  }else{
    console.log("Invalid difficulty level.  Defaulting to easy");
    remainingLives = 12;
  }

// Create an array to store the player's guesses
let guessedLetters = [];

// Create an array to store the clue
let clue = new Array(secretWord.length).fill("?");

// Display the clue
console.log(clue.join(" "));

// Create the Hearts
let heart = ('\u2665');
console.log(`Remaining Lives: ${heart.repeat(remainingLives)}`);

// Loop until the player wins or loses
while (clue.includes("?") && remainingLives > 0) {

  // Get the letter guessed by the player
  let letter = prompt(`Guess a letter ((${remainingLives} ${heart} remaining): `);

  // Check if the letter is in the word
  if (secretWord.includes(letter)){

    // Replace the corresponding question mark with the letter
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === letter) {
        clue[i] = letter;
      }
    }
    console.log(clue.join(" "));

  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    console.log("You already guessed that letter!");
  } else {

  // Add the letter to the array of guessed letters
  guessedLetters.push(letter);
    }
  } else{
    // Decrement the number of remaining lives
    remainingLives--;
    console.log(`Incorrect. Remaining Lives: ${heart.repeat(remainingLives)}`);
    console.log(clue.join(" "));
  }
}

// Check if the player won or lost
if (clue.includes("?")) {
  console.log(`You lost! The word was "${secretWord}".`);
} else {
  console.log(`You won! The word was "${secretWord}".`);
}

// Ask the player if they want to play again
  let playAgainInput = prompt("Do you want to play again? (y/n): ");

// Play again if player selects "y"
  playAgain = (playAgainInput === "y" || playAgainInput === "Y")

// End the game if player selects "n"
  if (playAgainInput === "n" || playAgainInput === "N"){
    console.log("Goodbye. Thanks for playing!")
    playAgain = false;

  }
 }
