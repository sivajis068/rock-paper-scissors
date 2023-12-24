const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');



let resultText;
possibleChoice.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        //userchoice
        userChoice.textContent = e.target.id;
        let userInput = userChoice.textContent;


        //randomgeneration for computer choice
        let strings = ['paper', 'rock', 'scissors'];
        let i = Math.floor(Math.random() * 3);
        computerChoice.textContent = strings[i];
        let randomChoice = computerChoice.textContent;



        //result
        if (userInput === randomChoice) return result.textContent = 'Draw';
        if (userInput !== randomChoice) {
            if (userInput === 'rock') {
                if (randomChoice === 'paper') return result.textContent = 'you lost';
                else return result.textContent = 'you won';
            }
            if (userInput === 'paper') {
                if (randomChoice === 'rock') return result.textContent = 'you won';
                else return result.textContent = 'you lost';
            }
            if (userInput === 'scissors') {
                if (randomChoice === 'rock') return result.textContent = 'you lost';
                else return result.textContent = 'you won';
            }
        };
        resultText = result.textContent;
        colorChange();
    });
});

function colorChange() {
    result.style.color = 'green';

    if (resultText === 'you lost') {
        result.style.backgroundColor = 'red';
    } else if (resultText === 'you won') {
        result.style.backgroundColor = 'green';
    } else {
        // Reset background color if it's not 'you lost' or 'you won'
        result.style.backgroundColor = '';
    }
}