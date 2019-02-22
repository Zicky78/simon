const greenBG = document.getElementById('greenBG');
const redBG = document.getElementById('redBG');
const yellowBG = document.getElementById('yellowBG');
const blueBG = document.getElementById('blueBG');

greenBG.style.backgroundColor = 'darkgreen';
redBG.style.backgroundColor = 'darkred';
yellowBG.style.backgroundColor = '#b1b700';
blueBG.style.backgroundColor = 'darkblue';

const greenSound = document.getElementById('greenSound');
const redSound = document.getElementById('redSound');
const yellowSound = document.getElementById('yellowSound');
const blueSound = document.getElementById('blueSound');

const classic = document.getElementById('classic');
classic.innerText = 'Classic';

classic.addEventListener('click', function () {
    if (start === true) {
        classicMode = true;
        start = false;
    }
});

const expert = document.getElementById('expert');
expert.innerText = 'Expert';

expert.addEventListener('click', function () {
    if (start === true) {
        expertMode = true;
        start = false;
    }
});
