let playerSelection,
    computerSelection,
    display,
    set, addMe,
    round, win, lose;

div = document.querySelector('.result')
// this will group all the nodes in one nodelist and add event listeners to all of them.
xana = document.querySelectorAll('button')

boardWin = document.querySelector('#wins')
boardLosses = document.querySelector('#losses')
selectionPlayer = document.querySelector('#player')
selectionComputer = document.querySelector('#computer')
body = document.querySelector('body')

initiate();

function initiate() {
    if (addMe) { // when the game is complete, and the user click the restart button (addMe), this code cleans the page
        [boardWin, boardLosses, div, selectionPlayer, selectionComputer].forEach( x => x.textContent = '' );
        body.removeChild(addMe)
    }
    round = 0, win = 0, lose = 0, tie = 0;
    set = function(e) { playerSelection = e.currentTarget.textContent; game() };
    xana.forEach(y => y.addEventListener('click', set));
    // when the user click a button, that option go to the variable 'playerselection', and run 'game' function
}

function computer() {
    // this function select one of the three options for the computer
    const oneOf = ['rock', 'paper', 'scissors']
    computerSelection = oneOf[Math.floor(Math.random() * oneOf.length)]
}

function game() {
    // this function plays one round, declare the winner, and check if 5 rounds have passed *** doesn't check rounds anymore, but wins and losses
    computer()
    display = compare()
    function compare() {
        let u = playerSelection, c = computerSelection;
        if (u === c) { return 'Tie' }
        else if (u === 'rock' && c === 'scissors' || u === 'paper' && c === 'rock' || u === 'scissors' && c === 'paper') { win++; return 'you win' }
        else if (c === 'rock' && u === 'scissors' || c === 'paper' && u === 'rock' || c === 'scissors' && u === 'paper') { lose++; return 'you lose' }
    }
    boardWin.textContent = win;
    boardLosses.textContent = lose;
    selectionPlayer.textContent = playerSelection;
    selectionComputer.textContent = computerSelection;
    div.style.border = 'solid 1px black'

    div.textContent = display;
    if (win >= 5 || lose >= 5) {
        display = win > lose ? 'You won the game' : 'You lost the game';
        div.textContent = display;
        xana.forEach(y => y.removeEventListener('click', set));
        addMe = document.createElement('div');
        addMe.textContent = 'restart';
        addMe.setAttribute('style', 'display: inline-block; margin: 10px auto; border: solid 2px green; border-radius: 10px; padding: 5px; cursor:pointer;');
        addMe.addEventListener('click', initiate)
        body.appendChild(addMe);
    }
}

/*
player select an option
pc select an option
comparison and assigning ouput the output
appending the output
when reaching 5 rounds, removing event listener, and showing the option to restart
restarting make the count back to zero and add event listeners. (make it the first function to run)
*/