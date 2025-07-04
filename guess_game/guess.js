let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
});

const again = window.document.querySelectorAll(".again");
const checkBtn = window.document.querySelectorAll(".check");
const message = window.document.querySelectorAll(".message");
const highscoreNodes = window.document.querySelectorAll(".highscore");
const scoreNodes = window.document.querySelectorAll(".score");
const numberNodes = window.document.querySelectorAll(".number");
const guessNodes = window.document.querySelectorAll(".guess");

let random = Math.trunc(Math.random() * 100) + 1;
let scores = 20;
console.log(random);

const checkfunc = () => {
  const guessValue = Number(guessNodes[0].value);
  console.log(guessValue);

  if (!guessValue) {
    message[0].textContent = " No number!";
  } else if (guessValue === random) {
    highscoreNodes[0].textContent = scores;
    document.querySelector("body").style.backgroundColor = "green";
    numberNodes[0].textContent = random;
  } else if (guessValue > random) {
    scores -= 1;
    scoreNodes[0].textContent = scores;
    message[0].textContent = "Too high!";
  } else if (guessValue < random) {
    scores -= 1;
    scoreNodes[0].textContent = scores;
    message[0].textContent = "Too low!";
  } 
};
checkBtn[0].addEventListener('click', checkfunc);