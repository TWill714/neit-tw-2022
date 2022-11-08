var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.fillRect(85,300,100,100);
ctx.strokeRect(85,300,100,100);

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.arc(385,440, 50, 0,(3* Math.PI)/2, false);
ctx.lineTo(385, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(85,680);
ctx.lineTo(280,550)
ctx.stroke();