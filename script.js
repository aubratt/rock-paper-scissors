// GET CPU choice
function getComputerChoice() {
    // Generate a random number 0 through 2, inclusive
    const randomNumber = Math.floor(Math.random() * 3);
    
    // If the random number is 0, computer chooses rock
    // If the random number is 1, computer chooses paper
    // If the random number is 2, computer chooses scissors
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Print computer's choice
console.log(getComputerChoice());

// GET human choice
function getHumanChoice() {
    // Initialize rock, paper, and scissors variables
    const rock = "R";
    const paper = "P";
    const scissors = "S";
    
    // Declare human choice variable
    let humanChoice = "";

    // Reprompt if human input does not have a length of 1
    // or if human input does not exactly match one of the rock, paper, or scissors variables
    while (humanChoice.length !== 1 || (humanChoice !== rock && humanChoice !== paper && humanChoice !== scissors)) {
        // Prompt human for choice
        // Convert human input to string
        // Delete any spaces in human input
        // Convert human input to uppercase
        humanChoice = String(prompt("Enter R, P, or S for rock, paper, or scissors: ").replace(/\s/g, "").toUpperCase());
    }

    // If human input is R, human chooses rock
    // If human input is P, human chooses paper
    // If human input is S, human chooses scissors
    if (humanChoice === rock) {
        return "rock"
    } else if (humanChoice === paper) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Print human's choice
console.log(getHumanChoice());

// IF CPU choice is the same as player choice THEN
    // Tie
// ELSE IF CPU choice is rock THEN
    // IF player choice is paper THEN
        // Player wins
    // ELSE
        // CPU wins
    // ENDIF
// ELSE IF CPU choice is paper THEN
    // IF player choice is rock THEN
        // CPU wins
    // ELSE
        // Player wins
    // ENDIF
// ELSE IF CPU choice is scissors THEN
    // IF player choice is rock THEN
        // Player wins
    // ELSE
        // CPU wins
    // ENDIF
// ENDIF