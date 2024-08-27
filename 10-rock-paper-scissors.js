let score = JSON.parse(localStorage.getItem('score')) || {wins: 0,
  losses: 0,
  ties: 0
}
updateScoreElement();

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
*/

function pickComputerMove() {
randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1 /3){
  // console.log('rock');
  computerMove = 'rock';
}
else if (randomNumber > 1/3 && randomNumber < 2/3) {
  // console.log('paper');
  computerMove = 'paper';
}
else {
  // console.log('scissors');
  computerMove = 'scissors';
}
return computerMove; // return on its own returns "undefined"
};

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
};
// function updateMovesElement(playerMove, computerMove) {
//   document.querySelector('.js-moves')
//   .innerHTML = `You picked ${playerMove || 'not yet choosen'}, Computer picked ${computerMove}`
// };
// function updateResulteElement(result) {
//   document.querySelector('.js-result')
//   .innerHTML = `Result: ${result}`
// };



function playGame(playerMove) {
let result = "";
const computerMove = pickComputerMove();
if (playerMove === 'scissors') {

    if (computerMove === 'rock'){
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors'){
      result = 'Tie.';
    } ;
  } else if (playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors'){
      result = 'You lose.';
    } ;
  } else if(playerMove == 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors'){
      result = 'You win.';
    } ;
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  // updateMovesElement(playerMove, computerMove);
  // updateResultElement(result);
  document.querySelector('.js-moves')
    .innerHTML = `You
<img src=images/%{PlayerMove}" class="move-icon">
<img src="images/scissors-emoji.png" class="move-icon">
Computer`
    

  // document.querySelector('.js-moves')
  // .innerHTML = `You picked ${playerMove || 'not yet choosen'}, Computer picked ${computerMove}`


  document.querySelector('.js-result')
    .innerHTML = `Result: ${result}`
};



// console.log(true && false);
// console.log(0.2 >= 0 && 0.2 < 1 / 3);
// console.log(true || false)
// console.log(!true);

// You
// <img src="images/rock-emoji.png" class="move-icon">
// <img src="images/scissors-emoji.png" class="move-icon">
// Computer