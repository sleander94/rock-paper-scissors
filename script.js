/* Define possible choices for player and computer */
const gameChoices = ['Rock', 'Paper', 'Scissors'];

/* Get computer's choice */
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameChoices[randomNum];
    return computerChoice;
}

/* Get player's choice */
function playerPlay() {
    playerChoice = window.prompt('Rock, Paper, or Scissors? ').toLowerCase();
    playerChoiceFormatted = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    if (playerChoiceFormatted === 'Rock' || playerChoiceFormatted === 'Paper' || playerChoiceFormatted === 'Scissors') {
        return playerChoiceFormatted;
    } else {
        alert('Invalid input. Please try again');
        playerPlay();
    }
}

/* Compare player's choice to computer's choice and determine winner */
function playRound(computerSelection, playerSelection) {
    console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}`);
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
        score = 0;
    } else if (playerSelection === 'Rock' & computerSelection === 'Scissors') {
        result = 'You win! Rock beats Scissors.';
        score = 1;
    } else if (playerSelection === 'Scissors' & computerSelection === 'Paper') {
        result = 'You win! Scissors beats Paper.';
        score = 1;
    } else if (playerSelection === 'Paper' & computerSelection === 'Rock') {
        result = 'You win! Rock beats Scissors.';
        score = 1;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        score = -1;
    }
    console.log(result);
    return score;
}

/* Play best of 5 and record score */
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(computerPlay(), playerPlay());
        if (score === 1) {
            playerScore += 1;
        } else if (score === -1) {
            computerScore += 1;
        }
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}.`);
    }
    if (playerScore > computerScore) {
        console.log(`You beat the computer with a score of ${playerScore} to ${computerScore}. Congratulations!`);
    } else if (computerScore > playerScore) {
        console.log(`The computer beat you with a score of ${computerScore} to ${playerScore}. Better luck next time!`);
    } else {
        console.log(`You tied the computer with a score of ${playerScore}!`);
    }
}

