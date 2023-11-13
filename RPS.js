//Creating a score board with the use of objects
let score = JSON.parse(localStorage.getItem ('score')) || { wins: 0, losses: 0, ties: 0 };
let result = '';
updateScoreElement ();

// Function for the computer's move 
function pickComputerMove () {
  const randomNumber = Math.random (); 
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) { 
    computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1) { 
    computerMove = 'scissors';
  }

	return computerMove;
}

function setResult(value) {
	result = value;
}
  
// Create a playGame function with the parameter of playerMove 
function playGame (playerMove) {
	const computerMove = pickComputerMove ();
	
	//Here if playerMove is scissors, this will be the conditional statements 
	if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You lose.';
		} else if (computerMove === 'paper') {
			result = 'You win.';
		} else if (computerMove === 'scissors') {
			result = 'Tie.';
		}

		//Here if playerMove is paper, this will be the conditional statements
	} else if (playerMove === 'paper') {
				if (computerMove === 'rock') {
			result = 'You win.';
		} else if (computerMove === 'paper') {
			result = 'Tie.';
		} else if (computerMove === 'scissors') {
			result = 'You lose.';
		}
		
		//Here if playerMove is rock, this will be the conditional statements
	} else if (playerMove === 'rock') {
				if (computerMove === 'rock') {
			result = 'Tie.';
		} else if (computerMove === 'paper') {
			result = 'You lose.';
		} else if (computerMove === 'scissors') {
			result = 'You win.';
		}
	}

	//Score updating
	if (result === 'You win.') {
		score.wins = score.wins += 1;
	} else if (result === 'You lose.') {
		score.losses = score.losses += 1
	} else if (result === 'Tie.') {
		score.ties = score.ties += 1
	} 

	//Saving in local storage so score does not reset after refresh 
	localStorage.setItem('score', JSON.stringify (score));
	
	updateScoreElement ();

	document.querySelector ('.js-result').innerHTML = result;
	document.querySelector ('.js-moves').innerHTML = `You chose <img src="${playerMove}-emoji.png" class = "move-icon">
	<img src = "${computerMove}-emoji.png" class = "move-icon"> Computer chose` ;
}

// Function for scare updater 
function updateScoreElement() {
  document.querySelector ('.js-score').innerHTML = `Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
};

