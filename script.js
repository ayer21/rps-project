let playerSelection = prompt(),
    computerSelection = computerPlay(); // calls the function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
playerSelection = playerSelection.toLowerCase(); computerSelection.toLowerCase();
console.log('value of computerSelection is ' + computerSelection); // it should be the same as the value of 'match' in computePlay()
console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
    // pick a random number (from 0 to 9), and based on it, pick one of the strings
    let random = Math.trunc(Math.random() * 10),
        match = (random % 3 === 0) ? 'rock' : (random % 2 === 0) ? 'paper' : 'scissors';
    // 3, 6, 9 => rock      2, 4, 8 => paper        1, 5, 7 => scissors
    // to do: when it's 0, make an anonymous/arrow function that picks a new number, and loop again if it's 0
    console.log('the random number is ' + random); console.log('the \'match\' value is ' + match);
    return match;
}

// function take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner

function playRound(playerSelection, computerSelection) {
    // each string have two coditions/rules, it's powerful than one and weaker than the other. evaluate the conditions and return the result
    // to do: make playerSelection case insensitive with regex

    if (playerSelection == computerSelection) {
        return 'Tie'
    }
    else if (playerSelection == 'rock') {
        return computerSelection == 'paper' ? 'You Lose' : 'You Win'
    }
    else if (playerSelection == 'paper') {
        return computerSelection == 'rock' ? 'You Win' : 'You Lose'
    }
    else if (playerSelection == 'scissors') {
        return computerSelection == 'rock' ? 'You Lose' : 'You Win'
    }
    else return `the value you provided, '${playerSelection}', is not an option`
}

/*  pure code:
const playerSelection = prompt(),
    computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
    let random = Math.trunc(Math.random() * 10),
        match = (random % 3 === 0) ? 'Rock' : (random % 2 === 0) ? 'Paper' : 'Scissors';
    return match;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie'
    }
    else if (playerSelection == 'Rock') {
        return computerSelection == 'Paper' ? 'You Lose' : 'You Win'
    }
    else if (playerSelection == 'Paper') {
        return computerSelection == 'Rock' ? 'You Win' : 'You Lose'
    }
    else if (playerSelection == 'Scissors') {
        return computerSelection == 'Rock' ? 'You Lose' : 'You Win'
    }
}
*/