let playerSelection,
    computerSelection;
winCount = 0,
    loseCount = 0,
    tieCount = 0;
console.log(game());

function computerPlay() {
    // pick a random number (from 0 to 9), and based on it, pick one of the strings
    let random, match;
    () => {
        random = Math.trunc(Math.random() * 10);
        if (random === 0) {
            for (let i = 0; random === 0; i++) {
                random = Math.trunc(Math.random() * 10)
            }
        }
    }
    match = (random % 3 === 0) ? 'rock' : (random % 2 === 0) ? 'paper' : 'scissors';
    // 3, 6, 9 => rock      2, 4, 8 => paper        1, 5, 7 => scissors
    // to do: when it's 0, make an anonymous/arrow function that repeat the selection of a random number
    return match;
}

// function take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner

function playRound(playerSelection, computerSelection) {
    // each string have two coditions/rules, it's powerful than one and weaker than the other. evaluate the conditions and return the result
    // to do: make playerSelection case insensitive with regex

    if (playerSelection == computerSelection) { tieCount++; return 'Tie'; }
    else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'scissors': winCount++; return 'You Win! Rock beats Scissors';
            case 'paper': loseCount++; return 'You Lose! Paper beats Rock';
        }
    }
    else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock': winCount++; return 'You Win! Paper beats Rock';
            case 'scissors': loseCount++; return 'You Lose! Scissors beat Paper';
        }
    }
    else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'paper': winCount++; return 'You Win! Scissors beat Paper';
            case 'rock': loseCount++; return 'You Lose! Rock beats Scissors';
        }
    }
    else return `the value you provided, '${playerSelection}', is not an option`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay(); // calls the function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
        console.log(playRound(playerSelection, computerSelection));
    }
    return (winCount > loseCount) ? 'You won the game' : 'You lost the game';
};