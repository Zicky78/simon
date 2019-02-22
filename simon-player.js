//Clears the player's answers
function clearPlayerAnswers() {
    //Sets the player's answers to an empty array
    playerAnswers = [];
}

/* ***EVENT LISTENERS FOR THE SQUARES */

//When clicked
greenBG.addEventListener('click', function () {
    //If the player can answer
    if (playerCanAnswer) {
        //Play the animation
        playGreenAnimation();
        //Push the player's answer into their array
        playerAnswers.push('green');
    }
});

redBG.addEventListener('click', function () {
    if (playerCanAnswer) {
        playRedAnimation();
        playerAnswers.push('red');
    }
});

yellowBG.addEventListener('click', function () {
    if (playerCanAnswer) {
        playYellowAnimation();
        playerAnswers.push('yellow');
    }
});

blueBG.addEventListener('click', function () {
    if (playerCanAnswer) {
        playBlueAnimation();
        playerAnswers.push('blue');
    }
});

/* ***ANIMATION FUNCTIONS*** */

//Lights up the square and plays the sound effect
function playGreenAnimation() {
    //Sets background color to lighter shade
    greenBG.style.backgroundColor = '#0cff1c';
    //Rewinds the audio if playing
    greenSound.currentTime = 0;
    //Plays the audio
    greenSound.play();
    //Resets the color after a set amount of time
    setTimeout(function () {
        greenBG.style.backgroundColor = 'darkgreen';
    }, 300);
}

function playRedAnimation() {
    redBG.style.backgroundColor = 'red';
    redSound.currentTime = 0;
    redSound.play();
    setTimeout(function () {
        redBG.style.backgroundColor = 'darkred';
    }, 100);
}

function playYellowAnimation() {
    yellowBG.style.backgroundColor = '#ffff28';
    yellowSound.currentTime = 0;
    yellowSound.play();
    setTimeout(function () {
        yellowBG.style.backgroundColor = '#b1b700';
    }, 100);
}

function playBlueAnimation() {
    blueBG.style.backgroundColor = '#497aff';
    blueSound.currentTime = 0;
    blueSound.play();
    setTimeout(function () {
        blueBG.style.backgroundColor = 'darkblue';
    }, 100);
}