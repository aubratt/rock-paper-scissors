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

function clearPreviousRoundResultText() {
    const humanChoiceText = document.getElementById("human-choice-text");
    const computerChoiceText = document.getElementById("computer-choice-text");
    const winnerText = document.getElementById("winner-text");

    const gameWinnerText = document.getElementById("game-winner-text");
    const playAgainText = document.getElementById("play-again-text");

    if (humanChoiceText && computerChoiceText && winnerText) {
        humanChoiceText.remove();
        computerChoiceText.remove();
        winnerText.remove();
    }

    if (gameWinnerText && playAgainText) {
        gameWinnerText.remove();
        playAgainText.remove();
    }
}

function playRound(humanChoice) {
    clearPreviousRoundResultText();

    const computerChoice = getComputerChoice();

    const resultDiv = document.getElementById("result-div");

    const winconText = document.getElementById("wincon-text");
    winconText.hidden = true;

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

    // The scoreboard numbers are strings by default,
    // so they need to be converted to integers in order to update the score
    let humanScoreDiv = document.getElementById("human-score");
    let humanScoreValue = parseInt(humanScoreDiv.textContent);

    let computerScoreDiv = document.getElementById("computer-score");
    let computerScoreValue = parseInt(computerScoreDiv.textContent);

    if (humanChoice === computerChoice) {
        winnerText.textContent = "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            // Computer win
            winnerText.textContent = "Computer won the round.";
            computerScoreValue++;
            computerScoreDiv.textContent = computerScoreValue;
        } else {
            // Human win
            winnerText.textContent = "You won the round!";
            humanScoreValue++;
            humanScoreDiv.textContent = humanScoreValue;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            // Human win
            winnerText.textContent = "You won the round!";
            humanScoreValue++;
            humanScoreDiv.textContent = humanScoreValue;
        } else {
            // Computer win
            winnerText.textContent = "Computer won the round.";
            computerScoreValue++;
            computerScoreDiv.textContent = computerScoreValue;
        }
    } else {
        if (computerChoice === "rock") {
            // Computer win
            winnerText.textContent = "Computer won the round.";
            computerScoreValue++;
            computerScoreDiv.textContent = computerScoreValue;
        } else {
            // Human win
            winnerText.textContent = "You won the round!";
            humanScoreValue++;
            humanScoreDiv.textContent = humanScoreValue;
        }
    }

    resultDiv.appendChild(winnerText);

    checkForGameWin(humanScoreValue, computerScoreValue);
}

function checkForGameWin(humanScore, computerScore) {
    if (humanScore === 5 || computerScore === 5) {
        clearPreviousRoundResultText();

        const gameWinner = humanScore === 5 ? "You" : "Computer";

        const resultDiv = document.getElementById("result-div");

        const gameWinnerText = document.createElement("div");
        gameWinnerText.id = "game-winner-text";
        gameWinnerText.class = "result-text";
        gameWinnerText.textContent = `${gameWinner} won the game!`;

        const playAgainText = document.createElement("div");
        playAgainText.id = "play-again-text";
        playAgainText.class = "result-text";
        playAgainText.textContent = "Click a button to start a new game.";

        resultDiv.appendChild(gameWinnerText);
        resultDiv.appendChild(playAgainText);

        document.getElementById("human-score").textContent = "0";
        document.getElementById("computer-score").textContent = "0";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    attachButtonListeners();
});
