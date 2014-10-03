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

	var averageTicket = ((19*5)+(19*5)+(16*5)+(19*5)+(16*7)+(16*5)+(16*5)+(16*5)+(16*3)+(19*5)+(10*5)+(16*5)+(5*5))/(19+19+16+19+16+16+16+16+16+16+19+10+16+5);
	/*
	19*5 aether
	19*5 chaos
	16*5 dragon
	19*5 dream
	16*7 fused
	16*5 leyline
	16*5 lovestruck
	16*5 phoenix
	16*3 sclerite
	16*1 tempest
	19*5 tormented
	10*5 winter
	16*5 zodiac
	5*5  halloween
	*/

	var data = [44791, 44797, 44812, 44818, 44821, 38070, 38072, 38074, 38076, 38077, 38080, 38082, 38084, 38085, 38089, 41760, 41763, 41766, 41769, 41772, 41775, 41778, 41781, 41784, 41787, 41790, 41793, 41796, 41800, 41803, 41806, 42604, 42608, 42611, 42614, 42617, 42620, 42623, 42626, 42629, 42632, 42635, 42638, 42641, 42644, 42647, 42650, 43367, 43370, 43373, 43376, 43379, 43382, 43385, 43388, 43391, 43394, 43397, 43400, 43403, 43406, 43409, 43412, 44001, 44004, 44007, 44010, 44013, 44016, 44019, 44022, 44025, 44028, 44031, 44034, 44037, 44040, 44043, 44046, 44049, 44052, 44055, 44891, 44894, 44897, 44900, 44903, 44906, 44909, 44912, 44915, 44918, 44921, 44924, 44927, 44930, 44933, 44936, 48958, 48961, 48964, 48967, 48970, 48973];

	var data2 = [48976, 48979, 48982, 48985, 48988, 48991, 48994, 48997, 49000, 49003, 49006, 49009, 49012, 66229, 66230, 66231, 66235, 66239, 66242, 66245, 66247, 66248, 66253, 66257, 66262, 66263, 66266, 66268, 66272, 67028, 67034, 67036, 67039, 67047, 67048, 67049, 67050, 67051, 67052, 67059, 67060, 67061, 67062, 67064, 67065, 67069, 67073, 67074, 67035, 67041, 67042, 67043, 67044, 67045, 67046, 67053, 67055, 67057, 67058, 67066, 67067, 67068, 67070, 67072, 49314, 49317, 49320, 49323, 49326, 49329, 49332, 49335, 49338, 49341, 49344, 49347, 49350, 49353, 49356, 49359, 63875, 63877, 63881, 44830, 44833, 44836, 44839, 44842, 44845, 44848, 44851, 44854, 44857, 44860, 44863, 44866, 44869, 44872, 44875];

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
var averageTicket = ((19*5)+(19*5)+(16*5)+(19*5)+(16*7)+(16*5)+(16*5)+(16*5)+(16*3)+(19*5)+(10*5)+(16*5)+(5*5))/(19+19+16+19+16+16+16+16+16+16+19+10+16+5);
/*
19*5 aether
19*5 chaos
16*5 dragon
19*5 dream
16*7 fused
16*5 leyline
16*5 lovestruck
16*5 phoenix
16*3 sclerite
16*1 tempest
19*5 tormented
10*5 winter
16*5 zodiac
5*5  halloween
*/