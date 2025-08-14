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
        return "rock";
    } else if (humanChoice === paper) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Play a full best-of-5 game
function playGame() {
    // Explain the rules of the game
    alert(
        "Welcome to Rock, Paper, Scissors! You will be playing a best-of-5 series against the computer. The first to win 3 rounds wins the game. Let's play!"
    );

    // Initialize score variables
    let computerScore = 0;
    let humanScore = 0;

    // While neither player has a score of 3, play 1 round
    while (humanScore !== 3 && computerScore !== 3) {
        // Declare function for playing a single round
        function playRound(humanChoice, computerChoice) {
            // If human choice is the same as computer choice, the round is a tie

            // If human choice is rock and computer choice is paper, computer wins the round
            // If human choice is rock and computer choice is scissors, human wins the round

            // If human choice is paper and computer choice is rock, human wins the round
            // If human choice is paper and computer choice is scissors, computer wins the round

            // If human choice is scissors and computer choice is rock, computer wins the round
            // If human choice is scissors and computer choice is paper, human wins the round

            if (humanChoice === computerChoice) {
                alert(`Tie! Both players chose ${humanChoice}.`);
            } else if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    alert("Computer chooses paper...");
                    computerScore++;
                    alert("You lose! Paper beats rock.");
                } else {
                    alert("Computer chooses scissors...");
                    humanScore++;
                    alert("You win! Rock beats scissors.");
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    alert("Computer chooses rock...");
                    humanScore++;
                    alert("You win! Paper beats rock.");
                } else {
                    alert("Computer chooses scissors...");
                    computerScore++;
                    alert("You lose! Scissors beats paper.");
                }
            } else {
                if (computerChoice === "rock") {
                    alert("Computer chooses rock...");
                    computerScore++;
                    alert("You lose! Rock beats scissors.");
                } else {
                    alert("Computer chooses scissors...");
                    humanScore++;
                    alert("You win! Rock beats scissors.");
                }
            }
        }

        // Update human on the current score
        alert(`Current score \nYou: ${humanScore} \nComputer: ${computerScore}`);

        // Prompt human for selection
        let humanSelection = getHumanChoice();

        // Generate random computer selection
        let computerSelection = getComputerChoice();

        // Get result for 1 round
        console.log(playRound(humanSelection, computerSelection));
    }

    // If human reaches a score of 3, human wins the game
    if (humanScore === 3) {
        console.log("You win!!!");
    }

    // If computer reaches a score of 3, computer wins the game
    if (computerScore === 3) {
        console.log("You lose. Better luck next time.");
    }
}

// Start game for the human
console.log(playGame());