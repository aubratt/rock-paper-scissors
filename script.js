function loadButtons() {
    // Create buttons div
    const btnsDiv = document.createElement("div");
    btnsDiv.id = "btns-div";

    // Format buttons div

    // Append buttons div to body
    document.body.appendChild(btnsDiv);

    // Create buttons
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    // Format buttons
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    // Append buttons to buttons div
    btnsDiv.appendChild(rockBtn);
    btnsDiv.appendChild(paperBtn);
    btnsDiv.appendChild(scissorsBtn);

    // Attach event listeners to buttons
}

function getComputerChoice() {
    // This randomly generated number, 0-2 inclusive, determines the computer's choice
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        // Tie
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            // Computer win
        } else {
            // Human win
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            // Human win
        } else {
            // Computer win
        }
    } else {
        if (computerChoice === "rock") {
            // Computer win
        } else {
            // Human win
        }
    }
}

function playGame() {}

document.addEventListener("DOMContentLoaded", function() {
    loadButtons();
});