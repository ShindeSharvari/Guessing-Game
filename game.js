let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

function makeGuess() {
    const guess = document.getElementById("guess").value;
    const result = document.getElementById("result");

    if (!guess) {
        result.textContent = "Please enter a number.";
        return;
    }

    tries++;

    if (guess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        result.textContent = "Too high! Try again.";
    } else {
        result.textContent = `Congratulations! You guessed the number in ${tries} tries.`;
        resetGame();
    }
}

function exitGame() {
    const result = document.getElementById("result");
    result.textContent = "Thanks for playing! Game over.";
    disableGame();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    tries = 0;
}

function disableGame() {
    document.getElementById("guess").disabled = true;
    document.querySelector("button[onclick='makeGuess()']").disabled = true;
    document.querySelector("button[onclick='exitGame()']").disabled = true;
}
