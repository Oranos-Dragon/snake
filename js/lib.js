function gameOver() {
    console.log("L bozo")
}

function snakeMoving() {
    if (direction == 1) {
        up();
    }
    else if (direction == 2) {
        right();
    }
    else if (direction == 3) {
        down();
    }
    else if (direction == 4) {
        left();
    }
}

function apple() {
    applePosition = Math.floor(Math.random()*100)
    while (applePosition == position || snakeBody.includes(applePosition)) {
        apple()
    }
    boxes[applePosition].innerHTML = '<img src="/img/apple.png" alt="">';
    grid[applePosition - 1] = 2
}

function eatApple() {
    console.log("apple eaten")
    snakeBody.push(snakeBody[snakeBody.length-1])
    apple()

}

function up() {
    if (position - 10 < 0) {
        gameOver()
    }    
    else {
        grid[position] = 0;
        boxes[position].innerHTML = " "
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = " ";
        }
        snakeBody.pop();
        snakeBody.unshift(position);
        position -= 10;
        boxes[position].innerHTML = '<img src="/img/snake_head_up.png" alt="">';
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = '<img src="/img/snake_body.png" alt="">';
        }
        if (applePosition == position) {
            eatApple()
        };
        grid[position] = 1;
        direction = 1;
    }
}
function right() {
    if (position == 9 || position == 19 || position == 29 || position == 39 || position == 49 || position == 59 || position == 69 || position == 79 || position == 89 || position == 99){
        gameOver()
    }
    else {
        grid[position] = 0;
        boxes[position].innerHTML = " ";
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = " ";
        }
        snakeBody.pop();
        snakeBody.unshift(position);
        position++;
        boxes[position].innerHTML = '<img src="/img/snake_head_right.png" alt="">';
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = '<img src="/img/snake_body.png" alt="">';
        }
        if (applePosition == position) {
            eatApple()
        };
        grid[position] = 1 ; 
        direction = 2;
    }
}
function down() {
    if (position + 10 > 99) {
        gameOver()
    } 
    else {
        grid[position] = 0;
        boxes[position].innerHTML = " ";
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = " ";
        }
        snakeBody.pop();
        snakeBody.unshift(position);
        position += 10;
        boxes[position].innerHTML = '<img src="/img/snake_head_down.png" alt="">';
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = '<img src="/img/snake_body.png" alt="">';
        }
        if (applePosition == position) {
            eatApple()
        };
        grid[position] = 1;
        direction = 3;
    }
}
function left() {
    if (position == 0 || position == 10 || position == 20 || position == 30 || position == 40 || position == 50 || position == 60 || position == 70 || position == 80 || position == 90){
        gameOver()
    }
    else {
        grid[position] = 0;
        boxes[position].innerHTML = " ";
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = " ";
        }
        snakeBody.pop();
        snakeBody.unshift(position);
        position--;
        boxes[position].innerHTML = '<img src="/img/snake_head_left.png" alt="">';
        for(i=0;i<snakeBody.length;i++) {
            boxes[snakeBody[i]].innerHTML = '<img src="/img/snake_body.png" alt="">';
        }
        if (applePosition == position) {
            eatApple()
        };
        grid[position] = 1;
        direction = 4
    }
}