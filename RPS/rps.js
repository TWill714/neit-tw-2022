var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
    clearText();
})
btn[1].addEventListener(`click`, function(e){
    play(1)
    clearText();
})
btn[2].addEventListener(`click`, function(e){
    play(2)
    clearText();
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    ctx.font = "20px  Arial";
    ctx.fillStyle = "purple";
    ctx.fillText("You chose "  + rps[pChoice] + " and the computer chose " + rps[cChoice], 300, 200);

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.fillText("You Tie",450,300);
            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillText("You Lose",450,300);
            }
            else
            {
                //display a win
                ctx.fillText("You Win",450,300);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText("You Win",450,300);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText("You Tie",450,300);
                }
                else
                {
                    //display a win
                    ctx.fillText("You lose",450,300);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText("You Lose",450,300);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText("You Win",450,300);
                }
                else
                {
                    //display a win
                    ctx.fillText("You Tie",450,300);
                }
             break;
    }
}
