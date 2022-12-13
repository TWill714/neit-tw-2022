var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = [];
var currentState = 0;

var player = new Image();
player.src = "images/ship.png";
player.onload =function(){}

var obstacle = new Image();
obstacle.src = "images/obstacle.png";
obstacle.onload = function () {

}

var startScreen = new Image();
startScreen.src = "images/startscreen.png";
startScreen.onload = function(){}

//score variables
var score = 0;
var highScore = 0;
//Ship variables
var ship = new PlayerShip();

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 20;
    this.height = 20; 
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;


    this.drawShip = function () {
        ctx.save();
        ctx.drawImage(player,this.x,this.y);
        ctx.restore();
    }

    this.moveShip = function () {
        this.x += this.vx;
        this.y += this.vy;

        //add boundariesto canvas
        //bottom boundary
        if (this.y > canvas.height - 40) {
            this.y = canvas.height - 40;
            this.vy = 0;
        }
        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }
        //right boundary
        if (this.x > canvas.width - 50) {
            this.x = canvas.width - 50;
            this.vx = 0;
        }
        //left boundary
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }


    }
}

document.addEventListener('keydown', pressKeyDown);
document.addEventListener('keyup', pressKeyUp);


function pressKeyDown(e) {
    if (!gameOver) {
        //WASD 
        if (e.keyCode == 87) {
            //Ship goes up
            ship.up = true;
        }
        if (e.keyCode == 65) {
            //Ship goes left
            ship.left = true;
        }
        if (e.keyCode == 83) {
            //Ship goes down
            ship.down = true;
        }
        if (e.keyCode == 68) {
            //Ship goes right
            ship.right = true;
        }

        //Arrow Keys

        if (e.keyCode == 38) {
            //Ship goes up
            ship.up = true;
        }
        if (e.keyCode == 37) {
            //Ship goes left
            ship.left = true;
        }
        if (e.keyCode == 40) {
            //Ship goes down
            ship.down = true;
        }
        if (e.keyCode == 39) {
            //Ship goes right
            ship.right = true;
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        //WASD 
        if (e.keyCode == 87) {
            //Ship goes up
            ship.up = false;
        }
        if (e.keyCode == 65) {
            //Ship goes left
            ship.left = false;
        }
        if (e.keyCode == 83) {
            //Ship goes down
            ship.down = false;
        }
        if (e.keyCode == 68) {
            //Ship goes right
            ship.right = false;
        }

        //Arrow Keys

        if (e.keyCode == 38) {
            //Ship goes up
            ship.up = false;
        }
        if (e.keyCode == 37) {
            //Ship goes left
            ship.left = false;
        }
        if (e.keyCode == 40) {
            //Ship goes down
            ship.down = false;
        }
        if (e.keyCode == 39) {
            //Ship goes right
            ship.right = false;
        }
    }

    if (gameOver) {
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //from the game over screen
                ctx.clearRect(0,0,canvas.width,canvas.height);
                currentState = 0;
                numAsteroids = 1;
                asteroids = [];
                score = 0;
                gameStart();
                main();
            } else {
                //from main menu
                gameStart();
                gameOver = false;
                currentState = 1;
                scoreTimer();
                main();
            }
        }
    }
}

//variables for asteroid creation
var numAsteroids = 1;
var asteroids = [];


//class for asteroid objects
function Asteroid() {
    this.radius = randomRange(35, 35);
    this.x = randomRange(canvas.width + this.radius, this.radius) + canvas.width;
    this.y = randomRange(canvas.height + this.radius, this.radius);
    this.vx = randomRange(-8, -3);
    this.color = "white";

    this.drawAsteroid = function () {
        //commands to draw Asteroid
        ctx.save();
        ctx.drawImage(obstacle, this.x, this.y);
        ctx.restore();
    }
}




//utility functions
function gameStart() {

    //for loop to create the first asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }
    //create new instance of player ship
    ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance;
}

function scoreTimer() { 
    if (!gameOver) {
        score++;

        if (score < 25) {
            if(score % 1 == 0){
                numAsteroids += 1;
            console.log(numAsteroids);
            }
            
        }else if(score < 50){
            if(score % 2 == 0){
                numAsteroids += 2;
                console.log(numAsteroids);
            }
        }else if (score <75){
            if(score % 3 == 0){
                numAsteroids += 4;
                console.log(numAsteroids);
            }
        }else if (score <100){
            if(score % 4 == 0){
                numAsteroids += 8;
                console.log(numAsteroids);
            }
        }else {
            if(score % 5 == 0){
                numAsteroids += 16;
                console.log(numAsteroids);
            }
        }

        setTimeout(scoreTimer, 1000);
    }
}



//Asteroid Game State Machine
//Main Menu
gameState[0] = function () {
   ctx.save();
    ctx.drawImage(startScreen,0,0);
    //ctx.font = "30px Arial";
    //ctx.fillStyle = "white";
   // ctx.textAligh = "cemter";
    //ctx.fillText("Asteroid Avoider", canvas.width / 2 - 100, canvas.height / 2 - 30);
   // ctx.font = "15px Arial";
    //ctx.fillText("Press Space to Play", canvas.width / 2 - 75, canvas.height / 2 + 20);
 ctx.restore();
}
//Game Scene
gameState[1] = function () {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw score to canvas
    ctx.save()
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore();

    //setup vertical movement
    if (ship.up) {
        ship.vy = -10;
    } else if(ship.down){
        ship.vy = 10 ;
    }else{
        ship.vy= 0;
    }

    //setup horizontal movement
    if (ship.right) {
        ship.vx = 5;
     } else {
        ship.vx = -3;
    }



    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));

        if (detectCollision(distance, (12 + asteroids[i].radius))) {
            //alert("hit ateroid game over");
            ctx.clearRect(0,0,canvas.width,canvas.height);
            gameOver = true;
            currentState = 2;
            main();
            //clears asteroids
            return;
        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius);
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;
        }

        //draw asteroids
        asteroids[i].x += asteroids[i].vx;
        asteroids[i].drawAsteroid();
    }

    ship.moveShip();
    ship.drawShip();

    while (asteroids.length < numAsteroids) {
        //Add new asteroids in array
        asteroids.push(new Asteroid());
    }
}

//Game Over Menu
gameState[2] = function () {
    if (score > highScore) {
        //New High Score
        highScore = score;
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAligh = "center";
        ctx.fillText("Game Over! Your Score was: " + score.toString(), canvas.width / 2 - 175, canvas.height / 2 - 60);
        ctx.fillText("Your new High Score is: " + highScore.toString(), canvas.width / 2 - 140, canvas.height / 2 - 30);
        ctx.fillText("New Record!", canvas.width / 2 - 75, canvas.height / 2);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space to Play Again", canvas.width / 2 - 75, canvas.height / 2 + 20);
        ctx.restore();
    } else {
        //regular high score
        ctx.save();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAligh = "center";
        ctx.fillText("Game Over! Your Score was: " + score.toString(), canvas.width / 2 - 175, canvas.height / 2 - 60);
        ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width / 2 - 140, canvas.height / 2 - 30);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space to Play Again", canvas.width / 2 - 75, canvas.height / 2 + 20);
        ctx.restore();
    }
}


//Main Game Loop 
function main() {
    gameState[currentState]();


    if (!gameOver) {
        timer = requestAnimationFrame(main);
    }

    //Check to see if we need to add asteroids


}