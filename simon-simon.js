//Generates a random color answer
function generateAnswer() {
    //Sets answer to a random number between 0-3
    answer = Math.floor(Math.random() * 4);
    //Pushes the color that corresponds to that number into Simon's answers
    simonAnswers.push(possibleAnswers[answer]);
    //console.log('Simon says: ', possibleAnswers[answer]);
}

//Generates an amount of answers equal to the score
function generateExpert() {
    for (i = 0; i <= score; i++) {
        generateAnswer();
    }
}

//Loops through Simon's answers and plays the animation based on the color
function playAll() {
    //Sets i to 0
    let i = 0;

    //Sets an interval so that there is a pause between animations
    playInterval = setInterval(function () {
        //Switch case to check Simon's answers
        switch (simonAnswers[i]) {
            case 'green':
                console.log('SWITCH GREEN');
                playGreenAnimation();
                break;
            case 'red':
                console.log('SWITCH RED');
                playRedAnimation();
                break;
            case 'yellow':
                playYellowAnimation();
                console.log('SWITCH YELLOW');
                break;
            case 'blue':
                playBlueAnimation();
                console.log('SWITCH BLUE');
                break;
        }
        //If i is less than Simon's answers, increase i
        if (i < simonAnswers.length) {
            i++;
        }
        //Else, stop increasing i, break the interval, and stop playing animations
        else {
            clearInterval(playInterval);
        }
    }, 700);    
}

//Checks if the players answers match simon's answers
function checkAnswers() {
    //console.log(playerAnswers);
    //console.log(simonAnswers);

    //Loops through answers for however many answers there are
    for (i = 0; i < playerAnswers.length; i++) {
            //console.log('Player: ', playerAnswers[i]);
            //console.log('Simon: ', simonAnswers[i]);
        //If the answers match, do nothing
        if (playerAnswers[i] === simonAnswers[i]) {
            //console.log('correct');
        }
        //Else, gameover equals true
        else {
            //console.log('incorrect');
            gameOver = true;

        }
    }
    //Increase the score
    score++;
    //console.log('Score: ' + score);
}

//Clears simon's answers
function clearSimonAnswers() {
    //Sets Simon's answers to an empty array
    simonAnswers = [];
}