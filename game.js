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
	switch(playerSelection) {
		//I'd convert whatever is entered by player to lower case
  case "rock":
    player = 0; //then convert to an integer using switc for easier comparison
    break;
  case "paper":
    player = 1;
    break;
  case "scissors":
    player = 2;
    break;
  default:
  	//player = prompt('Enter rock, paper or scissors');
    alert("Enter rock, paper or scissors"); //prompts to enter the right word if misspelt
    //a regex can be used here if an imput form is built
		}
	if ((player==0&&computerSelection==2)||(player==1&&computerSelection==0)||(player==2&&computerSelection==1)){
		return "You Win!";// for winning scenarios, return message
	} else if((player==2&&computerSelection==0)||(player==0&&computerSelection==1)||(player==1&&computerSelection==2)) {
	return "You Lose!";// for losing scenarios return message
	} else if((player==computerSelection)) {
	return "It's a draw";// for losing scenarios return message
	}  else {
		return "Something went wrong";//if it wasn't won or lost then it's a draw
	}
}

function game (){
	let playerSelection = prompt('Enter rock, paper or scissors');
	playerSelection = playerSelection.toLowerCase();
	const computerSelection = computerPlay();
	console.log(playerSelection);
	console.log(computerSelection);
	return round(playerSelection, computerSelection);

}
//console.log(computerSelection);
//console.log(round(playerSelection, computerSelection));
console.log(game());