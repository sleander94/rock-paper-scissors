
const gameChoices = ['rock', 'paper', 'scissors']


function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameChoices[randomNum];
    return computerChoice;
}


