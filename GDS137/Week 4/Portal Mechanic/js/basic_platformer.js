//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

		platform1 = new GameObject();
		platform1.width = 1000;
		platform1.x = platform0.width/2;
		platform1.y =200;
		platform1.color = "red";

		platform2 = new GameObject();
		platform2.width = 100;
		platform2.x = 950;
		platform2.y =650;
		platform2.color = "yellow";

		platform3 = new GameObject();
		platform3.width = 100;
		platform3.x = 50;
		platform3.y =100;
		platform3.color = "yellow";


		
	goal = new GameObject({width:24, height:50, x:900, y:75, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
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
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	platform1.move();
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		window.close();
		window.open("https://twilliamsongds11121.netlify.app/gds137/week%204/elements/", "_blank");
		goal.y = 10000;
	}
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy >=0)
	{
		player.y++;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vy >=0)
	{
		player.x++;
		player.canJump = true;
	}

	if(platform2.hitTestPoint(player.bottom()) || platform2.hitTestPoint(player.right()))
	{
		player.x = 151;;
		player.y = 100;
	}
	if(platform3.hitTestPoint(player.bottom()) || platform3.hitTestPoint(player.left()))
	{
		player.x = 851;
		player.y = 650;
	}
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

