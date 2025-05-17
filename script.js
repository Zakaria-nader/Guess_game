let secretNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "يرجى إدخال رقم صحيح بين 1 و 100.";
    message.style.color = "red";
  } else if (userGuess === secretNumber) {
    message.textContent = "أحسنت! لقد خمّنت الرقم الصحيح!";
    message.style.color = "green";
    guessButton.disabled = true;
    restartButton.style.display = "inline-block";
  } else if (userGuess > secretNumber) {
    message.textContent = "حاول برقم أصغر.";
    message.style.color = "orange";
  } else {
    message.textContent = "حاول برقم أكبر.";
    message.style.color = "orange";
  }
});

restartButton.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.textContent = "";
  guessButton.disabled = false;
  restartButton.style.display = "none";
});