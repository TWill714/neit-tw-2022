var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
		//Move the Player
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
	ball.drawCircle();
}
