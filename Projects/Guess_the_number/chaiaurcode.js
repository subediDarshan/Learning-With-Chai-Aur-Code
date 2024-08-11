let number = Math.floor(Math.random() * 100) + 1;

let playGame = true;

let guess = {
  remaining: parseInt(document.querySelector('.lastResult').textContent),
};

let form = document.querySelector('form');

// console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (playGame) {
    updateGuessRemaining(guess);
    let myGuess = parseInt(document.querySelector('#guessField').value);

    if (number == myGuess) {
      updatePrevGuess(myGuess);
      display('CORRECT');
    } else if (number > myGuess) {
      updatePrevGuess(myGuess);
      if (guess.remaining == 0) playGame = false;
      display('High');
      // if guessRemaining is 0 then stop
    } else {
      updatePrevGuess(myGuess);
      if (guess.remaining == 0) playGame = false;
      display('Low');
      // if guessRemaining is 0 then stop
    }
  } else {
    display('You lost');
    display(`Number was ${number}`);
    playAgainButton();
  }
});

function updatePrevGuess(myGuess) {
  document.querySelector('.guesses').innerHTML += `${myGuess} `;
}

function updateGuessRemaining(guess) {
  guess.remaining--;
  document.querySelector('.lastResult').innerHTML = guess.remaining;
}

function display(message) {
  document.querySelector('.lowOrHi').innerHTML = message;
}

function playAgainButton() {
  let button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Play Again');
  button.addEventListener('click', (e) => {
    number = Math.floor(Math.random() * 100) + 1;
    document.querySelector('#guessField').value = '';
    document.querySelector('.guesses').innerHTML = '';
    guess.remaining = 10;
    document.querySelector('.lastResult').innerHTML = '10';
    document.querySelector('.lowOrHi').innerHTML = '';
    playGame = true;
  });
  document.querySelector('.lowOrHi').appendChild(button);
}
