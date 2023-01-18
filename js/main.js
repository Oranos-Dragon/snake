const boxes = document.querySelectorAll('.box');
let start = false;
let pause = false;
let snakeBody = [21];
let score = 0;
let highscore = 0;
let direction = 2;
let grid = 
[0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
];


let applePosition = 54;
grid[applePosition] = 2;
let position = 22;

document.addEventListener('keydown', function(event) {
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
})