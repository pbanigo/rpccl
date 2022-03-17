function computerPlay(){
	//Generate a random number between 0 & 2 to represent each scenario
	//0-Rock, 1-Paper, 2-Scissors.
	let num = Math.floor(Math.random()*3);
	return num;
}
function round(playerSelection, computerSelection){
	let player;
	switch(playerSelection) {
		//I'd convert whatever is entered by player to lower case
  case "rock":
    player = 0; //then convert to an integer using switch for easier comparison
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
    //a regex can be used here if an input form is built
    //(rock|paper|scissors)
		}
	if ((player==0&&computerSelection==2)||(player==1&&computerSelection==0)||
			(player==2&&computerSelection==1)){
		return "You Win!";// for winning scenarios, return message
	} else if((player==2&&computerSelection==0)||(player==0&&computerSelection==1)||
			(player==1&&computerSelection==2)) {
		return "You Lose!";// for losing scenarios return message
	} else if((player==computerSelection)) {
		return "It's a draw";// if it wasn't won or lost then it's a draw
	}  else {
		return "Something went wrong";//something actually went wrong :(
	}
}

function game (){
	//initialize scores for the full game
	let playerScore = 0;
	let computerScore = 0;
	//loop for number of rounds needed
	for (let i = 0; i < 3; i++) {
	//prompt for player to enter option
	let playerSelection = prompt('Enter rock, paper or scissors');
	//convert to lower case for uniformity
	playerSelection = playerSelection.toLowerCase();
	//the computer's selection would be the result of the computerPlay() function
	const computerSelection = computerPlay();
	//Show what player and computer played
	console.log(playerSelection);
	console.log(computerSelection);
	//save gameplay in a variable
	let each = round(playerSelection, computerSelection);
	//increment scores on each win or loss
	switch(each) {
  		case "You Win!":
		playerScore+=1;
    		break;
  		case "You Lose!":
		computerScore+=1;
    		break;
 		 case "It's a draw"||"Something went wrong":
    		break;// end the loop
    	}
	} 
	//outside the loop, give results
	if (playerScore>computerScore) {
		return "You scored "+ playerScore + " Computer scored "+computerScore+" You Win!";
	} else {
		return "You scored "+ playerScore + " Computer scored "+computerScore+" You lost!";
		
	}

}
console.log(game());