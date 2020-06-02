console.log("Working");
let user = 0;
let comp = 0;
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const action = document.querySelector(".action")
const rock_img = document.querySelector(".r")
const paper_img = document.querySelector(".p")
const scissors_img = document.querySelector(".s")
const scoreBoard = document.querySelector(".scoreboard");

function getFullForm(choice) {
	choices = ['Rock', 'Paper', 'Scissors'];
	if(choice=='r')
	{
		return choices[0];
	}
	else if(choice == 's')
	{
		return choices[2];
	}
	else if(choice == 'p')
	{
		return choices[1];
	}
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() *3);
	return choices[randomNumber];
}


function win(compChoice, userChoice) {
	//console.log(compChoice, userChoice);
	const userAction = getFullForm(userChoice);
	const compAction = getFullForm(compChoice);
	user = user + 1;
	const usersub = "User".fontsize(3).sub();
	const compsub = "Comp".fontsize(3).sub();
	userScore.innerHTML = user;
	action.innerHTML = userAction + usersub + " Beats " + compAction + compsub + ". You Won!!";
	scoreBoard.classList.add('green-glow');
	setTimeout(function() {
		scoreBoard.classList.remove('green-glow');
	},500)
}

function lose(compChoice, userChoice) {
	const userAction = getFullForm(userChoice);
	const compAction = getFullForm(compChoice);
	const usersub = "User".fontsize(3).sub();
	const compsub = "Comp".fontsize(3).sub();
	comp = comp + 1;
	compScore.innerHTML = comp;
	action.innerHTML = compAction + compsub + " Beats " + userAction + usersub	 + ". You Lost!!";
	scoreBoard.classList.add('red-glow');
	setTimeout(function() {
		scoreBoard.classList.remove('red-glow');
	}, 500);
}

function draw(compChoice, userChoice) {
	const userAction = getFullForm(userChoice);
	const compAction = getFullForm(compChoice);
	action.innerHTML = "It's a Draw";
	scoreBoard.classList.add('tomato-glow');
	setTimeout(function() {
		scoreBoard.classList.remove('tomato-glow');
	},500)
}


function game(weapon) {
	const compChoice = getComputerChoice();
	const userChoice = weapon;
	const res = compChoice + userChoice;
	if(res == "rp" || res == "sr" || res == "ps")
	{
		win(compChoice, userChoice);
	}
	else if(res == "pr" || res == "rs" || res == "sp")
	{
		lose(compChoice, userChoice);
	}
	else if(res == "pp" || res == "rr" || res == "ss")
	{
		draw(compChoice, userChoice);
	}
}

function main() {
	rock_img.addEventListener('click', function() {
		game("r");
	})

	paper_img.addEventListener('click', function() {
		game("p");
	})

	scissors_img.addEventListener('click', function() {
		game("s");
	})
}

main();
