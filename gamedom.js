const inst = document.getElementById('instructions');
const winner = document.getElementById('winner');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const rock = document.getElementById('rock');
const paper  = document.getElementById('paper');
const scissors = document.getElementById('scissors');

 

 



inst.textContent = "Does this work?";//use these in the loops
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
		comPlay="rock";
    		break;
  		case 1:
		comPlay="paper";
    		break;
  		case 2:
		comPlay="scissors";
    		break;
    	}
    	console.log(comPlay);
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

