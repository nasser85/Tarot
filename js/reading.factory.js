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

	readingFactory.getSpreads = function() {
		var names = ["Current State", "Past, Present, Future", "Career", "Love"];
		var descriptions = [
			"This is a single card spread which tells the querent about his or her current situation.  In the provided example, the 'Judgment' card is drawn in the 'upright' position.  This means that 'Renewal, Result, Determination of a Matter' play a role in the querent's current situation.", 
			"This is a traditional three card spread which reveals to the querent insights about his or her past, present, and future.  In the provided example, the first card drawn is the 'King of Pentacles' in the 'upright' position.  This tells the querent that his or her past is marked with 'Victory, Bravery, Courage, Success.'  The next card drawn is the 'Six of Cups' in the 'reversed' position.  This tells the querent that his or her present situation is marked with 'that which is to come, Shortly, Soon.'  The final card drawn is the 'Four of Swords' in the 'reversed' position.  This indicates that the querent's future holds 'Economy, Precaution, Regulation of Expenditure.'", 
			"The career spread looks at the querent's choice of work and whether or not it's in his or her best interest.  In the provided example, the first card drawn is 'The Hanged Man' in the 'Upright' postion.  This tells the querent that his or her current job involves some sort of 'Sacrifice.'  The second card drawn is the 'Knight of Swords' in the 'Reversed' position.  This tells the querent that the querent's choice of career is wrought with 'Ingenuousness, Simplicity.'  The final card drawn is the 'Nine of Pentacles' in the 'Upright' position.  This tells the querent that, in terms of job security, he or she should use 'Discretion' in his or her career.",
			"The love spread provides the querent insight into his or her current relationship.  The top two cards represent the contributions of the querent and his or her partner, respectively.  The bottom three cards represent the happiness of each person in the relationship as well as the relationship's expected length."
		];
		var arr = [];
		for (var i = 0; i < 4; i++) {
			var obj = {};
			obj.image = i.toString() + "spread.jpg";
			obj.name = names[i];
			obj.description = descriptions[i];
			arr.push(obj);
		}
		return arr;
	}

	return readingFactory;
}])