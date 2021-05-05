// REFACTORING _ dry code
'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;

// initial score
let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   string so need to convert to it Number
  console.log(guess, typeof guess);

  //  assuming that there is no input --> if there is no guess (!guess).  guess = 0 so its falsy, so its converted to false, !0 = true, 
  // cover all scenarios and if the guess is wrong descrease it by 1

  //   no input
  if (!guess) {
    //     document.querySelector('.message').textContent = 'no number';
    displayMessage('no number..');

    //     guessed
  } else if (guess === secretNumber) {
    if (score > 1) {
      //       document.querySelector('.message').textContent = "Yay you've guessed";
      displayMessage("Yay you've guessed");
      //       show the number
      document.querySelector('.number').textContent = secretNumber;
      // green color
      document.querySelector('body').style.backgroundColor = '#60b347';
      //       bigger width
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = 0;
    }
 
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //       document.querySelector('.message').textContent =
      //         guess > secretNumber ? 'Too hight' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too hight' : 'Too low');
      //     score = score -1
      score--;
      //     display it
      document.querySelector('.score').textContent = score;
    } else {
      //       document.querySelector('.message').textContent = 'you lost';
      displayMessage('you have lost');
      document.querySelector('.score').textContent = 0;
    }

    //     too low
  }
});

// refreshing the game, reseting all after clicking AGAIN


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing..';
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
