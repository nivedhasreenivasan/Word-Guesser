let numberOfGuesses = 0
let fiveLetterWords = [
    'APPLE',
    'HELLO',
    'ABUSE', 'ADULT', 'AGENT', 'ANGER', 'APPLE', 'AWARD',
    'BASIS', 'BEACH', 'BIRTH', 'BLOCK', 'BLOOD', 'BOARD', 'BRAIN', 'BREAD', 'BREAK', 'BROWN', 'BUYER',
    'CAUSE', 'CHAIN', 'CHAIR', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CLAIM', 'CLASS', 'CLOCK', 'COACH', 'COAST', 'COURT', 'COVER', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CYCLE',
    'DANCE', 'DEATH', 'DEPTH', 'DOUBT', 'DRAFT', 'DRAMA', 'DREAM' ,'DRESS' ,'DRINK' , 'DRIVE',
    'EARTH', 'ENEMY', 'ENTRY', 'ERROR', 'EVENT', 'FAITH', 'FAULT', 'FIELD', 'FIGHT', 'FINAL', 'FLOOR', 'FOCUS', 'FORCE', 'FRAME', 'FRANK', 'FRONT', 'FRUIT', 
    'GLASS', 'GRANT', 'GRASS', 'GREEN', 'GROUP', 'GUIDE', 'HEART', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'IMAGE', 'INDEX', 'INPUT', 'ISSUE',
    'JAPAN', 'JONES', 'JUDGE',
    'KNIFE', 'LAURA', 'LAYER', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LUNCH',
    'MAJOR', 'MARCH', 'MATCH', 'METAL', 'MODEL', 'MONEY', 'MONTH', 'MOTOR', 'MOUTH', 'MUSIC',
    'NIGHT', 'NOISE', 'NORTH', 'NOVEL', 'NURSE',
    'OFFER', 'ORDER', 'OTHER', 'OWNER', 
    'PANEL' ,'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIZE', 'PROOF', 
    'QUEEN', 
    'RADIO', 'RANGE', 'RATIO', 'REPLY', 'RIGHT', 'RIVER', 'ROUND', 'ROUTE', 'RUGBY', 
    'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SHAPE', 'SHARE', 'SHEEP', 'SHEET', 'SHIFT', 'SHIRT', 'SHOCK', 'SIGHT', 'SIMON', 'SKILL', 'SLEEP', 'SMILE', 'SMITH', 'SMOKE', 'SOUND', 'SOUTH', 'SPACE'

];
let currentWord = ''; 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('guess-button').addEventListener('click', () => {
        guess(); 
    });
    document.getElementById('new-game').addEventListener('click', () => {
        startGame(); 
    });

    startGame(); 
});

/**
 * Start the game
 * 
 * Get a random word and save it to currentWord.
 * Blank out guess text area
 * Blank out guesses div 
 */
function startGame() {
    currentWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length-1)];
    document.getElementById('guess').value = ''; 
    document.getElementById('guesses').innerHTML = ''; 
    // document.getElementById('guess').value.toUpperCase(); 
    // document.getElementById('guesses').innerHTML;  

}

/**
 * Handle a guess
 * 
 * Read the guess
 * Compare the guess to currentWord
 * Append to guesses div
 * Check if win
 */
function guess() {
    numberOfGuesses += 1;
    var guessesdiv = document.getElementById('guesses');
    let guessedWord = document.getElementById('guess').value.toUpperCase(); 
    let guessedWordArray = guessedWord.split('')
    let currentWordArray = currentWord.split('');
    let notGuessedLetters = currentWord.split('')

    if (guessedWord.length == 5)
    {
        for(let i = 0; i < 5; i++)
        {
    
             if (guessedWordArray[i] == currentWordArray[i])
            {
                guessesdiv.innerHTML += '<span style= "color:green">' + guessedWordArray[i] + "</span>";
            }
            else if (guessedWordArray[i] != currentWordArray[i])
            {
                if (guessedWordArray[0] != currentWordArray[0] && guessedWordArray[1] != currentWordArray[1] && guessedWordArray[2] != currentWordArray[2] && guessedWordArray[3] != currentWordArray[3] && guessedWordArray[4] != currentWordArray[4] && currentWordArray.includes(guessedWordArray[i]))
                {
                        guessesdiv.innerHTML += '<span style= "color: orange">' + guessedWordArray[i] + "</span>";
                }
                else
                {
                        guessesdiv.innerHTML += '<span style= "color:red">' + guessedWordArray[i] + "</span>";
                }
            }


           
        }

        if (guessedWord == currentWord)
        {
            window.alert("YOU WIN!!");
        }
    }

    guessesdiv.innerHTML += '<p></p>';
     
    if(numberOfGuesses == 6)
    {
        window.alert("YOU LOSE!!");
    }

}
