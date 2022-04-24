/* Define computer choices and set new game variables */
const gameChoices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;
document.getElementById('results').innerHTML = "<p>Choose your weapon...</p>";
document.getElementById('score').innerHTML = "<p>Player: 0 | Computer: 0</p>";


/* Get computer's choice */
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    let computerChoice = gameChoices[randomNum];
    return computerChoice;
}

/* Compare player's choice to computer's choice and determine winner */
function playRound(computerSelection, playerSelection) {
    document.getElementById('results').innerHTML = "";
    results = document.querySelector('#results');
    resultDisplay = document.createElement('p');

    choiceDisplay = document.createElement('p');
    choiceDisplay.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}`;
    results.appendChild(choiceDisplay);

    if (playerSelection === computerSelection) {
        resultDisplay.textContent = 'It\'s a tie!';
        outcome = 0;
    } else if (playerSelection === 'Rock' & computerSelection === 'Scissors') {
        resultDisplay.textContent = 'You win! Rock beats Scissors.';
        outcome = 1;
    } else if (playerSelection === 'Scissors' & computerSelection === 'Paper') {
        resultDisplay.textContent = 'You win! Scissors beats Paper.';
        outcome = 1;
    } else if (playerSelection === 'Paper' & computerSelection === 'Rock') {
        resultDisplay.textContent = 'You win! Rock beats Scissors.';
        outcome = 1;
    } else {
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        outcome = -1;
    }
    results.appendChild(resultDisplay);
    return outcome;
}

/* Update scoreboard based on outcome of round */
function updateScore (outcome){
    if (outcome == 1) {
        playerScore += 1;
    } else if (outcome == -1) {
        computerScore += 1;
    }
    document.getElementById('score').innerHTML = "";
    score = document.querySelector('#score');
    scoreBoard = document.createElement('p');
    scoreBoard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    score.appendChild(scoreBoard);
}

/* If any score reaches 5, display outcome and turn off game */
function checkGameOver () {
    gameOver = document.querySelector('#game-over');
    gameOverDisplay = document.createElement('p');
    if (playerScore === 5) {
        gameOverDisplay.textContent = `You are the champion of humanity!`;
        gameOver.appendChild(gameOverDisplay);
        return true;    
    } else if (computerScore === 5) {
        gameOverDisplay.textContent = `You\'ve been defeated by the machines...`;
        gameOver.appendChild(gameOverDisplay);
        return true;
    }
}

/* Generate new game button and set game variables to starting values to play again */
function resetGame () {
    playerScore = 0;
    computerScore = 0;
    outcome = 0;
    const endDiv = document.querySelector('#new-game');
    newGame = document.createElement('button');
    newGame.textContent = 'Click here to play again!';
    endDiv.appendChild(newGame);
    newGame.addEventListener('click', () => {
        updateScore();
        gameOn = true;
        document.getElementById('game-over').innerHTML = "";
        document.getElementById('new-game').innerHTML = "";
        document.getElementById('results').innerHTML = "<p>Choose your weapon...</p>";
    });
     
}

/* Allow buttons to listen for player choice and play rounds until a score reaches 5 */
const buttons = document.querySelectorAll('.Rock, .Paper, .Scissors');
buttons.forEach(button => button.addEventListener('click', () => {
    if (gameOn) {
    updateScore(playRound(computerPlay(), `${button.classList}`));
     if (checkGameOver()) {
        gameOn = false;
        resetGame()
     }
}}));

