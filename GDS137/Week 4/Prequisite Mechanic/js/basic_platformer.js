//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var key1 = false;
var key2 = false;
var key3 = false;
var key4 = false;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:200, y:100, color: "red"});

	platform0 = new GameObject();
		platform0.width = 800;
		platform0.x =600;
		platform0.y = 450;
		platform0.color = "red";

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

		platform4 = new GameObject();
		platform4.width = 50;
		platform4.height = 200;
		platform4.x = 800;
		platform4.y =600;
		platform4.color = "yellow";
		

	
		
	goal = new GameObject({width:24, height:50, x:900, y:625, color:"#00ffff"});
	goal2 = new GameObject({width:24, height:50, x:900, y:100, color:"yellow"});
	goal3 = new GameObject({width:24, height:50, x:100, y:100, color:"yellow"});
	goal4 = new GameObject({width:24, height:50, x:900, y:350, color:"yellow"});
	goal5 = new GameObject({width:24, height:50, x:100, y:450, color:"yellow"});
	

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
		alert("Thanks for playing my game! Have a great summer.");
		goal.y = 10000;
	}
	if(player.hitTestObject(goal2))
	{
		goal2.y = 10000;
		key1 = true;
	}
	if(player.hitTestObject(goal3))
	{
		goal3.y = 10000;
		key2 = true;
	}
	if(player.hitTestObject(goal4))
	{
		goal4.y = 10000;
		key3 = true;
	}
	if(player.hitTestObject(goal5))
	{
		goal5.y = 10000;
		key4 = true;
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
	while(platform4.hitTestPoint(player.right()) && player.vy >=0 )
	{
		player.x--;
		player.vy = 0;
		player.canJump = true;
	}
	
	if(key1 == true && key2 == true && key3 == true && key4 == true)
	{
		platform4.y= 10000;
	}

	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
	goal2.drawCircle();
	goal3.drawCircle();
	goal4.drawCircle();
	goal5.drawCircle();
}

