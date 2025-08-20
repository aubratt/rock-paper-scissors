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

function attachButtonListeners() {
    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");

    rockBtn.addEventListener("click", function () {
        playRound("rock");
    });
    paperBtn.addEventListener("click", function () {
        playRound("paper");
    });
    scissorsBtn.addEventListener("click", function () {
        playRound("scissors");
    });
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const resultDiv = document.getElementById("result-div");

    const shootText = document.getElementById("shoot-text");
    shootText.hidden = true;

    const humanChoiceText = document.createElement("div");
    humanChoiceText.id = "human-choice-text";
    humanChoiceText.className = "result-text";
    humanChoiceText.textContent = `You chose ${humanChoice}...`;
    resultDiv.appendChild(humanChoiceText);

    const computerChoiceText = document.createElement("div");
    computerChoiceText.id = "computer-choice-text";
    computerChoiceText.className = "result-text";
    computerChoiceText.textContent = `Computer chose ${computerChoice}...`;
    resultDiv.appendChild(computerChoiceText);

    const winnerText = document.createElement("div");
    winnerText.id = "winner-text";
    winnerText.className = "result-text";

    if (humanChoice === computerChoice) {
        winnerText.textContent = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            // Computer win
            winnerText.textContent = "Computer won the round.";
        } else {
            // Human win
            winnerText.textContent = "You won the round!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            // Human win
            winnerText.textContent = "You won the round!";
        } else {
            // Computer win
            winnerText.textContent = "Computer won the round.";
        }
    } else {
        if (computerChoice === "rock") {
            // Computer win
            winnerText.textContent = "Computer won the round.";
        } else {
            // Human win
            winnerText.textContent = "You won the round!";
        }
    }

    resultDiv.appendChild(winnerText);
}

function playGame() {}

document.addEventListener("DOMContentLoaded", function () {
    attachButtonListeners();
});

// 1. Human SHOOTS by clicking the rock, paper, or scissors button
// 2. Determine what human's choice was (event listener)
// 3. Compare human's choice to computer's choice to determine winner (playRound)
// 4. Tell human what their choice was, what the computer's choice was, and who won the round
// 5. Update scoreboard
// 6. Does either human or computer have a score of 5 now?
// Yes: Go to step 7
// No: Go back to step 1
// 7. Tell human who won the game and show 'play again' button
// 9. After human clicks 'play again,' go back to step 1
