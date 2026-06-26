let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function homePoints1() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
    updateLeader();
}

function homePoints2() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
    updateLeader();
}

function homePoints3() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
    updateLeader();
}

function guestPoints1() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
    updateLeader();
}

function guestPoints2() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
    updateLeader();
}

function guestPoints3() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
    updateLeader();
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    updateLeader();
}

function updateLeader() {
    homeScore.classList.remove("leading");
    guestScore.classList.remove("leading");

    const home = Number(homeScore.textContent);
    const guest = Number(guestScore.textContent);

    if (home > guest) {
        homeScore.classList.add("leading");
    } else if (guest > home) {
        guestScore.classList.add("leading");
    }
}