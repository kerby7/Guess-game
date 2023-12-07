'use strict';
/* JS code for click and logic events of the game */

/* Logic for holding a secret number between 1-20 */
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

/* Logic for number input and checking with the random number for correct guess */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);



  if (!guess) {
    displayMessage('⛔️ Invalid input');
  } else if (guess === number) {
    /* Correct answer */
    displayMessage('Correct Answer 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  }
  else if(guess !== number){
    if(score > 1){
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage('You lost the game :(');
      document.querySelector('.score') = 0;
    }
  }
});

/* Game reset functionality */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
