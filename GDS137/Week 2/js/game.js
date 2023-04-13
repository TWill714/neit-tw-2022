//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var p1Wins = 0;
var p2Wins = 0;
var img = document.getElementById("ric");

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player2 = new GameObject();
	ball = new GameObject();
	player.x = 30;
	player.y = canvas.height/2;
	player.height = 180;
	player.width = 30;

	player2.x = 994;
	player2.y = canvas.height/2;
	player2.height = 180;
	player2.width = 30;
	player2.color = "yellow";

	ball.width = 50;
	ball.height= ball.width;
	ball.vx =-4;
	ball.vy = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	context.save();
	context.strokeStyle = "lightblue";
	context.beginPath();
	context.moveTo(canvas.width/2,0);
	context.lineTo(canvas.width/2,800);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.restore();


	context.font = "20px Arial";
	context.fontcolor = "purple";
	context.fillText("Player 1  |  Player 2", canvas.width/2 - 87 , 30);
	context.fillText(p1Wins, canvas.width/2 - 24, 50);
	context.fillText("-", canvas.width/2 -4 , 50);
	context.fillText(p2Wins, canvas.width/2 + 13, 50);

	context.drawImage(img, ball.x - 25, ball.y - 25, ball.width, ball.height);

	//Move the Player to the right
	if(w)
	{
		console.log("Moving Up");
		player.y += 2;
		if(player.y > 710)
		{
		player.y += -2;
		}
	}
	if(s)
	{
		console.log("Moving Down");
		player.y += -2;
		if(player.y < 90)
		{
			player.y += 2;
		}
	}
	if(down)
	{
		console.log("Moving Up");
		player2.y += 2;
		if(player2.y > 710)
		{
		player2.y += -2;
		}
	}
	if(up)
	{
		console.log("Moving Down");
		player2.y += -2;
		if(player2.y < 90)
		{
			player2.y += 2;
		}
	}
	ball.x += ball.vx;
	ball.y += ball.vy;
if(ball.x < ball.width/2)
{
	p2Wins++
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
}
if(ball.x > canvas.width - ball.width/2)
{
	p1Wins++
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
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
	if(ball.hitTestObject(player))
	{

		ball.x = player.x + player.width/2 + ball.width/2;
		ball.vx = 4;
		if(ball.y < player.y - player.height/6)
		{
	
			ball.vy = -4;
		}
		if(ball.y > player.y + player.height/6)
		{
			ball.vy = 4;
		}
	}
	if(ball.hitTestObject(player2))
	{

		ball.x = player2.x - player2.width/2 - ball.width/2;
		ball.vx = -4;
		if(ball.y > player2.y + player2.height/6)
		{
	
			ball.vy = -4;
		}
		if(ball.y > player2.y + player2.height/6)
		{
			ball.vy = 4;
		}
	}
	
	//Update the Screen
	player.drawRect();
	player2.drawRect();
	//ball.drawCircle();
}

