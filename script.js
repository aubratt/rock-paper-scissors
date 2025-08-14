// GET CPU choice
function getComputerChoice() {
    // Generate a random number 0 through 2, inclusive
    const randomNumber = Math.floor(Math.random() * 3);
    
    // If the random number is 0, computer chooses rock
    // If the random number is 1, computer chooses paper
    // If the random number is 2, computer chooses scissors
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

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

// Initialize score variables
let computerScore = 0;
let humanScore = 0;

// Play a single round
function playRound(humanChoice, computerChoice) {
    // If human choice is the same as computer choice, the round is a tie

    // If human choice is rock and computer choice is paper, computer wins the round
    // If human choice is rock and computer choice is scissors, human wins the round

    // If human choice is paper and computer choice is rock, human wins the round
    // If human choice is paper and computer choice is scissors, computer wins the round

    // If human choice is scissors and computer choice is rock, computer wins the round
    // If human choice is scissors and computer choice is paper, human wins the round

    if (humanChoice === computerChoice) {
        return `Tie! Both players chose ${humanChoice}.`;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer chooses paper...");
            computerScore++;
            return "You lose! Paper beats rock.";
        } else {
            console.log("Computer chooses scissors...");
            humanScore++;
            return "You win! Rock beats scissors.";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Computer chooses rock...");
            humanScore++;
            return "You win! Paper beats rock.";
        } else {
            console.log("Computer chooses scissors...");
            computerScore++;
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerChoice === "rock") {
            console.log("Computer chooses rock...");
            computerScore++;
            return "You lose! Rock beats scissors.";
        } else {
            console.log("Computer chooses scissors...");
            humanScore++;
            return "You win! Rock beats scissors.";
        }
    }
}

// Get human and computer selections for 1 round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Get result for 1 round
console.log(playRound(humanSelection, computerSelection));