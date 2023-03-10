/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.width=205;
startButton.height = 58;
startButton.hitBoxWidth=205;
startButton.x = 817;
startButton.y = 225;
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/TWUpdatedStart.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

var exitButton = new GameObject();
exitButton.width=205;
exitButton.height = 58;
exitButton.hitBoxWidth=205;
exitButton.x = 817;
exitButton.y = 408;

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`);
			sounds.play('music',0);

		}

		//Hover Effect Graffic
		startButton.color = `transparent`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `transparent`
	}
	
	//Makes the button clickable
	if(exitButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState('menu')
		}

		//Hover Effect Graffic
		exitButton.color = `transparent`
	}
	else
	{
		//Default Button Graphic
		exitButton.color = `transparent`
	}
	

	menuBackground.drawStaticImage();
	startButton.render();
	exitButton.render();
}
	
	
