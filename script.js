// variables to hold 1, 2, 3
let playerSelection
let computerSelection
// variables to hold rock, paper, scissors
let compChoice
let userChoice
// message with game result
let gameResult
let message
// score keeping
let wins = 0
let losses = 0

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3) + 1;  // randomly choose a number from 1 to 3
    console.log(computerSelection);

    // assign 1, 2, 3 to rock, paper, scissors
    if (computerSelection == 1) {
        compChoice = "Rock";
    } else if (computerSelection == 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    console.log(compChoice);
}

function userPlay () {
    // prompt user for rock, paper, scissors input
    userInput = prompt("Rock, paper, scissors?", "")
    console.log("User input: " + userInput);

    // adjust case so first letter is capitalized
    let firstLetter = userInput[0];
    let stringRemainder = userInput.slice(1);
    userChoice = firstLetter.toUpperCase() + stringRemainder.toLowerCase();
    console.log("Capitalized: " + userChoice);

    // check if user input is a valid option
    switch (userChoice) {
        case "Rock":
            break;
        case "Paper":
            break;
        case "Scissors":
            break;
        default:
            alert(`${ userChoice } is not a valid option! Try again.`);
            userPlay();
    }

    // assign rock, paper, scissors to 1, 2, 3
    if (userChoice == "Rock") {
        playerSelection = 1;
    } else if (userChoice == "Paper") {
        playerSelection = 2;
    } else if (userChoice == "Scissors") {
        playerSelection = 3;
    }
    
    console.log("Numerical equivalent: " + playerSelection);
}

// determine the game outcome for the user
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        gameResult = "tie"
    } else if (playerSelection - computerSelection == -1 ) {
        gameResult = "lose"
    } else if (playerSelection - computerSelection == 2) {
        gameResult = "lose"
    } else if (playerSelection - computerSelection == -2 ){
        gameResult = "win"
    } else if (playerSelection - computerSelection == 1 ){
        gameResult = "win"
    }
    return gameResult;
}

// display a win/lose/tie message
function gameMessage(gameResult) {
    if (gameResult == "win") {
        message = `You win! ${ userChoice } beats ${ compChoice }.`
    } else if (gameResult == "lose") {
        message = `You lose! ${ compChoice } beats ${ userChoice }.`
    } else if (gameResult == "tie") {
        message = `It's a tie! You both chose ${ userChoice }.`
    }
    return message;
}

// determine the score
function scoreKeep(gameResult) {
    if (gameResult == "win") {
        ++wins
    } else if (gameResult == "lose") {
        ++losses
    }
}

function game() {
    computerPlay();
    userPlay();
    playRound(playerSelection, computerSelection);
    gameMessage(gameResult);
    console.log(message);
    scoreKeep(gameResult);
    console.log(`SCORE -- You: ${ wins }  Computer: ${ losses }`)
}

game();