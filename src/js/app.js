const scoreUser = document.querySelector('.score-user');
const scoreComputer = document.querySelector('.score-computer');
const info = document.querySelector('.info');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function computer() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function game(e) {
	const userChoice = e;
	const computerChoice = computer();
	const resultChoice = userChoice + computerChoice;
	let lose = `${userChoice} loses to ${computerChoice}. You lose.`;
	let win = `${userChoice} beats ${computerChoice}. You win.`;
	let changeColor = (color) => {
		document.getElementById(userChoice).classList.add(`selection__radius--${color}`);
		setTimeout(() => {
			document.getElementById(userChoice).classList.remove(`selection__radius--${color}`);
		}, 400);
	};

	if (userChoice === computerChoice) {
		info.innerHTML = `${userChoice} equals ${computerChoice}. It's draw.`;
		changeColor('yellow');
	} else if (resultChoice === 'rockpaper' || resultChoice === 'paperscissors' || resultChoice === 'scissorsrock') {
		changeColor('red');
		info.innerHTML = lose;
		computerScore++;
		scoreComputer.innerHTML = computerScore;
	} else if (resultChoice === 'rockscissors' || resultChoice === 'paperrock' || resultChoice === 'scissorspaper') {
		info.innerHTML = win;
		userScore++;
		changeColor('green');
		scoreUser.innerHTML = userScore;
	}
}

(function main() {
	paper.addEventListener('click', () => game('paper'));
	rock.addEventListener('click', () => game('rock'));
	scissors.addEventListener('click', () => game('scissors'));
})();