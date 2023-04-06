//Define Booleans for each key
var w = false;
var s = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		s = true;
		//player.x += 2;
	}
	if(e.keyCode == 83)
	{
		w = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		s = false;
	}
	if(e.keyCode == 83)
	{
		w = false;
	}
}
