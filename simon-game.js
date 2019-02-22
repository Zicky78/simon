let score = 0;
const possibleAnswers = ['green', 'red', 'yellow', 'blue'];
let playerAnswers = [];
let simonAnswers = [];
let gameOver = false;
let playerCanAnswer = false;
let simonSays = true;
let answer = '';
let start = true;
let classicMode = false;
let expertMode = false;

function gameLoop() {
    if (start === false) {
        document.getElementById('display').innerText = '';
        if (simonSays === true) {
            
            if (classicMode) {
                generateAnswer();
                playAll();
                simonSays = false;
                playerCanAnswer = true;
                
            }
            if (expertMode) {
                
                generateExpert();
                playAll();
                simonSays = false;
                playerCanAnswer = true;
               
            }
        }
       

        if (playerAnswers.length === simonAnswers.length) {
            checkAnswers();
            simonSays = true;
            playerCanAnswer = false;
            clearPlayerAnswers();
            if (expertMode) {
                clearSimonAnswers();
            }
        }

        if (gameOver === true) {
            document.write('gameover');
        } else {
            document.getElementById('score').innerText = "Score: " + score;
        }
    } else {
        document.getElementById('display').innerText = 'Choose a Mode to Start!'
    }
    window.requestAnimationFrame(gameLoop);
}

gameLoop();