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
				{width:128, height:128, startX:0, startY:0},
				{width:128, height:128, startX:128, startY:0},
				{width:128, height:128, startX:257, startY:0},
				{width:128, height:128, startX:385, startY:0},
				{width:128, height:128, startX:513, startY:0},
				{width:128, height:128, startX:641, startY:0},
				{width:128, height:128, startX:769, startY:0},
				{width:128, height:128, startX:897, startY:0},
				{width:128, height:128, startX:1025, startY:0},
				{width:128, height:128, startX:1153, startY:0}
				
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:14,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:1408, startY:0},
				{width:128, height:128, startX:1537, startY:0},
				{width:128, height:128, startX:1665, startY:0},
				{width:128, height:128, startX:1793, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:18,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:1921, startY:0},
				{width:128, height:128, startX:2049, startY:0},
				{width:128, height:128, startX:2177, startY:0},
				{width:128, height:128, startX:2305, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:3,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:2433, startY:0},
				{width:128, height:128, startX:2561, startY:0},
				{width:128, height:128, startX:2689, startY:0},
				{width:128, height:128, startX:2817, startY:0},
				{width:128, height:128, startX:2945, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:4,
			cycle:false,
			//width:300,
			frames:
			[
				{width:128, height:128, startX:3073, startY:0},
				{width:128, height:128, startX:3201, startY:0},
				{width:128, height:128, startX:3329, startY:0},
				{width:128, height:128, startX:3457, startY:0},
				{width:128, height:128, startX:3585, startY:0},
				{width:128, height:128, startX:3713, startY:0},
				{width:128, height:128, startX:3841, startY:0},
				{width:128, height:128, startX:3969, startY:0}
				
			]
		}
	}
		
}