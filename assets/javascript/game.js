
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins_num = 0;

var losses_num = 0;

var guesses_remaining_num = 9;


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

$(document).ready(function () {
    $("#wins").append(wins_num);
    $("#losses").append(losses_num);
    $("#guesses").append(guesses_remaining_num);

});


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;


    console.log(userGuess);


    //check if user won, reset game
    //if not, display guessed letter and decrease guesses left by 1
    //if guesses left reaches 0, increase losses by 1, reset game
    if (userGuess !== computerGuess && guesses_remaining_num >= 2) {
        guesses_remaining_num--;
        $("#guesses").replaceWith('<span id="guesses">' + guesses_remaining_num + '</span>');
        $("#letters_guessed").append(userGuess + " ");

    }
    else if (userGuess === computerGuess) {
        wins_num++;
        $("#wins").replaceWith('<span id="wins">' + wins_num + '</span>');
        $("#letters_guessed").replaceWith('<span id="letters_guessed"></span>');
        guesses_remaining_num = 9;
        $("#guesses").replaceWith('<span id="guesses">' + guesses_remaining_num + '</span>');
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    else {
        losses_num++;
        $("#losses").replaceWith('<span id="losses">' + losses_num + '</span>');
        $("#letters_guessed").replaceWith('<span id="letters_guessed"></span>');
        guesses_remaining_num = 9;
        $("#guesses").replaceWith('<span id="guesses">' + guesses_remaining_num + '</span>');
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
}
