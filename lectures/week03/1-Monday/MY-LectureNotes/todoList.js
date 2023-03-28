const prompt = require('prompt-sync')({sigint: true});

let toDos = ["Feed the cat"] //How to store information from user
let itemChoice = 0;
let userInput = "";
let arrIndex = 0;
console.log("---------------------"
);
console.log(`To-Do List:
1. Add a to-do list item.
2. Update a to-do list item.
3. Remove a to-do list item.
4. End Program. `)
console.log("---------------------"
);
    let menuChoice = 0;
    let quit = 4;
    while (menuChoice!=quit){

        //print a list of todolist items
        for(let index = 0; index < toDos.length; index++){
            console.log(`${index+1}. ${toDos[index]}`);
        }
        menuChoice = Number(prompt(`Select a menu item:`))

        switch(menuChoice){
            case 1:  // adding an item
                //prompt the user to enter a to-do list item
                userInput = prompt("Enter a to-do list item: ")
                toDos.push(userInput);
                break;
            case 2:  // update
                // ask which item to update
                itemChoice = Number(prompt("Which item to update?"))
                // index = choice - 1
                arrIndex = itemChoice - 1;
                // prompt user for input
                userInput = prompt("Update to-do list item: ")
                // update item in to-do list with new user info
                toDos[arrIndex] = userInput;
                break;
            case 3:  // remove
                // ask which item to remove
                itemChoice = Number(prompt("Which item to remove?"))
                // arrIndex = itemChoice - 1
                arrIndex = itemChoice - 1;
                // remove item in to-do list
                toDos.splice(arrIndex);
                console.log(toDos);
                break;
            default: // quit
                break;
        }
        console.log("Exited program. Goodbye");

    }


// 1.  Prompt user to
    // 1. Add a to-do list item
    //  - prompt them for the item that they want to add
    //  - take the item (string) and push it to our list
    //  - display our list
    // 2. Update a to-do list item
    //  - display list by number and prompt user for the item they want to update
    //  - caste chosen number to an integer
    //  - integer - 1 to access array value
    //  - prompt user for the updated item input
    //  - todos[index - 1] = new value
    //  - return user to the main menu
    // 3. Remove a to-do list item
    // 4. End Program
