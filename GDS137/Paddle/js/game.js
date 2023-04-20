//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var score = 0;
var frictionX = .85;	
var frictionY = .97;
var gravity =0.5;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	ball = new GameObject();
	player.x = canvas.width/2;
	player.y = 750;
	player.height = 40;
	player.width = 240;
	player.color = "cyan";
	player.force = 2;

	ball.x = canvas.width/2
	ball.y = canvas.height/2;
	ball.color = "magenta";
	ball.width = 80;
	ball.height= ball.width;
	ball.vx = 5;
	ball.vy = -ball.vy * 0.67;
	ball.force = 2;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player to the right
	if(d)
	{
		player.vx +=  player.ax * player.force;
		//player.x += 2;
		if(player.x > 820)
		{
		//player.x += -2;
		player.vx += player.ax * -player.force;
		}
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
		//player.x += -2;

		if(player.x < 200)
		{
			//player.x += 2;
			player.vx +=  player.ax * player.force;
		}
	}

	player.vx *= frictionX;
	ball.vy *= frictionY;
	//ball.vx *= frictionX;
	ball.vy += gravity;
	player.x += player.vx;
	ball.x += ball.vx;
	ball.y += ball.vy;


if(ball.x > canvas.width - ball.width/2)
{
	ball.vx = -ball.vx;
}
if(ball.x < 0 + ball.width/2)
{
	ball.vx = -ball.vx;
}
if(ball.y < ball.height - ball.width/2)
{
	ball.vy = -ball.vy;
}
if(ball.y > canvas.height - ball.width/2)
{
	score = 0;
	ball.y = canvas.height - ball.width/2
	ball.vy = -ball.vy;
}


	if(ball.hitTestObject(player))
	{

		//ball.x = player.x + player.width/2 + ball.width/2;
		score++;
		ball.vy = -35;
		if(ball.x > player.x + player.width/6)
		{
			ball.vx = ball.force ;
		}
		if(ball.x < player.x - player.width/6)
		{
			ball.vx = -ball.force ;
		}
		if(ball.x > player.x + player.width/3)
		{
			ball.vx = ball.force * 5;
		}
		if(ball.x < player.x - player.width/3)
		{
			ball.vx = -ball.force *5;
		}
	}
	

	context.font = "16px Arial black";
	context.fontcolor = "dark gray";
	context.fillText("Score: ", 80, 25);
	context.fillText(score,140, 25);

	player.drawRect();
	ball.drawCircle();	

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player.x,player.y);
	context.lineTo(ball.x,ball.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();

}

