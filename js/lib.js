function gameOver() {//wordt uitgevoert al ga je dood
    clearInterval(snakeMove);//stopt de slang met bewegen
    restart.style.visibility = "visible";
    gameover = true;
    boom.play();
}

function restartButton() {
    location.reload();//reload de site
}

function snakeRemove() {
    boxes[position].innerHTML = " ";
        for(i=0;i<snakeBody.length;i++) {//haalt het lichaam helemaal weg
            boxes[snakeBody[i]].innerHTML = " ";
        }
        snakeBody.pop();//haalt het laatste deel van de slang weg in de array
        snakeBody.unshift(position);//zet een nieuw getal in de array op de positie waar het hoofd eerst was
}

function snakePlace() {
    if (snakeBody.includes(position)) {//zorgt ervoor dat als je in jezelf gaat je dan dood gaat
        gameOver();
    }
    for(i=0;i<snakeBody.length;i++) {//zet het lichaam wee terug
        boxes[snakeBody[i]].innerHTML = '<img src="img/snake_body.png" alt="">';
    }
}

function snakeMoving() {//wordt elke 200ms uitgevoerd om de slang te bewegen
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
    applePosition = Math.floor(Math.random()*100);//genereerd een willekeurig getal voor de appel
    while (applePosition == position || snakeBody.includes(applePosition)) {
        apple();
    }
    boxes[applePosition].innerHTML = '<img src="img/apple.png" class="apple" alt="">';//zet de appel neer 
}

function eatApple() {
    // console.log("apple eaten");
    snakeBody.push(snakeBody[snakeBody.length-1]);//1 vakje word toegevoegd aan de slang
    apple();
    scoreUpdate()
    slurp.play();
}

function up() {
    if (position - 10 < 0) {//checkt of het vakje waar hij naartoegaat wel bestaat en als hij dat niet gaat de slang dood
        gameOver();
    }    
    else {
        snakeRemove();
        position -= 10;
        snakePlace();
        boxes[position].innerHTML = '<img src="img/snake_head_up.png" alt="">';//plaatst hoofd
        if (applePosition == position) {
            eatApple();
        };
        direction = 1;
    }
}
function right() {
    if (position == 9 || position == 19 || position == 29 || position == 39 || position == 49 || position == 59 || position == 69 || position == 79 || position == 89 || position == 99){
        gameOver();
    }
    else {
        snakeRemove();
        position++;
        snakePlace();
        boxes[position].innerHTML = '<img src="img/snake_head_right.png" alt="">';//plaatst hoofd
        if (applePosition == position) {
            eatApple();
        };
        direction = 2;
    }
}
function down() {
    if (position + 10 > 99) {//checkt of het vakje waar hij naartoegaat wel bestaat en als hij dat niet gaat de slang dood
        gameOver();
    } 
    else {
        snakeRemove();
        position += 10;
        snakePlace();
        boxes[position].innerHTML = '<img src="img/snake_head_down.png" alt="">';//plaatst hoofd
        if (applePosition == position) {
            eatApple();
        }
        direction = 3;
    }
}
function left() {
    if (position == 0 || position == 10 || position == 20 || position == 30 || position == 40 || position == 50 || position == 60 || position == 70 || position == 80 || position == 90){
        gameOver();
    }
    else {
        snakeRemove();
        position--;
        snakePlace();
        boxes[position].innerHTML = '<img src="img/snake_head_left.png" alt="">';//plaatst hoofd
        if (applePosition == position) {
            eatApple();
        }
        direction = 4;
    }
}

function scoreUpdate() {
    score++;
    scoreDisplay.innerHTML = score;//laat de score zien
    if (score > highscore) {//als de score groter is dan de highscore maakt het de score de nieuwe highscore en slaat het op in local storage
        highscore = score;
        highscoreDisplay.innerHTML = highscore;
        localStorage.setItem("highscore", highscore);
    }
}