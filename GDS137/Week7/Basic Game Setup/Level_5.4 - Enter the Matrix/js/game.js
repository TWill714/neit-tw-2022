	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;
var timer;
var interval;
var player;
var Score = 0;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	canvas.style.backgroundColor="#410063";
	
	
	player = new GameObject({width:50, height: 50,x:canvas.width/2, y:750, color: "yellow"});

 	player.vx = 0
	var amount = 5;
	var particles = [];
	var particles2 = [];
	var colors = ["white", "#88ff88"];
	function rand(low, high)
	{
		return Math.random() * (high - low) + low
	}
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:25, height:25});
		
		var randomColor = Math.round(Math.random());
		particles[i].color = "green"
	
		particles[i].x = rand(0,800)
		particles[i].y = 0
		particles[i].vy = rand(5,10)
		
	}
	for(var i = 0; i < amount; i++)
	{
		particles2[i] = new GameObject({width:25, height:25});
		
		var randomColor = Math.round(Math.random());
		particles2[i].color = "red"
	
		particles2[i].x = rand(0,800)
		particles2[i].y = 0
		particles2[i].vy = rand(5,10)
		
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

	
function animate()
{	
	function rand(low, high)
	{
		return Math.random() * (high - low)
	}
	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}
	player.vx *= fX;
	player.vy *= fY

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	context.clearRect(0,0,canvas.width, canvas.height);	
	



	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;

		if(particles[p].y > canvas.height)
		{
			particles[p].y = 0
			particles[p].x = rand(0,800)
		//	particles[p].vy = rand(50,60)
		}
	if(particles[p].hitTestObject(player))
	{
		for(var i = 0; i < amount; i++)
		{
		particles[p].x = Math.random() * canvas.width;
		particles[p].y = -100
		//particles[p].vy = Math.random() * 10 + 5;
		}

	Score++
	player.color = "green"
	clearTimeout(colorSwap)
	swap = setTimeout(colorSwap, 500)
	
	}
	
			
		//-------------------------------------------------INSTRUCTIONS----------------------------------------------------------
			//If a particle moves off the bottom of the screen do the following:
			//	1. reset it's y to the top of the screen - its height
			//	2. re-calculate it's vy to be a random number between 5 and 15
			//  3. reset its color randomly to one of the colors in the "colors" array
			//     (Hint: The code to do this is already written above)
		//-------------------------------------------------------------------------------------------------------------------------
		
		particles[p].drawRect();
	}
	for(var p = 0; p < particles2.length; p++)
	{	
		particles2[p].x += particles2[p].vx;
		particles2[p].y += particles2[p].vy;

		if(particles2[p].y > canvas.height)
		{
			particles2[p].y = 0
			particles2[p].x = rand(0,800)
			//particles2[p].vy = rand(50,60)
		}
		if(particles2[p].hitTestObject(player))
		{
			for(var i = 0; i < amount; i++)
			{
			particles2[i].x = Math.random() * canvas.width;
			particles2[i].y = -100
		//	particles2[i].vy = Math.random() * 10 + 5;
			}
			for(var i = 0; i < amount; i++)
			{
			particles[i].x = Math.random() * canvas.width;
			particles[i].y = -100
		//	particles[i].vy = Math.random() * 10 + 5;
			}
		Score = 0
		player.color = "red"
		clearTimeout(colorSwap)
		swap = setTimeout(colorSwap, 500)
		
		}

	
			
		//-------------------------------------------------INSTRUCTIONS----------------------------------------------------------
			//If a particle moves off the bottom of the screen do the following:
			//	1. reset it's y to the top of the screen - its height
			//	2. re-calculate it's vy to be a random number between 5 and 15
			//  3. reset its color randomly to one of the colors in the "colors" array
			//     (Hint: The code to do this is already written above)
		//-------------------------------------------------------------------------------------------------------------------------
		
		particles2[p].drawCircle();
		context.font = "30px Arial black bold";
		context.fillStyle = "#555555";
		context.fillText("Score: " + Score, 80, 50,)
	
	player.drawRect();

}

}
 // swaps the color back after being hit
function colorSwap()
{
 player.color = "yellow"
}
