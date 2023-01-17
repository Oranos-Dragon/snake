const qs = document.querySelector;

const boxes = document.querySelectorAll('.box');

let grid = 
[0,0,0,0,0,0,0,0,0,0,
0,0,1,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
];


let position = 22;

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key === "w") {
        if (position == 0, position == 1, position == 2, position == 3, position == 4, position == 5, position == 6, position == 7, position == 8, position ==9) {
            gameOver()
        }
        else {
            grid[position] = 0;
            boxes[position].innerHTML = " "
            position -= 10;
            boxes[position].innerHTML = '<img src="/img/snake_head_up.png" alt="">'
            grid[position] = 1
        }
    }
    if (event.key === "a") {
        grid[position] = 0;
        boxes[position].innerHTML = " "
        position--;
        boxes[position].innerHTML = '<img src="/img/snake_head_left.png" alt="">'
        grid[position] = 1
    }
    if (event.key === "s") {
        grid[position] = 0;
        boxes[position].innerHTML = " "
        position += 10;
        boxes[position].innerHTML = '<img src="/img/snake_head_down.png" alt="">'
        grid[position] = 1
    }
    if (event.key === "d") {
        grid[position] = 0;
        boxes[position].innerHTML = " "
        position++;
        boxes[position].innerHTML = '<img src="/img/snake_head_right.png" alt="">'
        grid[position] = 1  
    }
})