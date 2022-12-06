var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = [];
var currentState = 0;

//score variables
var score = 0;
var highScore = 0;
//Ship variables
var ship = new PlayerShip();

function PlayerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;


    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0,-10);
        ctx.lineTo(10,10);
        ctx.lineTo(-10,10);
        ctx.lineTo(0,-10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;

        //add boundariesto canvas
        //bottom boundary
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2;
            this.vy= 0;
        }
           //top boundary
           if(this.y <  this.height/2){
            this.y =  this.height/2;
            this.vy= 0;
        }
          //right boundary
          if(this.x > canvas.width -  this.width/2){
            this.x = canvas.width -  this.width/2;
            this.vx= 0;
        }
          //left boundary
          if(this.x < this.width/2){
            this.x = this.width/2;
            this.vx = 0;
        }
         

    }
}

document.addEventListener('keydown',pressKeyDown);
document.addEventListener('keyup',pressKeyUp);


function pressKeyDown(e){
    if(!gameOver){
        //WASD 
    if(e.keyCode == 87){
        //Ship goes up
        ship.up = true;
    }
    if(e.keyCode == 65){
        //Ship goes left
        ship.left = true;
    }
    if(e.keyCode == 83){
        //Ship goes down
        ship.down = true;
    }
    if(e.keyCode == 68){
        //Ship goes right
        ship.right = true;
    }
    
    //Arrow Keys

    if(e.keyCode == 38){
        //Ship goes up
        ship.up = true;
    }
    if(e.keyCode == 37){
        //Ship goes left
        ship.left = true;
    }
    if(e.keyCode == 40){
        //Ship goes down
        ship.down = true;
    }
    if(e.keyCode == 39){
        //Ship goes right
        ship.right = true;
    }
}}

function pressKeyUp(e){
    if (!gameOver){
    //WASD 
    if(e.keyCode == 87){
        //Ship goes up
        ship.up = false;
    }
    if(e.keyCode == 65){
        //Ship goes left
        ship.left = false;
    }
    if(e.keyCode == 83){
        //Ship goes down
        ship.down = false;
    }
    if(e.keyCode == 68){
        //Ship goes right
        ship.right = false;
    }
    
    //Arrow Keys

    if(e.keyCode == 38){
        //Ship goes up
        ship.up = false;
    }
    if(e.keyCode == 37){
        //Ship goes left
        ship.left = false;
    }
    if(e.keyCode == 40){
        //Ship goes down
        ship.down = false;
    }
    if(e.keyCode == 39){
        //Ship goes right
        ship.right = false;
    }
    }

    if(gameOver){
        if(e.keyCode == 32){
            gameOver = false;
            currentState = 1;
            scoreTimer();
            main();
        }
    }
}

//variables for asteroid creation
var numAsteroids = 20;
var asteroids = [];


//class for asteroid objects
function Asteroid(){
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomRange(10,5);
    this.color = "white";

    this.drawAsteroid = function(){
        //commands to draw Asteroid
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0, Math.PI*2, true)
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

//for loop to create the first asteroids
for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
}



//utility functions

function randomRange(high,low){
   return  Math.random() * (high-low) + low;
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;

        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer,1000);
    }
}



//Asteroid Game State Machine
//Main Menu
gameState[0] = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAligh = "cemter";
    ctx.fillText("Asteroid Avoider",canvas.width/2 -100, canvas.height/2 -30);
    ctx.font = "15px Arial";
    ctx.fillText("Press Space to Play",canvas.width/2 -75, canvas.height/2 +20);
    ctx.restore();
}
//Game Scene
gameState[1] = function(){
     //clear canvas
     ctx.clearRect(0,0,canvas.width,canvas.height);

     //draw score to canvas
         ctx.save()
         ctx.font = "15px Arial";
         ctx.fillStyle = "white";
         ctx.fillText("Score: "+ score.toString(), canvas.width -150,30)
         ctx.restore();
     
         //setup vertical movement
         if(ship.up){
             ship.vy = -10;
         }else{
             ship.vy = 3;
         }
     
         //setup horizontal movement
         if(ship.left){
         ship.vx = -5;
         }else if(ship.right) {
             ship.vx = 5;
         }
         else{
             ship.vx = 0;
         }
     
     
     
         for(var i = 0; i < asteroids.length; i++){
             var dX = ship.x - asteroids [i].x;
             var dY = ship.y - asteroids [i].y;
             var distance = Math.sqrt((dX*dX)+ (dY*dY));
     
             if(detectCollision(distance,(ship.height/2 + asteroids[i].radius))){
                 //alert("hit ateroid game over");
                 gameOver = true;
             }
     
             if(asteroids[i].y > canvas.height + asteroids[i].radius){
                 asteroids[i].x = randomRange(canvas.width-asteroids[i].radius,asteroids[i].radius);
                 asteroids[i].y = randomRange(canvas.height-asteroids[i].radius,asteroids[i].radius) - canvas.height;
             }
     
             //draw asteroids
             asteroids[i].y += asteroids[i].vy;
             asteroids[i].drawAsteroid();
         }
     
         ship.moveShip();
         ship.drawShip();

         while(asteroids.length < numAsteroids){
            //Add new asteroids in array
            asteroids.push(new Asteroid());
        }
}

//Main Game Loop 
function main(){
   gameState[currentState]();


    if(!gameOver ){
        timer = requestAnimationFrame(main);
    }

    //Check to see if we need to add asteroids
  

}