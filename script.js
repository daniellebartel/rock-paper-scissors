// variables to hold 1, 2, 3
let playerSelection
let computerSelection
// variables to hold rock, paper, scissors
let compChoice
let userChoice
// message with game result
let gameResult
let winnerIsMessage
// score keeping
let gameRound = 1
let wins = 0
let losses = 0

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3) + 1;  // randomly choose a number from 1 to 3

    // assign 1, 2, 3 to rock, paper, scissors
    if (computerSelection == 1) {
        compChoice = "Rock";
    } else if (computerSelection == 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    console.log("Computer played " + compChoice);
}

function userPlay () {
    // prompt user for rock, paper, scissors input
    userInput = prompt("Round " + gameRound + " of 5\nRock, paper, scissors?", "")

    // adjust case so first letter is capitalized
    let firstLetter = userInput[0];
    let stringRemainder = userInput.slice(1);
    userChoice = firstLetter.toUpperCase() + stringRemainder.toLowerCase();

    // check if user input a valid option
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
            return;
    }

    console.log("You played " + userChoice);

    // assign rock, paper, scissors to 1, 2, 3
    if (userChoice == "Rock") {
        playerSelection = 1;
    } else if (userChoice == "Paper") {
        playerSelection = 2;
    } else if (userChoice == "Scissors") {
        playerSelection = 3;
    }
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
function whoWon(gameResult) {
    if (gameResult == "win") {
        winnerIsMessage = `You win! ${ userChoice } beats ${ compChoice }.`
    } else if (gameResult == "lose") {
        winnerIsMessage = `You lose! ${ compChoice } beats ${ userChoice }.`
    } else if (gameResult == "tie") {
        winnerIsMessage = `It's a tie! You both chose ${ userChoice }.`
    }
    return winnerIsMessage;
}

// determine the score
function scoreKeep(gameResult) {
    if (gameResult == "win") {
        ++wins
    } else if (gameResult == "lose") {
        ++losses
    }
    ++gameRound;
}

function game() {
    userPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    whoWon(gameResult);
    console.log(winnerIsMessage);
    scoreKeep(gameResult);
    console.log(`SCORE -- You: ${ wins }  Computer: ${ losses }`)
}

// determine who won out of 5 rounds
function findChampion() {
    if (wins > losses) {
        console.log(`Congratulations! You won ${ wins }, lost ${ losses }, and tied ${ 5 - wins - losses} games.`)
    }
    else if (wins < losses) {
        console.log(`Too bad. You lost ${ losses }, won ${ wins }, and tied ${ 5 - wins - losses} games.`)
    }
    else if (wins == losses) {
        console.log(`Draw! You both won ${ wins }, lost ${ losses }, and tied ${ 5 - wins - losses} games.`)
    }
}

alert("Ready to play?")

// play 5 rounds
while (gameRound <= 5) {
    game();
}

findChampion();