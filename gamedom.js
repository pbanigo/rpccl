const inst = document.getElementById('instructions');
const cPlay = document.getElementById('cPlay');
const pPlay = document.getElementById('pPlay');
const winner = document.getElementById('winner');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');

const rockDiv  = document.getElementById('rock');
const paperDiv  = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');

const playRock = rockDiv.addEventListener('click',clickedRock);;
function clickedRock(){
	computerPlay();
	pPlay.textContent = 'You played ROCK!'
	//I can actually do the scoring here? if else if
	return 'rock'
}
const playPaper = paperDiv.addEventListener('click',clickedPaper);;
function clickedPaper(){
	computerPlay();
	pPlay.textContent = 'You played PAPER!'
	return 'paper'
}
const playScissors = scissorsDiv.addEventListener('click',clickedScissors);;
function clickedScissors(){
	computerPlay();
	pPlay.textContent = 'You played SCISSORS!'
	return 'scissors'
}

 

 



inst.textContent = "Who won?";//use these in the loops
//let answer = prompt();
//let computerSelection = computerPlay();
//winner.textContent = computerSelection+" "+round(playerSelection,computerSelection);

function computerPlay(){
	//Generate a random number between 0 & 2 to represent each scenario
	//0-Rock, 1-Paper, 2-Scissors.
	let num = Math.floor(Math.random()*3);
	let comPlay;
	//lets convert to answers this time
	switch(num) {
  		case 0:
		cPlay.textContent = 'Computer played ROCK!';
		comPlay="rock";
    		break;
  		case 1:
		cPlay.textContent = 'Computer played PAPER!';
		comPlay="paper";
    		break;
  		case 2:
		cPlay.textContent = 'Computer played SCISSORS!';
		comPlay="scissors";
    		break;
    	}
	return comPlay;
}
function round(playerSelection, computerSelection){
	if ((playerSelection==computerSelection)){
		return "draw";
	} else if ((playerSelection=="rock"&&computerSelection=="scissors")||(playerSelection=="paper"&&computerSelection=="rock")||
			(playerSelection=="scissors"&&computerSelection=="paper")) {
		return "win";
	} else if ((playerSelection=="scissors"&&computerSelection=="rock")||(playerSelection=="rock"&&computerSelection=="paper")||
			(playerSelection=="paper"&&computerSelection=="scissors")) {
		return "lose";
	} else {
		return "Something is wrong";
	}
}
function game() {
	//initialize scores for the full game
	let playerScore = 0;
	let computerScore = 0;
}

