 How This Works
Random Number Generation: The random number is generated using Math.random() in JavaScript, which produces a floating-point number between 0 and 1. Multiplying by 100 and rounding it gives an integer between 1 and 100.
Feedback: The program checks whether the guess is lower, higher, or equal to the random number and provides feedback accordingly.
Attempts Tracking: Each time the user submits a guess, the attempts counter increments, and the current number of attempts is shown.
End of Game: Once the user guesses the correct number, the game shows a congratulatory message and ends. The user can also click "Exit" to end the game early.
