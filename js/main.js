//consts
const boxes = document.querySelectorAll(".box");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const restart = document.querySelector(".restart");


//audio
const slurp = new Audio("img/slorp.mp3");
const boom = new Audio("img/boom.mp3");
const swipe = new Audio("img/swipe.mp3");
const swipe2 = new Audio("img/swipe2.mp3");

//lets
let start = false;
let pause = false;
let gameover = false;
let snakeBody = [21];
let score = 0;
let highscore = 0;
let direction = 2;
let applePosition = 54;
let position = 22;

restart.addEventListener("click", restartButton)//restart knop
document.addEventListener("keydown", function(event) {//alle knoppen
    if (event.key === "w" && direction != 3 || event.key === "ArrowUp" && direction != 3) {//omhoog
        direction = 1;
        swipe.play();
    }
    if (event.key === "a"  && direction != 2 || event.key === "ArrowLeft" && direction != 2) {//naar links
        direction = 4;
        swipe2.play();
        }
    if (event.key === "s" && direction != 1 || event.key === "ArrowDown" && direction != 1) {//naar beneden
        direction = 3;
        swipe.play();
    }
    if (event.key === "d" && direction != 4 || event.key === "ArrowRight" && direction != 4) {//naar rechts
        direction = 2;
        swipe2.play();
    }
    if (event.key === " ") {//als je op space drukt gaat hij op pauze
        if (gameover == false) {
            if (start == true && pause == false) {
                pause = true;
                clearInterval(snakeMove);//stopt de slang met bewegen
                console.log("paused");
            }
            else if (start == false || pause == true) {
                snakeMove = setInterval(function () {snakeMoving()}, 200);//start de slang met bewegen
                start = true;
                pause = false;
            }
        }
    }
    if (event.key === "r") {
        restartButton();//reload de pagina
    }
})

highscore = localStorage.getItem("highscore");//slaat de score op
highscoreDisplay.innerHTML = parseInt(highscore);