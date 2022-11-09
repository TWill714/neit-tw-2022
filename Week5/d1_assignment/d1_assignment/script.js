var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
//Square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.fillRect(85,300,100,100);
ctx.strokeRect(85,300,100,100);
//Circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.arc(385,440, 65, 0,(2 * Math.PI), false);
ctx.closePath();
ctx.fill();
ctx.stroke();
//Line
ctx.fillStyle = "none";
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(85,680);
ctx.lineTo(280,550)
ctx.stroke();
//Pentagon
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5"

ctx.beginPath();
ctx.moveTo(560,310);
ctx.lineTo(668,284);
ctx.lineTo(725,380);
ctx.lineTo(650,465);
ctx.lineTo(548,420);
ctx.lineTo(560,310);
ctx.closePath();
ctx.fill()
ctx.stroke();

//Star
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32) "
ctx.lineWidth = "5"

ctx.beginPath();
ctx.moveTo(636,497);
ctx.lineTo(668,555);
ctx.lineTo(733,567);
ctx.lineTo(688,615);
ctx.lineTo(696,681);
ctx.lineTo(636,653);
ctx.lineTo(576,681);
ctx.lineTo(584,615);
ctx.lineTo(539,567);
ctx.lineTo(604,555);
ctx.lineTo(636,497);
ctx.closePath();
ctx.fill()
ctx.stroke();