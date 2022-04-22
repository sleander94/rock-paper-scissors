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
    return playerChoiceFormatted;
}

/* Compare player's choice to computer's choice and determine winner */
function playRockPaperScissors(computerSelection, playerSelection) {
    console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}`);
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        result = 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
        result = 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        result = 'You win! Rock beats Scissors.';
    } else {
        result = 'You lose!'
    }
    console.log(result)
}



