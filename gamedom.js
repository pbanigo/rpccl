const inst = document.getElementById('instructions');
const cPlay = document.getElementById('cPlay');
const pPlay = document.getElementById('pPlay');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const currentPlay = document.getElementById('current');
const currentRound = document.getElementById('thisRound');
const game  = document.getElementById('game');
const synth = window.speechSynthesis;


let playerScore = 0;
let computerScore = 0;



function playNow(){
	currentRound.style.display = "none";
	currentPlay.style.display = "none";
	game.style.display = "block";
	synth.speak(new SpeechSynthesisUtterance(inst.textContent));
	document.getElementById('start').setAttribute('onclick','window.location.reload()');
	document.getElementById('start').textContent = "Reload!";
	let thisRound = 1;
	const plays = document.querySelectorAll("div.item");
	plays.forEach(play => {

		play.addEventListener('click', function here(event) {
			currentPlay.style.display = "flex";
			currentRound.style.display = "block";
			currentRound.textContent = `ROUND: ${thisRound}!`;
			playerSelection = play.id;
			computerSelection = computerPlay();
			pPlay.textContent = `You played ${playerSelection.toUpperCase()}!`
			round(playerSelection,computerSelection);
			thisRound+=1;


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
		//return "win";
	} else if ((playerSelection=="scissors"&&computerSelection=="rock")||(playerSelection=="rock"&&computerSelection=="paper")||
		(playerSelection=="paper"&&computerSelection=="scissors")) {
		computerScore++;
		pScore.textContent = playerScore;
		cScore.textContent = computerScore;
		inst.textContent = "Computer Wins!";
		synth.speak(new SpeechSynthesisUtterance(`for ${currentRound.textContent} ${inst.textContent}`));
		//return "lose";
	} else {
		inst.textContent =  "Something is wrong";
	}


	if (playerScore==5 || computerScore==5){
		game.style.display = "none";
		document.getElementById('start').textContent = "Replay!";
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



