const boxes = document.querySelectorAll(".box");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const restart = document.querySelector(".restart");

let start = false;
let pause = false;
let gameover = false;
let snakeBody = [21];
let score = 0;
let highscore = 0;
let direction = 2;
let applePosition = 54;
let position = 22;

restart.addEventListener("click", restartButton)
document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key === "w" && direction != 3) {
        direction = 1 ;
    }
    if (event.key === "a" && direction != 2) {
        direction = 4;
        }
    if (event.key === "s" && direction != 1) {
        direction = 3;
    }
    if (event.key === "d" && direction != 4) {
        direction = 2;
    }
    if (event.key === " ") {
        if (gameover == false) {
            if (start == true && pause == false) {
                pause = true;
                clearInterval(snakeMove)
                console.log("paused")
            }
            else if (start == false || pause == true) {
                snakeMove = setInterval(function () {snakeMoving()}, 200);
                start = true;
                pause = false;
            }
        }
    }
    if (event.key === "r") {
        restartButton()
    }
})

highscore = localStorage.getItem("highscore");
highscoreDisplay.innerHTML = parseInt(highscore)