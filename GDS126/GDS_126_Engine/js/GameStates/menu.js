/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:205, height:58,x:817, y:320 , hitBoxWidth:210});
//startButton.img.src="images/StartButton.png"

var menuBackground = new GameObject();
menuBackground.img.src = "images/Start_No_Buttons.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height



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
		startButton.img.src="images/StartHover.png"
		var startClick = context.createPattern(startButton.img, `no-repeat`);
		startButton.color = startClick;
	}
	else
	{
		//Default Button Graphic
		startButton.img.src="images/StartButton.png"
		var startDefault = context.createPattern(startButton.img, `no-repeat`);
		startButton.color =  startDefault;
	}
	
	
	

	menuBackground.drawStaticImage();
	startButton.render();
	exitButton.render();
}
	
	
