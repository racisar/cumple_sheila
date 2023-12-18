"use strict";
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomStarTrembling() {
    const tremblingIndicator = randomNumber(1, 40);
    if (tremblingIndicator <= 20) {
        return `trembling-${tremblingIndicator}`;
    }
    return '';
}
function randomStarSize() {
    const sizeIndicator = randomNumber(1, 3);
    if (sizeIndicator === 1) {
        return 'small';
    }
    if (sizeIndicator === 2) {
        return 'normal';
    }
    if (sizeIndicator === 3) {
        return 'large';
    }
}
function randomStarBrightness() {
    const brightnessIndicator = randomNumber(1, 2);
    if (brightnessIndicator === 1) {
        return 'dark';
    }
    if (brightnessIndicator === 2) {
        return 'light';
    }
}
function randomShootingStar() {
    const shootingStarIndicator = randomNumber(1, 500);
    if (shootingStarIndicator < 5) {
        return `shooting-star delay-${shootingStarIndicator}`;
    }
    return '';
}
function addStars() {
    const skyEl = document.getElementsByClassName('sky')[0];
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const minimumStars = parseInt(windowWidth + windowHeight / 5);
    const maximumStars = parseInt(windowWidth + windowHeight / 4);
    const totalStars = randomNumber(minimumStars, maximumStars);
    let htmll = '';
    for (let i = 0; i < totalStars; i++) {
        const top = randomNumber(0, windowHeight);
        const left = randomNumber(0, windowWidth);
        const starEl = document.createElement('span');
        const size = randomStarSize();
        const brightness = randomStarBrightness();
        const shootingStar = randomShootingStar();
        const trembling = shootingStar ? '' : randomStarTrembling();
        htmll += `
            <span class="star ${shootingStar} ${trembling} ${size} ${brightness}" style="top: ${top}px;left: ${left}px">
            </span>`;
    }
    htmll += `<span class="moon"></span>`;
    if (skyEl) {skyEl.innerHTML = htmll;}
}

function buttonToggle() {
    let x = document.getElementById("container1");
    let y = document.getElementById("container2");
    if (x.style.display === "none") {
        y.style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        y.animate(
            { transform: 'translateY(0)'}, 
            {
                duration: 700,
                fill: 'forwards'
            });
        var audio = new Audio('./assets/audio/happyBday.mp3');
        audio.play();
        addStars();
    }
}
