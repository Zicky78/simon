/* ***VARIABLES*** */

//All possible answers array
const possibleAnswers = ['green', 'red', 'yellow', 'blue'];
//Score counter
let score = 0;
//Array to store player answers
let playerAnswers = [];
//Array to store Simon's answers
let simonAnswers = [];
//Booleans
let gameOver = false;
let playerCanAnswer = false;
let simonSays = true;
let start = true;
let classicMode = false;
let expertMode = false;
//Initialized answer as empty string
let answer = '';

//Main function
function gameLoop() {
    //Nothing happens unless you pick a mode
    if (start === false) {
        //Sets display to empty string to get rid of start text
        document.getElementById('display').innerText = '';
        //If it is simons turn
        if (simonSays === true) {
            //If it is classic mode
            if (classicMode) {
                //Generate an answer
                generateAnswer();
                //Play through all the answers
                playAll();
                //End Simon's turn
                simonSays = false;
                //Begin player's turn
                playerCanAnswer = true;
                
            }
            //If Expert Mode
            if (expertMode) {
                //Generate multiple answers
                generateExpert();
                //Play through all answers
                playAll();
                //End Simon's turn
                simonSays = false;
                //Begin player's turn
                playerCanAnswer = true;
            }
        }

       //Once a player has entered in an equal amount of answers to Simon
        if (playerAnswers.length === simonAnswers.length) {
            //Check the answers to see if they match
            checkAnswers();
            //Begin Simon's turn
            simonSays = true;
            //End the player's turn
            playerCanAnswer = false;
            //Clear out the player's answers
            clearPlayerAnswers();
            //If in expert mode
            if (expertMode) {
                //Clear out Simon's answers
                clearSimonAnswers();
            }
        }

        //If gameover
        if (gameOver === true) {
            //Write gameover
            document.write('gameover');
        }
        //If not gameover
        else {
            //Target the score display, and update it
            document.getElementById('score').innerText = "Score: " + score;
        }
    }
    //If the game is not started
    else {
        //Target the main display and tell the player to select a mode
        document.getElementById('display').innerText = 'Choose a Mode to Start!'
    }
    //Loop through the game loop again
    window.requestAnimationFrame(gameLoop);
}

//Starts everything off
gameLoop();