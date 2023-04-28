//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:100, color: "red"});

	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = 450;
		platform0.color = "blue";

		platform1 = new GameObject();
		platform1.width = 600;
		platform1.x = 300
		platform1.y =200;
		platform1.color = "red";

		platform2  = new GameObject();
		platform2.width = 200;
		platform2.x = 900
		platform2.y =200;
		platform2.color = "red";

		platform3 = new GameObject();
		platform3.width = 1000;
		platform3.x = 500
		platform3.y =750;
		platform3.color = "red";
		
		button  = new GameObject();
		button.width = 50;
		button.height = 20;
		button.x = 950;
		button.y = 140;
		button.color = "blue";

		button2  = new GameObject();
		button2.width = 50;
		button2.height = 20;
		button2.x = 50;
		button2.y = 260;
		button2.color = "red";
		
		button3  = new GameObject();
		button3.width = 50;
		button3.height = 20;
		button3.x = 400;
		button3.y = 510;
		button3.color = "blue";

		



		

		
	goal = new GameObject({width:24, height:50, x:900, y:625, color:"#00ffff"});
	

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

	
	
	while(platform0.hitTestPoint(player.bottom()) && player.color != platform0.color)
	{
		while(player.height==0)
	{
		player.height ++;
	}
	player.y--;
	player.vy = 0;
	player.height--;
	
	a = false;
	d = false;
	player.canJump = false;
	}
	while(platform2.hitTestPoint(player.bottom()) && player.color != platform2.color)
	{
		while(player.height==0)
	{
		player.height++;
	}
		player.y--;
		player.vy = 0;
	player.height--;
	a = false;
	d = false;
	player.canJump = false;
	}
	while(platform3.hitTestPoint(player.bottom()) && player.color != platform3.color)
	{
		while(player.height==0)
	{
		player.height++
	}
		player.y--;
		player.vy = 0;
	player.height--;
	a = false;
	d = false;
	player.canJump = false;
	}
	while(platform1.hitTestPoint(player.bottom()) && player.color != platform1.color)
	{
		while(player.height==0)
	{
		player.height++;
	}
		player.y--;
		player.vy = 0;
	player.height--;
	a = false;
	d = false;
	player.canJump = false;
	
	}
	
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0 )
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;

	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0 )
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
		goal.y = 10000;
	}
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vy >=0)
	{
		player.x++;
		player.canJump = true;
	}

	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0 )
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0 )
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(button.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		player.color = "blue";
	}
	if(button2.hitTestPoint(player.top()) && player.vy <=0 || button2.hitTestPoint(player.left()) && player.vy <=0)
	{
		player.y++;
		player.canJump = true;
		player.color = "red";
		platform0.width= 900;
		platform0.x = 600;
	}
	while(button3.hitTestPoint(player.top()) && player.vy >=0)
	{
		player.y++;
		player.vy = 0;
		player.canJump = true;
		player.color = "blue";
	}


	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	button.drawRect(); 
	button2.drawRect();
	button3.drawRect();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

