var format = function( amount ) {
	var copper;
	var silver;
	var gold; 
	var formatted;

	amount = amount.toString();
	copper = amount.substr(-2,2);

	if( amount.length > 2) {
		silver = amount.substr(-4,2);
	} else {
		silver = 0;
	}

	if( amount.length > 4 ) {
		gold = amount.substr(0, amount.length - 4);
	} else {
		gold = 0;
	}

	formatted = gold + "g " + silver + "s " + copper + "c";
	return formatted;
}

var average = function() {

	var root = "https://api.guildwars2.com/v2/";
	var totalBuy = 0;
	var totalSell = 0;

	var price;

	var totalTickets = 0;
	var totalWeapons = 0;

	// Skin sets that's currently available
	var aetherAmount = 19;
	var aetherTickets = aetherAmount*5;
	totalWeapons += aetherAmount;
	totalTickets += aetherTickets;

	var chaosAmount = 19;
	var chaosTickets = chaosAmount*5;
	totalWeapons += chaosAmount;
	totalTickets += chaosTickets;

	var dragonAmount = 16;
	var dragonTickets = dragonAmount;
	totalWeapons += dragonAmount;
	totalTickets += dragonTickets;

	var dreamAmount = 19;
	var dreamTickets = dreamAmount*5;
	totalWeapons += dreamAmount;
	totalTickets += dreamTickets;

	var fusedAmount = 16;
	var fusedTickets = fusedAmount*5;
	totalWeapons += fusedAmount;
	totalTickets += fusedTickets;

	var leylineAmount = 16;
	var leylineTickets = leylineAmount*5;
	totalWeapons += leylineAmount;
	totalTickets += leylineTickets;

	var lovestruckAmount = 16;
	var lovestruckTickets = lovestruckAmount*5;
	totalWeapons += lovestruckAmount;
	totalTickets += lovestruckTickets;

	var phoenixAmount = 16;
	var phoenixTickets = phoenixAmount*5;
	totalWeapons += phoenixAmount;
	totalTickets += phoenixTickets;

	var scleriteAmount = 16;
	var scleriteTickets = scleriteAmount*3;
	totalWeapons += scleriteAmount;
	totalTickets += scleriteTickets;

	var tempestAmount = 16;
	var tempestTickets = tempestAmount*5;
	totalWeapons += tempestAmount;
	totalTickets += tempestTickets;

	var tormentedAmount = 19;
	var tormentedTickets = tormentedAmount*5;
	totalWeapons += tormentedAmount;
	totalTickets += tormentedTickets;

	var winterAmount = 10;
	var winterTickets = winterAmount*5;
	totalWeapons += winterAmount;
	totalTickets += winterTickets;

	var zodiacAmount = 16;
	var zodiacTickets = zodiacAmount*5;
	totalWeapons += zodiacAmount;
	totalTickets += zodiacTickets;

	var halloweenAmount = 5;
	var halloweenTickets = halloweenAmount*5;
	totalWeapons += halloweenAmount;
	totalTickets += halloweenTickets;

	var pactAmount = 16;
	var pactTickets = pactAmount*1;
	totalWeapons += pactAmount;
	totalTickets += pactTickets;

	var averageTicket = totalTickets/totalWeapons;


	var data = [44791, 44797, 44812, 44818, 44821, 38070, 38072, 38074, 38076, 38077, 38080, 38082, 38084, 38085, 38089, 41760, 41763, 41766, 41769, 41772, 41775, 41778, 41781, 41784, 41787, 41790, 41793, 41796, 41800, 41803, 41806, 42604, 42608, 42611, 42614, 42617, 42620, 42623, 42626, 42629, 42632, 42635, 42638, 42641, 42644, 42647, 42650, 43367, 43370, 43373, 43376, 43379, 43382, 43385, 43388, 43391, 43394, 43397, 43400, 43403, 43406, 43409, 43412, 44001, 44004, 44007, 44010, 44013, 44016, 44019, 44022, 44025, 44028, 44031, 44034, 44037, 44040, 44043, 44046, 44049, 44052, 44055, 44891, 44894, 44897, 44900, 44903, 44906, 44909, 44912, 44915, 44918, 44921, 44924, 44927, 44930, 44933, 44936, 48958, 48961, 48964, 48967, 48970, 48973];

	var data2 = [48976, 48979, 48982, 48985, 48988, 48991, 48994, 48997, 49000, 49003, 49006, 49009, 49012, 66229, 66230, 66231, 66235, 66239, 66242, 66245, 66247, 66248, 66253, 66257, 66262, 66263, 66266, 66268, 66272, 67028, 67034, 67036, 67039, 67047, 67048, 67049, 67050, 67051, 67052, 67059, 67060, 67061, 67062, 67064, 67065, 67069, 67073, 67074, 67035, 67041, 67042, 67043, 67044, 67045, 67046, 67053, 67055, 67057, 67058, 67066, 67067, 67068, 67070, 67072, 49314, 49317, 49320, 49323, 49326, 49329, 49332, 49335, 49338, 49341, 49344, 49347, 49350, 49353, 49356, 49359, 63875, 63877, 63881, 44830, 44833, 44836, 44839, 44842, 44845, 44848, 44851, 44854, 44857, 44860, 44863, 44866, 44869, 44872, 44875, 68015, 68018, 68016, 68021, 68017, 68020, 68019, 67997, 68000, 67999, 67998, 68009, 68012, 68010, 68011, 68007];

		$.ajax({
			url: root + "commerce/prices/?ids=" + String(data),
			async: false,
			dataType: 'json',
			success: function(prices) {
				var done = 0;
				var sellAverage;
				var buyAverage;
				//price = $.extend({}, price, prices);

				$.ajax({
					url: root + "commerce/prices/?ids=" + String(data2),
					async: false,
					dataType: 'json',
					success: function(prices2) {
						//price = $.extend({}, prices, prices2);

						console.log(data.length+data2.length);

						for ( var i = 0; i < data.length; i++) {

							totalSell = totalSell + prices[i].sells.unit_price;
							totalBuy  = totalBuy  + prices[i].buys.unit_price;
							console.log(i);
							if( i == data.length-1 ) {
								doneData1 = 1;
								console.log("Done");
							}
						}

						if( doneData1 == 1 ) {
							for ( var i = 0; i < data2.length; i++) {

								totalSell = totalSell + prices2[i].sells.unit_price;
								totalBuy  = totalBuy  + prices2[i].buys.unit_price;
								console.log(i);
								if( i == data2.length-1 ) {
									doneData2 = 1;
									console.log("Done");
								}
							}

							if( doneData2 == 1 ) {
								sellAverage = (totalSell/data.length+data2.length)/averageTicket;
								buyAverage = (totalBuy/data.length+data2.length)/averageTicket;
							}
						}

						$( "#total" ).append( "Total Price at Direct Purchace: " + format(totalSell) + "<br />Total Price with Buy Orders: " + format(totalBuy) );
						$( "#average" ).prepend( format(parseInt(sellAverage)) );
						$( "#average small" ).append( "And " + format(parseInt(buyAverage)) + " if you use buy orders." );

					}
				});
			}
		});

}