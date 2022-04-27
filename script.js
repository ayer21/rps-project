let playerSelection,
    computerSelection,
    display,
    round = 0,
    win = 0, lose = 0, tie = 0;

div = document.querySelector('.result')
// this will group all the nodes in one nodelist and add event listeners to all of them.
xana = document.querySelectorAll('button')
xana.forEach(y => y.addEventListener('click', (e) => {playerSelection = e.currentTarget.textContent; game()}));

function computer() {
    // this function select one of the three options for the computer
    const oneOf = ['rock', 'paper', 'scissors']
    computerSelection = oneOf[Math.floor(Math.random() * oneOf.length)]
}

function game() {
    // this function plays a round, declare the winner, and check if 5 rounds have passed
    round++
    computer()
    if (playerSelection === computerSelection) {tie++; display = 'it\'s a tie'}
    else if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'scissors': win++; display = 'you win'; break;
            case 'paper': lose++; display = 'you lose'; break;
        }
    }
    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock': win++; display = 'you win'; break;
            case 'scissors': lose++; display = 'you lose'; break;
        }
    }
    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'paper': win++; display = 'you win'; break;
            case 'rock': lose++; display = 'you lose'; break;
        }
    }
    div.textContent = display; // `You selected ${playerSelection}, and the computer selected ${computerSelection}`
    if (round >= 5) {
        display += win > lose ? '\nYou won the game' : lose > win ? 'You lost the game' : '\nThe game ended with a tie';
        div.textContent = display
    }
}