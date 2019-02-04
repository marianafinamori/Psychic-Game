
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var wrongGuesses = [];

        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    

        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesLeftText = document.getElementById("guesses-left-text");
        var wrongLettersText = document.getElementById("wrong-letters-text");

    
        document.onkeyup = function(event) {
        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
           

            if (userGuess === computerGuess) {
                wins++;
                guessesLeft = 10;
                wrongGuesses = [];
                console.log(wins);
            } 
            else {
                guessesLeft--;
                wrongGuesses.push(userGuess);
                console.log(wrongGuesses);
                console.log(guessesLeft);
            }    

            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                wrongGuesses = [];
                console.log(losses);
            }
        
            winsText.textContent = wins;
            lossesText.innerHTML = losses;
            guessesLeftText.innerHTML = guessesLeft;
            wrongLettersText.innerHTML = wrongGuesses;
            console.log(guessesLeft);
            
        };