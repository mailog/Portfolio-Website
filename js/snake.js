
$(document).ready(function(){
var canvas = $("#snakecanvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#snakecanvas").width();
var h = $("#snakecanvas").height();

var cw = 10;
var d;
var food;
var score;

var foodcolorcounter = 0;

var snake_array;

function initSnake()
{
	d="right";
	create_snake();
	create_food();
	score = 0;
	if(typeof game_loop != "undefined") clearInterval(game_loop);
	game_loop = setInterval(paint,60);
}

initSnake();

function create_snake()
{
	var length = 5;
	snake_array = [];
	for(var i = length-1; i >= 0; i--)
	{
		snake_array.push({x:1,y:5});
	}
}

function create_food()
{
	food = {
			x:Math.round(Math.random()*(w-cw)/cw),
			y:Math.round(Math.random()*(h-cw)/cw),
	};
}

function paint()
{
	ctx.fillStyle = "cyan";
	ctx.fillRect(0,0,w,h);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0,0,w,h);
	
	var nx = snake_array[0].x;
	var ny = snake_array[0].y;
	
	if(d=="right")nx++;
	else if(d=="left")nx--;
	else if(d=="up")ny--;
	else if(d=="down")ny++;
	
	if(nx==-1||nx==w/cw||ny==-1||ny==h/cw||check_collision(nx,ny,snake_array))
		{
			initSnake();
			return;
		}
	
	if(nx==food.x&&ny==food.y)
		{
			var tail = {x:nx, y:ny};
			score++;
			create_food();
		}
	else
		{
			var tail = snake_array.pop();
			tail.x = nx; tail.y = ny;
		}
	
	snake_array.unshift(tail);
	
	for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			paint_snake(c.x,c.y);
		}
	
	paint_food(food.x,food.y);
	var score_text = "WASD to Move. Score: " + score;
	ctx.fillStyle = "red";
	ctx.font = "18px arial";
	ctx.fillText(score_text, 5, 20);
}

function paint_snake(x,y)
{
	ctx.fillStyle = "chartreuse";
	ctx.fillRect(x*cw, y*cw,cw,cw);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*cw,y*cw,cw,cw);
}

function paint_food(x,y)
{
	foodcolorcounter++;
	if(foodcolorcounter >= 21)
		foodcolorcounter = 0;
	if(foodcolorcounter >= 0 && foodcolorcounter < 3)
		ctx.fillStyle = "red";
	if(foodcolorcounter >= 3 && foodcolorcounter < 6)
		ctx.fillStyle = "orange";
	if(foodcolorcounter >= 6 && foodcolorcounter < 9)
		ctx.fillStyle = "yellow";
	if(foodcolorcounter >= 9 && foodcolorcounter < 12)
		ctx.fillStyle = "green";
	if(foodcolorcounter >= 12 && foodcolorcounter < 15)
		ctx.fillStyle = "blue";
	if(foodcolorcounter >= 15 && foodcolorcounter < 18)
		ctx.fillStyle = "indigo";
	if(foodcolorcounter >= 18 && foodcolorcounter < 21)
		ctx.fillStyle = "purple";
	ctx.fillRect(x*cw, y*cw,cw,cw);
	ctx.strokeStyle = "white";
	ctx.strokeRect(x*cw,y*cw,cw,cw);
}

function check_collision(x,y,array)
{
	for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y ==y)
				{
					return true;
				}
		}
	return false;
}

$(document).keydown(function(e){
	var key = e.which;
	
	if(key == "65" && d != "right") d = "left";
	else if (key == "87" && d != "down") d = "up";
	else if (key == "68" && d != "left") d = "right";
	else if (key == "83" && d != "up") d = "down";
})


})
