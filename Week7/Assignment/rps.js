//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");


var fire = new  Image();
var water = new  Image();
var grass = new  Image();
var hfire = new  Image();
var hwater = new  Image();
var hgrass = new  Image();
var trophy = new Image();

var wins = 0;
var cpuWins= 0;
var health = 3;
var healthBarWidth = 200;

fire.src = "images/fire.png";
water.src = "images/water.png";
grass.src = "images/grass.png";
hfire.src = "images/hfire.png";
hwater.src = "images/hwater.png";
hgrass.src = "images/hgrass.png";
trophy.src = "images/trophy.png"

var result = "Select a button from above to choose."

// ctx.font = "40px Arial";
// ctx.fillStyle = "purple";
// ctx.strokeStyle = "yellow";
// ctx.fillText("Welcome to FWG Game!", 200, 280);
// ctx.strokeText("Welcome to FWG Game!", 200, 280);

hgrass.onload = function(){
ctx.fillStyle = "purple";
ctx.font = "30px Arial";
ctx.fillText("Welcome to the Fire, Water, and Grass game!", 175, canvas.height/2 -50);
ctx.fillText("Press space to play!", 350, canvas.height/2 +50);

}

document.addEventListener("keydown",keyPressDown);
document.addEventListener("keyup",keyPressUp);

var gameOver = true;

function keyPressDown(e){
    console.log(e.keyCode);
}
function keyPressUp(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
        gameOver = false;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        draw(fire,water,grass,fire,water,grass);
        ctx.fillText("Your Wins: " + wins,95, 40)
        ctx.fillText("CPU Wins: " + cpuWins,95, 70)
        drawHealthBar();
        winCheck()
        healthCheck();
    }else if(e.keyCode == 82){
        location.reload();
    }

function draw(fire,water,grass,cfire,cwater,cgrass){
    if(gameOver == true)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Welcome press space to Play", canvas.width/2,canvas.height/2);
    return;
}
function draw(fire,water,grass,cfire,cwater,cgrass){
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "purple";
    ctx.fillText("Player Choices", canvas.width/2,100);
    ctx.drawImage(fire,canvas.width/2 - fire.width/2 - 100, 150);
    ctx.drawImage(water,canvas.width/2 - water.width/2, 150);
    ctx.drawImage(grass,canvas.width/2 - grass.width/2 + 100, 150);

    ctx.fillText("Computer Choices", canvas.width/2,325);
    ctx.drawImage(cfire,canvas.width/2 - fire.width/2 - 100, 375);
    ctx.drawImage(cwater,canvas.width/2 - water.width/2, 375);
    ctx.drawImage(cgrass,canvas.width/2 - grass.width/2 + 100, 375);

    ctx.fillText(result, canvas.width/2,525)
}


//alert("Hello this is the alert");
//Array datatype
//var rps = ["Fire", "Water", "Grass"];
//var rps = new Array();
var rps = [];
rps[0] = "Fire"
rps[1] = "Water"
rps[2] = "Grass"


document.getElementById("fire").addEventListener('click', function (e) {
    //alert("You Clicked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("water").addEventListener('click', function (e) {
    //alert("You Clicked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("grass").addEventListener('click', function (e) {
    //alert("You Clicked " + rps[2]);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "Fire":
            if (cpuChoice == 0) {
                //it's a tie
               // alert("CPU chose Fire. It's a tie!")
                result = "CPU chose Fire. It's a tie!"
                draw(hfire, water,grass, hfire, water, grass);
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                drawHealthBar();
                winCheck()
                healthCheck();
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Water. CPU wins!")
                result = "CPU chose Water. CPU wins!"
                draw(hfire, water,grass, fire, hwater, grass);
                cpuWins++;
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                health--;
                drawHealthBar();
                winCheck()
                healthCheck();
            }
            else  {
               // alert("CPU chose Grass. You win!")
                result = "CPU chose Grass. You win!"
                draw(hfire, water,grass, fire, water, hgrass);
                wins++;
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                drawHealthBar();
                winCheck()
                
                healthCheck();
            }
            break;

        case "Water":
            if (cpuChoice == 0) {
                //it's a tie
                //alert("CPU chose Fire. You win!")
                result = "CPU chose Fire. You win!"
                draw(fire, hwater,grass, hfire, water, grass);
                wins++
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                drawHealthBar();
                winCheck()
                healthCheck();
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Water. It's a tie!")
                result = "CPU chose Water. It's a tie!"
                draw(fire, hwater ,grass, fire, hwater, grass);
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                drawHealthBar();
                winCheck()
                
                healthCheck();
            }
            else  {
                //alert("CPU chose Grass. CPU wins!")
                result = "CPU chose Grass. CPU wins!"
                draw(fire, hwater,grass, fire, water, hgrass);
                cpuWins++;
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                health--;
                drawHealthBar();
                winCheck()
                healthCheck();
            }
            break;

        case "Grass":
            if (cpuChoice == 0) {
                //it's a tie
                //alert("CPU chose Fire. CPU wins!")
                result = "CPU chose Fire. CPU wins!"
                draw(fire, water,hgrass, hfire, water, grass);
                cpuWins++;
                ctx.fillText("Your Wins: " + wins,95, 40)
                ctx.fillText("CPU Wins: " + cpuWins,95, 70)
                health--;
                drawHealthBar();
                winCheck()
                healthCheck();
            }
            else if (cpuChoice == 1) {
               // alert("CPU chose Water. You win!")
               result = "CPU chose Water. You win!"
               draw(fire, water ,hgrass, fire, hwater, grass);
               wins++;
               ctx.fillText("Your Wins: " + wins,95, 40)
               ctx.fillText("CPU Wins: " + cpuWins,95, 70)
               drawHealthBar();
               winCheck()
               healthCheck();
            }
            else  {
               // alert("CPU chose Grass. It's a tie!")
               result = "CPU chose Grass. It's a tie!"
               draw(fire, water,hgrass, fire, water, hgrass);
               ctx.fillText("Your Wins: " + wins,95, 40)
               ctx.fillText("CPU Wins: " + cpuWins,95, 70)
               drawHealthBar();
               winCheck()
               healthCheck();
            }
            break;
    }


}
function healthCheck(){
    if(health == 0){
        gameOver = true;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawHealthBar();
        ctx.fillText("Your Wins: " + wins,95, 40)
        ctx.fillText("CPU Wins: " + cpuWins,95, 70)
        ctx.font = "50px Arial"
        ctx.fillText("Game Over!",canvas.width/2, canvas.height/2);
        ctx.fillText("Press R to Restart",canvas.width/2, canvas.height/2 +50 );
    }
}
function winCheck(){
    if(wins == 3){
        gameOver = true;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText("Your Wins: " + wins,95, 40)
        ctx.fillText("CPU Wins: " + cpuWins,95, 70)
        ctx.font = "50px Arial"
        ctx.fillText("You Win!!!",canvas.width/2, canvas.height/2);
        ctx.fillText("Press R to Play Again",canvas.width/2, canvas.height/2 +50 );
        ctx.drawImage(trophy ,canvas.width/2 -50, canvas.height/2 -  200 );
   
        drawHealthBar();
    }
}
function drawHealthBar(){
    
    var currentBarWidth = healthBarWidth * (health);
    ctx.fillStyle = "lavender";
    ctx.fillRect(250,30,600,10);
    ctx.fillStyle = "Purple";
    ctx.font = "25px Arial";
    ctx.fillText("Health",525,25);
    if(health>=0){
    ctx.fillStyle ="purple";
    ctx.fillRect(250,30,currentBarWidth,10);
    }
}}