//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	ball = new GameObject();
	ball.vx = 2
	ball.vy = 2

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		console.log("Moving Right");
		player.y += 2;
		if(player.y > 670)
		{
		player.y += -2;
		}
	}
	if(s)
	{
		console.log("Moving Left");
		player.y += -2;
		if(player.y < 50)
		{
			player.y += 2;
		}
	}
	ball.x += ball.vx;
	ball.y += ball.vy;
if(ball.x < ball.width - ball.width/2)
{
	this.color = "#370f70";
	ball.x = ball.width - ball.width/2
	ball.vx = -ball.vx;
	ball.color = this.color;
}
if(ball.x > canvas.width - ball.width/2)
{
	this.color = "#370f70";
	ball.x = canvas.width - ball.width/2
	ball.vx = -ball.vx;
	ball.color = this.color;ball.color = this.color;
}
if(ball.y < ball.height - ball.width/2)
{
	this.color = "#123982";
	ball.vy = -ball.vy;
	ball.color = this.color;
}
if(ball.y > canvas.height - ball.width/2)
{
	this.color = "#123982";
	ball.y = canvas.height - ball.width/2
	ball.vy = -ball.vy;
	ball.color = this.color;
}
	
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

