// REFACTORING _ dry code
'use strict';

// to change the text
// document.querySelector('.message').textContent = 'Hello Lucky you!';
//  to see the value of the input after clicking check

// defining the secret number to compare it to the value from the input, random number multiply by 20 +1 to make sure 20 is incuded and get rid of any fractional digits, want to show only  integer(whole number)
// using let if we want to reasign the value later
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// initial score
let score = 20;

let highscore = 0;
// creating the func and our parameter is message, setting the class mesage from html and and its gonna be equal to thee msg that is passed into the function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   string so need to convert to it Number
  console.log(guess, typeof guess);

  //  assuming that there is no input --> if there is no guess (!guess). Remember that if we dont put anything inside guess = 0 so its falsy, so its converted to false, but we want sth to happen whenever guess is false so here we actually want a true value as !0 = true, so we use negation (NOT operator to convert it to true) operator to invert false to true
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
    //     when the guess is wrong, we change the msg here thanks to uternity operator
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
// an anonymous handle function inside

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
