$(document).ready(function(){
	var canvas_space = $("#spacecanvas")[0];
	var ctx_space = canvas_space.getContext("2d");
	var w_space = $("#spacecanvas").width();
	var h_space = $("#spacecanvas").height();

	var cw_space = 10;
	var score_space;
	
	var shoot_counter;
	var update_bullets_counter;
	var aliencolorcounter;

	var alien_array;
	var bullet_array;
	var alienupdatecounter = 0;
	var aliencreatecounter = 0;
	var player;
	
	function initSpace()
	{
		aliencolorcounter = 0;
		score_space = 0;
		shoot_counter = 0;
		alienupdatecounter = 0;
		aliencreatecounter = 0;
		update_bullets_counter = 0;
		alien_array = [];
		bullet_array = [];
		create_aliens();
		create_player();
		if(typeof game_loop_space != "undefined") clearInterval(game_loop_space);
		game_loop_space = setInterval(paint_space,60);
	}
	
	initSpace();
	
	function create_aliens()
	{
		var start = {x:0, y:0};
		for(var j = 0; j < 1; j++)
		{
			for(var i = 0; i < 40; i++)
			{
				if(Math.floor(Math.random() * 60) == 1)
				{
					var pos = {x:start.x, y:start.y};
					alien_array.push(pos);
				}
				start.x += 1;
			}
			start.x = 0;
			start.y += 1;
		}
	}
	
	function create_player()
	{
		player = {x:20, y:37};
	}
	
	function paint_space()
	{
		ctx_space.fillStyle = "black";
		ctx_space.fillRect(0,0,w_space,h_space);
		ctx_space.strokeStyle = "black";
		ctx_space.strokeRect(0,0,w_space,h_space);

		if(aliencreatecounter >= 30)
		{
			create_aliens();
			aliencreatecounter = 0;
		}
		else
		{
			aliencreatecounter +=1;
		}
		shoot_counter++;
		if(shoot_counter >= 15)
		{
			shoot_counter = 0;
			shoot();
		}
		
		
		check_collisions();
		
		paint_player(player.x,player.y);
		paint_bullets();
		paint_aliens();

		update_bullets();
		update_aliens();
		
		var space_text = "J/K to MOVE. Score: " + score_space;
		ctx_space.fillStyle = "white";
		ctx_space.font = "18px arial";
		ctx_space.fillText(space_text, 5, 20);
	}
	
	function shoot()
	{
		var bullet = {x:player.x, y:player.y-3}
		bullet_array.push(bullet);
	}
	
	function update_bullets()
	{
		for(var i = 0; i < bullet_array.length; i++)
			{
				bullet_array[i].y--;
			}
	}
	
	function update_aliens()
	{
		if(alienupdatecounter >= 20)
		{
			for(var i = 0; i < alien_array.length; i++)
				{
					alien_array[i].y++;
					if(alien_array[i].y >=40)
					{
						initSpace();
					}
				}
			alienupdatecounter = 0;
		}
		else
		{
			alienupdatecounter += 1;	
		}
	}
	
	function check_collisions()
	{
		for(var i = 0; i < bullet_array.length; i++)
		{
				for(var j = 0; j < alien_array.length; j++)
				{
					if(bullet_array[i].x == alien_array[j].x && bullet_array[i].y == alien_array[j].y)
					{
						score_space += 10;
						bullet_array.splice(i,1);
						alien_array.splice(j,1);
					}
				}
		}
	}
	
	function paint_bullets()
	{
		for(var i = 0; i < bullet_array.length; i++)
			{
				paint_bullet(bullet_array[i].x,bullet_array[i].y);
			}
	}
	
	function paint_aliens()
	{
		for(var i = 0; i < alien_array.length; i++)
		{
			paint_alien(alien_array[i].x,alien_array[i].y);
		}
	}
	
	function paint_alien(x,y)
	{
		aliencolorcounter++;
		if(aliencolorcounter >= 21)
			aliencolorcounter = 0;
		if(aliencolorcounter >= 0 && aliencolorcounter < 3)
			ctx_space.fillStyle = "red";
		if(aliencolorcounter >= 3 && aliencolorcounter < 6)
			ctx_space.fillStyle = "orange";
		if(aliencolorcounter >= 6 && aliencolorcounter < 9)
			ctx_space.fillStyle = "yellow";
		if(aliencolorcounter >= 9 && aliencolorcounter < 12)
			ctx_space.fillStyle = "green";
		if(aliencolorcounter >= 12 && aliencolorcounter < 15)
			ctx_space.fillStyle = "blue";
		if(aliencolorcounter >= 15 && aliencolorcounter < 18)
			ctx_space.fillStyle = "indigo";
		if(aliencolorcounter >= 18 && aliencolorcounter < 21)
			ctx_space.fillStyle = "purple";
		ctx_space.fillRect(x*cw_space, y*cw_space, cw_space, cw_space);	
		/*ctx_space.fillRect((x+2)*cw_space, y*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-2)*cw_space, y*cw_space, cw_space, cw_space);	
		ctx_space.fillRect(x*cw_space, (y-1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-1)*cw_space, (y-1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-2)*cw_space, (y-1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+1)*cw_space, (y-1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+2)*cw_space, (y-1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-2)*cw_space, (y-2)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+2)*cw_space, (y-2)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-3)*cw_space, (y-3)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+3)*cw_space, (y-3)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect(x*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-1)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-2)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+1)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+2)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-3)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+3)*cw_space, (y+1)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-2)*cw_space, (y+2)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+2)*cw_space, (y+2)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x-1)*cw_space, (y+3)*cw_space, cw_space, cw_space);	
		ctx_space.fillRect((x+1)*cw_space, (y+3)*cw_space, cw_space, cw_space);	*/
	}
	
	function paint_bullet(x,y){
		ctx_space.fillStyle = "red";
		ctx_space.fillRect(x*cw_space, y*cw_space, cw_space, cw_space);	
	}
	function paint_player(x,y)
	{
		ctx_space.fillStyle = "white";
		ctx_space.fillRect((x+1)*cw_space,y*cw_space,cw_space,cw_space);
		ctx_space.fillRect((x-1)*cw_space,y*cw_space,cw_space,cw_space);
		ctx_space.fillRect(x*cw_space,(y-1)*cw_space,cw_space,cw_space);
		ctx_space.fillRect((x+1)*cw_space,(y-1)*cw_space,cw_space,cw_space);
		ctx_space.fillRect((x-1)*cw_space,(y-1)*cw_space,cw_space,cw_space);
		ctx_space.fillRect(x*cw_space,(y-2)*cw_space,cw_space,cw_space);
		ctx_space.fillRect(x*cw_space,y*cw_space,cw_space,cw_space);
	}
	
	$(document).keydown(function(e){
		var key = e.which;
		
		if(key == "74") player.x--;
		else if (key == "75") player.x++;
	})
})