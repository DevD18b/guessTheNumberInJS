let randomNumber = parseInt(Math.random() * 100 + 1);
//bahot saari values ko hum consider karenge
// on click submit value ko lene keh liyee....
const submit = document.querySelector('#subt');
// user input handle krne keh liyee.
const userInput = document.querySelector('#guessField');
// use guesses note down krne keh liyee.
const guessSlot = document.querySelector('.guesses');
// remaining attempt keh liye.
const remaining = document.querySelector('.lastResult');
// range keh liye below
const lowOrHigh = document.querySelector('.lowOrHi');
// naya message keh liye ki firse start krna hai toh.
const startOver = document.querySelector('.resultParas');

// kuch values ko hum inject karenge isliyee.
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // yeh aapke input ko check karegaa ki kya yeh user input aapne daala hai
  // is it correct to lie under the range from 1 to 100.
  if (isNaN(guess)) {
    alert(`Please enter valid input : ${guess}`);
  } else if (guess > 100) {
    alert('Please enter the number less than 100');
  } else if (guess < 1) {
    alert(`Please enter the number more  than 1 `);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over the target was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // yeh message print karega
  // weather the value is low high equal.
  if (guess === randomNumber) {
    displayGuess(`\n\n Hurrahhhh!!!You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The Number is TOO LOWWWWW `);
  } else if (guess > randomNumber) {
    displayMessage(`The Number is TOO Highhhhh`);
  }
}
function displayGuess(guess) {
  // current input ko clean up kro
  userInput.value = '';
  // jo guess kiya tha previously display kro
  guessSlot.innerHTML += `${guess}  `;
  // number of guess increase kro
  numGuess++;
  // and the remaining guesses ko find out kro.
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // create a button where in which we click it to reset every thing and start from scratch.

  userInput.value = '';
  // yeh isliye taaki aage aur values woh consider naa karehh and just here on pura wrap
  // up kr deh game kooo.
  userInput.setAttribute('disabled', '');
  // ek para graph hai mere pass
  // usme meh ek button ki
  // functionality add up kr dungaa.
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start a new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  startNewGame();
}
function startNewGame() {
  // jab meh start a new game pr click karu
  // to woh scratch seh start kre games koo
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    //playGame = true;
    numGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
