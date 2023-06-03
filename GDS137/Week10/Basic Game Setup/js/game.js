//--------------------Goal - To find an angle and set a velocity based on that angle--------------------------
//Description - Make the player follow the mouse so that you can navigate the player through the maze to the blue goal.
//--------------------Don't touch the walls.------------------------------------------------------------------
//--------------------Read the commented instructions below to complete this assignment----------------------
//--------------------Upload your completed file to the ict server and submit a link-------------------------

var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};
var particles=[];

var currentState ="start";
var states = [];


var player = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:2, color:"gray"})
var goal = new GameObject({width:50, height:50, color:"cyan"})
var dot = new GameObject({width:50, height:50, color:"purple"})
var dot2 = new GameObject({width:50, height:50, color:"blue"})
var level = new Level();
	level.generate(level.l1);		
	
	
var image = new Image();
	image.src = "images/barlow.jpg";
	image.onload = function(){changeStates("start")};
	
	
var sound = document.querySelector("#sound");
var splode = document.querySelector("#splode");
	
	
var startX = player.x;
var startY = player.y;


function startGame()
{
	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot.radius())
	{
		changeStates("play");
	}
	if(dist < dot2.radius())
	{
		changeStates("instructions");
	}
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}
	
function changeStates(stateName)
{
	currentState = stateName;
}





states["start"] = function()
{
	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Welcome to my Game!", canvas.width/2, canvas.height/2-78/4)
		context.font = "bold 24px Arial"
		context.fillText("Click the blue dot for instructions, or the purple dot to play.", canvas.width/2, canvas.height/2+(64))
	context.restore();
	dot.x = canvas.width/2 - 100;
	dot.y = 650;
	dot.drawCircle();	
	
}

states["play"] = function()
{
	window.close();
	window.open("https://twilliamsongds11121.netlify.app/gds137/week%204/level4_mini_boss/", "_blank");
}
states["instructions"] = function()
{
	window.close();
	window.open("https://twilliamsongds11121.netlify.app/gds137/week%204/level4_mini_boss/", "_blank");
}



function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}



