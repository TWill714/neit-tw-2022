//canvas stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");


var fire = new  Image();
var water = new  Image();
var grass = new  Image();
var hfire = new  Image();
var hwater = new  Image();
var hgrass = new  Image();

fire.src = "/Week7/Assignment/images/fire.png";
water.src = "/Week7/Assignment/images/water.jpg";
grass.src = "/Week7/Assignment/images/grass.png";
hfire.src = "/Week7/Assignment/images/hfire.png";
hwater.src = "/Week7/Assignment/images/hwater.png";
hgrass.src = "/Week7/Assignment/images/hgrass.png";

var result = "Select a button from above to choose."

// ctx.font = "40px Arial";
// ctx.fillStyle = "purple";
// ctx.strokeStyle = "yellow";
// ctx.fillText("Welcome to FWG Game!", 200, 280);
// ctx.strokeText("Welcome to FWG Game!", 200, 280);

hgrass.onload = function(){
    draw(fire,water,grass,fire,water,grass);
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
    }
}

function draw(fire,water,grass,cfire,cwater,cgrass){
    if(gameOver == true)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Welcome press space to Play", canvas.width/2,100);
    return;
}
function draw(fire,water,grass,cfire,cwater,cgrass){
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
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
rps[2] = "GRass"


document.getElementById("fire").addEventListener('click', function (e) {
    //alert("You Clicked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("water").addEventListener('click', function (e) {
    //alert("You Clicked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("grass").addEventListener('click', function (e) {
    //lert("You Clicked " + rps[2]);
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
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Water. CPU wins!")
                result = "CPU chose Water. CPU wins!"
                draw(hfire, water,grass, fire, hwater, grass);
            }
            else  {
               // alert("CPU chose Grass. You win!")
                result = "CPU chose Grass. You win!"
                draw(hfire, water,grass, fire, water, hgrass);
            }
            break;

        case "Water":
            if (cpuChoice == 0) {
                //it's a tie
                //alert("CPU chose Fire. You win!")
                result = "CPU chose Fire. You win!"
                draw(fire, hwater,grass, hfire, water, grass);
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose Water. It's a tie!")
                result = "CPU chose Water. It's a tie!"
                draw(fire, hwater ,hgrass, fire, hwater, grass);
            }
            else  {
                //alert("CPU chose Grass. CPU wins!")
                result = "CPU chose Grass. CPU wins!"
                draw(fire, hwater,grass, fire, water, hgrass);
            }
            break;

        case "Grass":
            if (cpuChoice == 0) {
                //it's a tie
                //alert("CPU chose Fire. CPU wins!")
                result = "CPU chose Fire. CPU wins!"
                draw(fire, water,hgrass, hfire, water, grass);
            }
            else if (cpuChoice == 1) {
               // alert("CPU chose Water. You win!")
               result = "CPU chose Water. You win!"
               draw(fire, water ,hgrass, fire, hwater, grass);
            }
            else  {
               // alert("CPU chose Grass. It's a tie!")
               result = "CPU chose Grass. It's a tie!"
               draw(fire, water,hgrass, fire, water, hgrass);
            }
            break;
    }


}