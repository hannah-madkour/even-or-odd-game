let currentStreak = 0;
let highestStreak = 0;
let currentNumber = 0;
let timeLeft = 10;
let attemptsLeft = 5;
let timerInterval;
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
function updateNumber() {
  currentNumber = generateRandomNumber();
  document.getElementById(
    "numberDisplay"
  ).textContent = `Number: ${currentNumber}`;
}
function guessEven() {
  if (currentNumber % 2 === 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}
function guessOdd() {
  if (currentNumber % 2 != 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}
function correctGuess() {
  currentStreak++;
  if (currentStreak > highestStreak) {
    highestStreak = currentStreak;
  }
  updateStreaks();
  document.getElementById("result").textContent = "Correct!";
  updateNumber();
  resetTimer();
}
function wrongGuess() {
  currentStreak = 0;
  attemptsLeft--;
  updateStreaks();
  updateAttempts();
  document.getElementById("result").textContent = "False!";
  updateNumber();
  resetTimer();
  if (attemptsLeft === 0) {
    endgame();
  }
}
function updateStreaks() {
  document.getElementById("currentStreak").textContent = currentStreak;
  document.getElementById("highestStreak").textContent = highestStreak;
}
function updateAttempts() {
  document.getElementById("attemptsLeft").textContent = attemptsLeft;
}
function startTimer() {
  timeLeft = 10;
  document.getElementById("timer").textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      wrongGuess();
    }
  }, 1000);
}
function resetTimer() {
  clearInterval(timerInterval);
  startTimer();
}
function endgame() {
  clearInterval(timerInterval);
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("gameOverMessage").style.display = "block";
  document.getElementById("evenBtn").disabled = true;
  document.getElementById("oddBtn").disabled = true;
}
function resetGame() {
  currentStreak = 0;
  highestStreak = 0;
  attemptsLeft = 0;
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("gameOverMessage").style.display = "none";
  document.getElementById("evenBtn").disabled = false;
  document.getElementById("oddBtn").disabled = false;
  updateNumber();
  updateAttempts();
  updateStreaks();
  startTimer();
}
