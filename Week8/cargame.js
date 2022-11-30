var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 50;
var finish = 750;

//Car Variables
var carPos= 2;
var startFuel = randomNumber(canvas.width,600);
var fuel = startFuel;
var fuelBarWidth = 300;
var speed = 3;
var gameOver = true;
var carWidth = 50

//start timer variables
var seconds = 3;
var fps = 60;
var frames = fps;

//Car sprite
var carSprite = new Image();
carSprite.src = "images/car.png"
carSprite.onload = function(){

}

//add the event handler for startingthe game
document.addEventListener("keydown", pressSpace);

//add key handler function here
function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel<=0){
        restartGame();
    }
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(gameOver){
        //Menu Screen
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial"
        ctx.textAlign = "center";
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2);
        ctx.restore();
    }
    else{
        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }
        else{
            if(fuel>0){
                //Update car position
                carPos += speed;
                fuel -= speed;
                }
        }
        drawStartFinishLines();
        drawCar();
    
        
      
        drawFuelBar();
    
        if(fuel <= 0 || carPos + carWidth> finish){
            drawResults();
        }
    }


    //Refresh the main function
    timer = requestAnimationFrame(main);
}

function drawStartFinishLines(){
        //Draw start line
        ctx.fillStyle = "black";
        ctx.fillRect(start,50,10,500);
        //Draw finish line
        ctx.fillRect(finish,50,10,500);
}

function drawCar(){
//Draw car
//ctx.fillStyle = "red";
//ctx.fillRect(carPos,canvas.height/2,carWidth,20);
ctx.drawImage(carSprite,carPos,canvas.height/2,carWidth,20);
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "lavender";
    ctx.fillRect(start,30,fuelBarWidth,10);
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText("Fuel",start,25);
    if(fuel>0){
    ctx.fillStyle ="purple";
    ctx.fillRect(start,30,currentBarWidth,10);
    }
}

function drawResults(){
    if(carPos + carWidth >finish){
    ctx.save();
    ctx.fillStyle = "green";
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillText("You made it to the finish... You Win!", canvas.width/2,canvas.height/2);
    ctx.restore();
    }
    else{
    ctx.save();
    ctx.fillStyle = "red";
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillText("You ran out of fuel... You lose! :(", canvas.width/2,canvas.height/2);
    ctx.restore();
    }
}

//utility function
function randomNumber(high,low){
    return Math.round(Math.random() * (high-low) + low);
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames<0){
        frames = fps;
        seconds -= 1;
    }
}

function drawStartTimer(){
    if(seconds >= 1){
        ctx.save();
        ctx.fillStyle = "blue";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText(seconds,canvas.width/2, canvas.height/2);
        ctx.restore();
    }
    else{
        ctx.save();
        ctx.fillStyle = "blue";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GO!",canvas.width/2, canvas.height/2);
        ctx.restore();
    }
   
}