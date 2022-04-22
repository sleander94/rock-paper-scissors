/* Define possible choices for player and computer */
const gameChoices = ['rock', 'paper', 'scissors'];

/* Get computer's choice */
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameChoices[randomNum];
    return computerChoice;
}

/* Get player's choice */
function playerSelection() {
    playerChoice = window.prompt('Rock, paper, or scissors? ').toLowerCase();
    return playerChoice;
}



/* Compare player's choice to computer's choice and determine winner */




