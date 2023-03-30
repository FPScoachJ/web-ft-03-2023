
# 9 Lives 

You are going to build a game where a player has to guess the secret word one letter at a time. The player is initially given 9 lives.  If the player guesses a wrong letter, they lose a life. The object of the game is to guess the word (one character at a time, before they lose all of the their lives (or chances)

## 1. Make a variable
Create a variable called `lives` to keep track of the number of lives (guesses) the player has left

## 2. Make an Array 

The program will only know the words that you give it.  You'll need to put these words in an array, then store the array in a variable called `words`.  Each word in the array should be 5 characters in length.


```js
let words = ["pizza", "fairy", "teeth", "shirt", "otter", "plane"]
```

## 3. Choose a secret word 
At the start of each game, the program will randomly pick the word that the player has to guess and store it in a variable called `secret_word`.  Add a line to create this new variable.

You will need to learn how to use `Math.random()` to generate a random number


## 4. Store the clue

Now create another array to hold the clue.  Unknown letters are stored as question marks.  These will be replaced when the player guesses a letter correctly.  At the start of the game, the whole array contains question marks.

You could write is as 

```js

let clue = ['?', '?', '?', '?', '?'] // the five question marks are stored as a list in the variable clue
```

## 5. Shot the lives left

The project uses the Unicode heart character to display how many lives are left.  To make your program easer to read and write, add the next line of code to store the character in a variable.

```js
let heart_symbol = u'\u2764'
```

## 6. Remember the result

Now make a variable to store whether or not the player has guessed the word correctly.  The variable is set as `false` to begin with because the player doesn't know the word when the game starts. 

```js
let guessedWordCorrectly = false
```


## Refactor to include the following improvements

1. Words can be variable length *
2. keep track of which letters you've guessed already *
3. lets you play again
4. Difficulty level (number of lives easy 12, medium 8 hard 4)


