//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var key = false;
var first = 0;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({color: "#ffff00",height:50,width:50,x:canvas.width/2, y:775});
	player1 = new GameObject({color: "orange",height:50,width:50,x:rand(0,200), y:0});
	player2 = new GameObject({color: "blue",height:50,width:50,x:rand(200,400), y:0});
	player3 = new GameObject({color: "purple",height:50,width:50,x:rand(400,600), y:0});
	player4 = new GameObject({color: "brown",height:50,width:50,x:rand(600,800), y:0});
	player5 = new GameObject({color: "black",height:50,width:50,x:rand(0,800), y:0});

	bad1 = new GameObject({color: "orange",height:50,width:50,x:rand(0,200), y:0});
	bad2 = new GameObject({color: "blue",height:50,width:50,x:rand(200,400), y:0});
	bad3 = new GameObject({color: "purple",height:50,width:50,x:rand(400,600), y:0});
	bad4 = new GameObject({color: "brown",height:50,width:50,x:rand(600,800), y:0});
	bad5 = new GameObject({color: "black",height:50,width:50,x:rand(0,800), y:0});

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var vy = 4

	
	
	

	

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

	//player.vy += gravity;
	if(first == 0)
	{
		player1.vy += rand(.05,.1)
		player2.vy += rand(.05,.2)
		player3.vy += rand(.05,.3)
		player4.vy += rand(.05,.4)
		player5.vy += rand(.05,.5)
		bad5.vy += rand(.05,.5)
		bad1.vy += rand(.05,.4)
		bad2.vy += rand(.05,.3)
		bad3.vy += rand(.05,.2)
		bad4.vy += rand(.05,.1)
	}


	for(var i = 1; i < 5; i++)
{
	player[i].vy *= fY;
	player[i].vx *= fX;
	player[i].x += Math.round(player[i].vx);
	player[i].vy += rand(.05,.1);
	if(player[i].y > 800)
	{
		player[i].y = -25
		player[i].x = rand(0,800);
		player[i].vy += rand(.05,.5);
		first++;
	}
	bad[i].vy *= fY;
	bad[i].vx *= fX;
	bad[i].x += Math.round(player[i].vx);
	bad[i].vy += rand(.05,.1);
	if(bad[i].y > 800)
	{
		bad[i].y = -25
		bad[i].x = rand(0,800);
		bad[i].vy += rand(.05,.5);
		first++
}



	

	player.drawRect();
	player1.drawRect();
	player2.drawRect();
	player3.drawRect();
	player4.drawRect();
	player5.drawRect();
	bad1.drawCircle();
	bad2.drawCircle();
	bad3.drawCircle();
	bad4.drawCircle();
	bad5.drawCircle();
	
	//Show hit points
	
	
}}


