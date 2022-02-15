function computerPlay(){
	//Generate a random number between 0 & 2 to represent each scenario
	//0-Rock, 1-Paper, 2-Scissors.
	let num = Math.floor(Math.random()*3);
	return num;

	//let play;
	/*switch(num) {
  case 0:
    play = "Rock";
    break;
  case 1:
    play = "Paper";
    break;
  default:
    play = "Scissors";
}

	return console.log(play);*/
}
//console.log(computerPlay());
function round(playerSelection, computerSelection){
	let player;
	switch(playerSelection.toLowerCase()) {
  case "rock":
    player = 0;
    break;
  case "paper":
    player = 1;
    break;
  case "scissors":
    player = 2;
    break;
  default:
    alert("Enter rock, paper or scissors");
		}
	if ((player==0&&computerSelection==2)||(player==1&&computerSelection==0)||(player==2&&computerSelection==1)){
		return "You Win!";
	} else if((player==2&&computerSelection==0)||(player==0&&computerSelection==1)||(player==1&&computerSelection==2)) {

	return "You Lose!";
	}  else {
		return "It's a draw";

	}
}

function game (){
	
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));