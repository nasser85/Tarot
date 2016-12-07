app.factory('ReadingFactory', ['TarotFactory', function(TarotFactory) {
	var readingFactory = {};

	readingFactory.drawCards = function(deck, number) {
		var cards;
		var arr = [];
		if (deck == "major") {
			cards = TarotFactory.getMajorArcana()[0].cards;
		} else {
			cards = TarotFactory.getAllCards();
		}
		for (var i = 0; i < number; i++) {
			var num = Math.floor(cards.length*Math.random());
			var flip = Math.floor(2*Math.random());
			arr.push({card: cards[num], orientation: flip});
			cards.splice(num, 1);
		}
		return arr;
	}



	return readingFactory;
}])