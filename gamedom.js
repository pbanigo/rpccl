//Pick out elements that would bbe manipulated using their ID's
const inst = document.getElementById('instructions');
const cPlay = document.getElementById('cPlay');
const pPlay = document.getElementById('pPlay');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const currentPlay = document.getElementById('current');
const currentRound = document.getElementById('thisRound');
const game  = document.getElementById('game');
const synth = window.speechSynthesis; //Added Voice synthesis
//Initialised scores to Zero
let playerScore = 0;
let computerScore = 0;
//playNow is called by the onClick on the Play button in the HTML
function playNow(){
	//Hiding unnecessary parts of the site till needed
	currentRound.style.display = "none";
	currentPlay.style.display = "none";
	game.style.display = "block"; //This displays the game div after the play button is clicked
	synth.speak(new SpeechSynthesisUtterance(inst.textContent));//This reads any text in that element
	//change button to a reload button after clicking & rewrites the text in it
	document.getElementById('start').setAttribute('onclick','window.location.reload()');
	document.getElementById('start').textContent = "Reload!";
	//initialises the round
	let thisRound = 1;
	//selects all divs with class .item
	const plays = document.querySelectorAll("div.item");
	plays.forEach(play => {

		play.addEventListener('click', function here(event) {
			currentPlay.style.display = "flex";//brings up the hidden element
			currentRound.style.display = "block";//brings up the hidden element
			currentRound.textContent = `ROUND: ${thisRound}!`;//Displays round number
			//for each click, saves the item ID in player selection
			playerSelection = play.id;
			computerSelection = computerPlay();//saves result of computerPlay function
			pPlay.textContent = `You played ${playerSelection.toUpperCase()}!`//Displays what player played
			round(playerSelection,computerSelection);//runs the round function using both values
			thisRound+=1;//increments the round we are in


		})
	})


}

function computerPlay(){
	//Generate a random number between 0 & 2 to represent each scenario
	//0-Rock, 1-Paper, 2-Scissors.
	let num = Math.floor(Math.random()*3);
	let comPlay;
	//lets convert to answers this time
	switch(num) {
		case 0:
		//shows what computer played
		cPlay.textContent = 'Computer played ROCK!';
		//converts the number to a usable string
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
	return comPlay;//our result
}
function round(playerSelection, computerSelection){
	if ((playerSelection==computerSelection)){
		inst.textContent = "It's a Draw";
		synth.speak(new SpeechSynthesisUtterance(`for ${currentRound.textContent} ${inst.textContent}`));
		//return "draw";
	} else if ((playerSelection=="rock"&&computerSelection=="scissors")||(playerSelection=="paper"&&computerSelection=="rock")||
		(playerSelection=="scissors"&&computerSelection=="paper")) {
		playerScore++;
		pScore.textContent = playerScore;
		cScore.textContent = computerScore;
		inst.textContent = "You Win!";
		synth.speak(new SpeechSynthesisUtterance(`for ${currentRound.textContent} ${inst.textContent}`));
		//return "win", write scores, increment player score;
	} else if ((playerSelection=="scissors"&&computerSelection=="rock")||(playerSelection=="rock"&&computerSelection=="paper")||
		(playerSelection=="paper"&&computerSelection=="scissors")) {
		computerScore++;
		pScore.textContent = playerScore;
		cScore.textContent = computerScore;
		inst.textContent = "Computer Wins!";
		synth.speak(new SpeechSynthesisUtterance(`for ${currentRound.textContent} ${inst.textContent}`));
		//return "lose" write scores, increment computeer score;
	} else {
		inst.textContent =  "Something is wrong";// why is this here?
	}


	if (playerScore==5 || computerScore==5){
		//hides game area if winning condition met
		game.style.display = "none";
		document.getElementById('start').textContent = "Replay!";//change button to a replay button
		if (playerScore>computerScore){
			whoWon = "You won!"
			message = "Congrats!"
		} else {
			whoWon = "Computer Won!"
			message = "Better luck next time."
		}
		currentRound.textContent = `It's over! ${whoWon}! You scored ${playerScore} points & Computer scored ${computerScore} points. ${message}`;
		synth.speak(new SpeechSynthesisUtterance(currentRound.textContent));

	}
}



