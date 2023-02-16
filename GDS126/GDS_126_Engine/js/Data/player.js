/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/Celeste.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:10,
			cycle:true,
			frames:
			[
				{width:82, height:128, startX:0, startY:0},
				{width:82, height:128, startX:82, startY:0},
				{width:82, height:128, startX:164, startY:0},
				{width:82, height:128, startX:246, startY:0},
				{width:82, height:128, startX:328, startY:0},
				{width:82, height:128, startX:410, startY:0},
				{width:82, height:128, startX:492, startY:0},
				{width:82, height:128, startX:574, startY:0},
				{width:82, height:128, startX:656, startY:0},
				{width:82, height:128, startX:738, startY:0}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:4,
			cycle:true,
			frames:
			[
				{width:82, height:128, startX:820, startY:0},
				{width:82, height:128, startX:902, startY:0},
				{width:82, height:128, startX:984, startY:0},
				{width:82, height:128, startX:1066, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:4,
			cycle:false,
			frames:
			[
				{width:82, height:128, startX:1148, startY:0},
				{width:82, height:128, startX:1230, startY:0},
				{width:82, height:128, startX:1312, startY:0},
				{width:82, height:128, startX:1394, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:82, height:128, startX:1476, startY:0},
				{width:82, height:128, startX:1558, startY:0},
				{width:82, height:128, startX:1640, startY:0},
				{width:82, height:128, startX:1722, startY:0},
				{width:82, height:128, startX:1804, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:8,
			cycle:false,
			//width:300,
			frames:
			[
				{width:82, height:128, startX:1886, startY:0},
				{width:82, height:128, startX:1968, startY:0},
				{width:82, height:128, startX:2050, startY:0},
				{width:82, height:128, startX:2132, startY:0},
				{width:82, height:128, startX:2214, startY:0},
				{width:82, height:128, startX:2296, startY:0},
				{width:82, height:128, startX:2378, startY:0},
				{width:82, height:128, startX:2460, startY:0}
				
			]
		}
	}
		
}