window.onload=function()
{
	let players = []
	let NMAX = 10000
	var n = NMAX
	i = Math.floor(Math.random() * players.length)
	let score = []
	
	document.getElementById("add_p").onclick=function()
	{
		p = document.getElementById("player").value;
		if(p.length > 0)
		{
			players.push(p)
			score.push(0)
		
			console.log(players)
			//console.log(score)
			if(players.length == 2)
			{
				let container = document.getElementById("start_button");
				var start = document.createElement("button");
				start.innerHTML = "Start Game!"
				start.id = "start"
				container.appendChild(start)
				start.addEventListener ("click", start_game);
			}
			document.getElementById("player").value = "";
		}
	}
	
	function start_game() 
	{
		header = document.getElementById("header");
		title = document.createElement("h1");
		hr = document.createElement("hr");
		title.innerHTML = "10K-Drinking";
		header.innerHTML = "";
		header.appendChild(title);
		header.appendChild(hr);
		var div_players = document.getElementById("add_players");
		var div_start = document.getElementById("start_button");
		if(div_players != null && div_start != null)
		{
			//console.log(div_players)
			div_players.remove();
			//console.log(div_start)
			div_start.remove();
		}
		var game = document.getElementById("game");
		game.innerHTML = ""
		n = NMAX
		i = Math.floor(Math.random() * players.length)
		var sc = document.createElement("div");
		var p = document.createElement("div");
		p.innerHTML = "Each player drank:"
		sc.appendChild(p)
		for (i in players)
		{
			//console.log(players[i])
			var player = document.createElement("div");
			if (score[i] != 1)
			{
				player.innerHTML = players[i] + ": " + score[i].toString() + " times"
			}
			else
			{
				player.innerHTML = players[i] + ": 1 time"
			}
			sc.appendChild(player)
		}
		sc.id = "score"
		game.appendChild(sc)
		var hr = document.createElement("hr");
		game.appendChild(hr)
		var gen = document.createElement("div");
		gen.id = "gen"
		
		var random_number = document.createElement("div");
		random_number.id = "generated_number"
		gen.appendChild(random_number)
		
		var turn = document.createElement("div");
		if(i > 0)
		{
			turn.innerHTML = "It's " + players[i - 1] + "'s turn"
		}
		else
		{
			turn.innerHTML = "It's " + players[players.length - 1] + "'s turn"
		}
		
		turn.id = "whose_turn"
		gen.appendChild(turn)
		
		var generate = document.createElement("button");
		generate.innerHTML = "Generate number"
		generate.id = "generate"
		generate.addEventListener ("click", random_int);
		gen.appendChild(generate)
		
		var you_drink = document.createElement("div");
		you_drink.id = "who_drinks"
		gen.appendChild(you_drink)
		
		game.append(gen)
		
		
	}
	
	function random_int()
	{
		var value = Math.floor(Math.random() * n) + 1
			
		var rand = document.getElementById("generated_number");
		if(i > 0)
		{
			rand.innerHTML = players[i - 1] + " got " + value.toString()
		}
		else
		{
			rand.innerHTML = players[players.length - 1] + " got " + value.toString()
		}
		
		
		var turn = document.getElementById("whose_turn");
		if(value != 1)
		{
			turn.innerHTML = "It's " + players[i] + "'s turn."
		}
		else
		{
			turn.innerHTML = ""
		}
		
		n = value
		if (n != 1)
		{
            if (i < players.length - 1)
			{
                i ++
			}
            else
			{
                i = 0
			}
		}
		else
		{
			if(i > 0)
			{
				i --
			}
			else
			{
				i = players.length - 1
			}
			console.log(players[i])
			score[i] ++
			var you_drink = document.getElementById("who_drinks");
			you_drink.innerHTML = "Congrats, " + players[i] + "! You drink! " 
			var generate = document.getElementById("generate");
			generate.remove()
			
			var restart = document.createElement("button");
			restart.innerHTML = "Play again"
			restart.id = "restart"
			restart.addEventListener ("click", start_game);
			var gen = document.getElementById("gen")
			gen.appendChild(restart)
		}
	}
	
}