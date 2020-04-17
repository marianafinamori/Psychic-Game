var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var computerChoice;

var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongLettersText = document.getElementById("wrong-letters-text");
var alert = document.querySelector('.alert');
var wrongLetter;
    
//App randomly picks a letter
function ramdonLetter() {
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChoice)
        
    //Function compares user's guess and computer's choice
    document.onkeyup = function(event) {
            
        var userGuess = event.key.toUpperCase();
        console.log("inside " + computerChoice)
 
        if (userGuess === computerChoice && computerChoices.includes(userGuess)) {
            wins++;
            guessesLeft = 10;
            wrongGuesses = [];
            wrongLettersText.innerHTML = " ";
            console.log(wins);
            ramdonLetter();
        } else if (userGuess != computerChoice && computerChoices.includes(userGuess)) {
            guessesLeft--;
            wrongGuesses.push(userGuess);
            wrongGuesses.forEach((wrongGuess, index)=> {
                wrongLetter = document.createElement('div');
                wrongLetter.setAttribute("class", "wrongLetter");
                wrongLetter.append(wrongGuess)
            })
            wrongLettersText.append(wrongLetter);
            console.log(wrongGuesses);
        }    

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 10;
            wrongGuesses = [];
            console.log(losses);
            document.querySelector(".wrongLetter").remove()
            wrongLettersText.innerHTML = " ";
            console.log("worked?")
            ramdonLetter();
        }

        if (computerChoices.indexOf(userGuess) == -1) {
            alert.classList.add('error');
            alert.innerHTML = "You need to type only letters";
            setTimeout(() => {
                alert.innerHTML = " ";
                alert.classList.remove('error')
            }, 2000);
        }
        
        winsText.textContent = wins;
        lossesText.innerHTML = losses;
        guessesLeftText.innerHTML = guessesLeft;   
    }
}