$(document).ready(function(){
	var canvas_frogger = $("#froggercanvas")[0];
	var ctx_frogger = canvas_frogger.getContext("2d");
	var w_frogger = $("#froggercanvas").width();
	var h_frogger = $("#froggercanvas").height();
	
	var jump_state;
	var jump_stage = 0;

	var cw_frogger = 10;
	var froggercolorcounter = 0;
	var player;

	var score = 0;
	var score_timer = 15;
	var score_counter = 0;

	var obstacle_arr;
	var obstacle_timer = 5;
	var obstacle_counter = 0;

	function initfrogger()
	{
		froggercolorcounter = 0;
		score = 0;
		score_counter = 0;
		obstacle_counter = 0;
		jump_stage = 0;
		obstacle_arr = [];
		create_player();
		if(typeof game_loop_frogger != "undefined") clearInterval(game_loop_frogger);
		game_loop_frogger = setInterval(paint_frogger,60);
	}
	
	initfrogger();
	
	/*function create_aliens()
	{
		var start = {x:0, y:0};
		for(var j = 0; j < 1; j++)
		{
			for(var i = 0; i < 45; i++)
			{
				if(Math.floor(Math.random() * 20) == 1)
				{
					var pos = {x:start.x, y:start.y};
					alien_array.push(pos);
				}
				start.x += 1;
			}
			start.x = 0;
			start.y += 1;
		}
	}*/
	
	function create_player()
	{
		player = {x:2, y:35};
	}
	
	function paint_frogger()
	{
		ctx_frogger.fillStyle = "red";
		ctx_frogger.fillRect(0,0,w_frogger,h_frogger);
		ctx_frogger.strokeStyle = "red";
		ctx_frogger.strokeRect(0,0,w_frogger,h_frogger);
	
		check_collisions();
		
		if(obstacle_counter >= obstacle_timer)
		{
			spawn_obstacle();
			obstacle_timer = Math.floor(Math.random() * 15) + 6;
			obstacle_counter = 0;
		}
		else
		{
			obstacle_counter++;
		}


		paint_player(player.x,player.y);
		jump_update();
		update_obstacles();



		var frogger_text = "L to JUMP. Score: " + score;
		ctx_frogger.fillStyle = "white";
		ctx_frogger.font = "18px arial";
		ctx_frogger.fillText(frogger_text, 5, 20);

		if(score_counter >= score_timer)
		{
			score += 10;
			score_counter = 0;
		}
		else
		{
			score_counter++;
		}
	}

	function start_jump()
	{
		jump_state = true;
	}

	function jump_update()
	{
		if(jump_state)
		{
			switch(jump_stage)
			{
				case 0:
					player.y--;
					jump_stage++;
					break;
				case 1:
					player.y--;
					jump_stage++;
					break;
				case 2:
					player.y--;
					jump_stage++;
					break;
				case 3:
					player.y--;
					jump_stage++;
					break;
				case 4:
					player.y--;
					jump_stage++;
					break;
				case 5:
					player.y++;
					jump_stage++;
					break;
				case 6:
					player.y++;
					jump_stage++;
					break;
				case 7:
					player.y++;
					jump_stage++;
					break;
				case 8:
					player.y++;
					jump_stage++;
					break;
				case 9:
					player.y++;
					jump_stage = 0;
					jump_state = false;
					break;
			}
		}
	}

	function spawn_obstacle()
	{
		var pos = {x:40, y:35};
		obstacle_arr.push(pos);
	}

	function update_obstacles()
	{
		paint_obstacles();
		for(var i = 0; i < obstacle_arr.length; i++)
		{
			obstacle_arr[i].x--;
		}
	}
	
	function check_collisions()
	{
		for(var j = 0; j < obstacle_arr.length; j++)
		{
			if(player.x == obstacle_arr[j].x && player.y == obstacle_arr[j].y)
			{
				obstacle_arr.splice(j,1);
				initfrogger();
			}
		}
	}
	
	function paint_player(x,y)
	{
		ctx_frogger.fillStyle = "pink";
		ctx_frogger.fillRect((x+1)*cw_frogger,y*cw_frogger,cw_frogger,cw_frogger);
	}

	function paint_obstacles()
	{
		for(var i = 0; i < obstacle_arr.length; i++)
		{
			froggercolorcounter++;
			if(froggercolorcounter >= 21)
				froggercolorcounter = 0;
			if(froggercolorcounter >= 0 && froggercolorcounter < 3)
				ctx_frogger.fillStyle = "red";
			if(froggercolorcounter >= 3 && froggercolorcounter < 6)
				ctx_frogger.fillStyle = "orange";
			if(froggercolorcounter >= 6 && froggercolorcounter < 9)
				ctx_frogger.fillStyle = "yellow";
			if(froggercolorcounter >= 9 && froggercolorcounter < 12)
				ctx_frogger.fillStyle = "green";
			if(froggercolorcounter >= 12 && froggercolorcounter < 15)
				ctx_frogger.fillStyle = "blue";
			if(froggercolorcounter >= 15 && froggercolorcounter < 18)
				ctx_frogger.fillStyle = "indigo";
			if(froggercolorcounter >= 18 && froggercolorcounter < 21)
				ctx_frogger.fillStyle = "purple";
			ctx_frogger.fillRect(obstacle_arr[i].x*cw_frogger, obstacle_arr[i].y*cw_frogger, cw_frogger, cw_frogger);	
		}	
	}
	
	$(document).keydown(function(e){
		var key = e.which;
		
		if(key == "76") start_jump();
	})
})