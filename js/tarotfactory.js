app.factory('TarotFactory', function() {
	var tarotFactory = {};
	
	tarotFactory.getMajorArcana = function() {
		var arr = [];
		var major = {};
		major.descriptions = [
			"A man with a fool's cap, dressed like a jester, with a stick and bundle over his shoulder. Before him is the butterfly of pleasure luring him on (while in some packs a tiger, in others a dog, attacks him from behind). It signifies Folly, Expiation.",
			"Before a table covered with the appliances of his art stands the figure of a juggler, one hand upraised holding a wand (in some packs, a cup), the other pointing downwards. He wears a cap of maintenance like that of the kings, whose wide brim forms a sort of aureole round his head. His body and arms form the shape of the Hebrew letter Aleph, to which this card corresponds. He symbolises Will.",
			"A woman crowned with a high mitre or tiara (her head encircled by a veil), a stole (or a solar cross) upon her breast, and the Book of Science open in her hand. She represents Science, Wisdom, or Knowledge.",
			"A winged and crowned woman seated upon a throne, having in one hand a sceptre bearing a globe surmounted by a cross, while she rests the other upon a shield with an eagle blazoned therein on whose breast is the cross. She is the Symbol of Action, the result of the union of Science and Will.",
			"He is crowned (and leaning against a throne, his legs form a cross, and beside him, beneath his left hand, is a shield blazoned with an eagle). In his right hand he bears a sceptre similar to that of the Empress. His body and arms form a triangle, of which his head is the apex, so that the whole figure represents a triangle above a cross. He represents Realisation.",
			"He is crowned with the papal tiara, and seated between the two pillars of Hermes and of Solomon, with his right hand he makes the sign of esoterism, and with his left he leans upon a staff surmounted by a triple cross. (Before him kneel two ministers.) He is the symbol of Mercy and Beneficence.",
			"This is usually described as representing Man between Vice and Virtue, while a winged genius threatens Vice with his dart. But I am rather inclined to the opinion that it represents the Qabalistical Microprosopus between Binah and Malkuth (see my Kabbalah Unveiled), while the figure above shows the Influence descending from Kether. It is usually considered to mean Proof or Trial; but I am inclined to suggest Wise Disposition as its signification.",
			"This is a most complicated and important symbol, which has been restored by Eliphas Levi. It represents a Conqueror crowned and bearing a sceptre, riding in a cubical chariot, surmounted by four columns and a canopy, and drawn by two horses, one of which looks straight forward, while the other turns his head towards him. (Two wheels are shown in the complete single-headed figure.) It represents Triumph, and Victory of Justice and Judgment.",
			"A woman crowned with crown and cap of maintenance, who calmly, and Without effort, closes the jaws of a furious lion. She represents Strength.",
			"An old and bearded man wrapped in a mantle, and with his head covered with a cowl, bearing in his right hand the lantern of occult science, while in his left he holds his magic wand half hidden beneath his cloak. He is Prudence.",
			"A wheel of seven spokes (the two halves of the double-headed cards make it eight spokes, which is incorrect) revolving (between two uprights), On the ascending side is an animal ascending, and on the descending side is a sort of monkey descending; both forms are bound to the wheel. Above it is the form of an angel (or a sphinx in some) holding a sword in one hand and a crown in the other. This very complicated symbol is much disfigured, and has been well restored by Levi. It symbolises Fortune, good or bad.",
			"A woman crowned and seated on a throne (between two columns), holding in her right hand an upright sword, and in her left the scales. She symbolises Equilibrium and Justice.",
			"This extraordinary symbol is almost unintelligible in the double-headed cards. Properly, it represents a man hung head downwards from a sort of gibbet by one foot (his hands are bound behind his back in such a manner that his body forms a triangle with the point downwards), and his legs a cross above it. (Two sacks or weights are attached to his armpits.) He symbolises Sacrifice.",
			"A skeleton armed with a Scythe (wherewith he mows down heads in a meadow like grass). He signifies Transformation, or Change.",
			"An angel with the sign of the Sun on her brow Pouring liquid from one vessel into another. She represents Combination.",
			"A horned and winged demon with eagle's claws (standing on an altar to which two smaller devils are bound by a collar and cord). In his left hand he bears a flame-headed sceptre. He is the image of Fate or Fatality, good or evil.",
			"A Tower whose Upper part is like a crown, struck by a lightning-flash. (Two men fall headlong from it, One of whom is in such an attitude as to form a Hebrew letter Ayin.) Sparks and debris are falling. It shows Ruin, Disruption.",
			"A nude female figure pours water upon the earth from two vases. In the heavens above her shines the Blazing Star of the Magi (surrounded by seven others), trees and plants grow beneath her magic influence (and on one the butterfly of Psyche alights). She is the star of Hope.",
			"The moon shining in the heavens, drops of dew falling, a wolf and a dog howling at the Moon, and halted at the foot of two towers, a path which loses itself in the horizon (and is sprinkled with drops of blood, a crayfish emblematic of the sign Cancer, ruled over by the Moon, crawls through water in the foreground towards the land). It symbolises Twilight, Deception, and Error.",
			"The Sun sending down his rays upon two children, who suggest the sign Gemini. (Behind them is a low wall.) It signifies Earthly Happiness.",
			"An Angel in the heavens blowing a trumpet, to which a standard with a cross thereon is attached. The Dead rise from their tombs. It signifies Renewal, Result.",
			"Within a flowery wreath is a female figure nude save for a light scarf. She represents Nature and the Divine Presence therein. In each hand she should bear a wand. At the four angles of the card are the four cherubic animals of the Apocalypse. Above, the Eagle and the Man; below, the Lion and the Bull. It represents Completion, Reward."
		];
		major.names =["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Heirophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];
		major.upsides =["Folly, Expiation, Wavering", "Will, Will-Power, Dexterity", "Science, Wisdom, Knowledge, Education", "Action, Plan, Undertaking Movement in a matter","Realisation, Effect, Development", "Mercy, Beneficence Kindness", "Wise Dispositions, Proof", "Triumph, Victory, Overcoming obstacles", "Power, Might, Force, Strength", "Prudence, Caution, Deliberation", "Good Fortune, Success, Unexpected Luck", "Equilibrium, Balance, Justice", "Self-sacrifice, Sacrifice, Devotion", "Death, Change, Transformation", "Combination, Conformation, Uniting", "Fatality for Good", "Ruin, Disruption, Over-throw", "Hope, Expectation", "Twilight, Deception, Error", "Happiness, Content, Joy", "Renewal, Result", "Completion, Good Reward"];
		major.downsides = ["Hesitation, Instability", "Will applied to evil ends", "Conceit, Ignorance, Unskilfulness", "Inaction, Frittering away of power", "Stoppage, Check, Immature", "Over-kindness, weakness", "Unwise Plans", "Overthrown", "Abuse of Power, Overbearingness", "Over-prudence, Timorousness, Fear", "Ill-Fortune, Failure", "Want of Balance, Abuse of Justice", "Selfishness, Unbound, Partial sacrifice", "Death just escaped, Partial change", "Ill-advised combinations, Disunion", "Fatality for Evil", "Partial loss", "Hopes not fulfilled", "Fluctuation, slight Deceptions", "Partial contentment", "Postponement of Result, Delay", "Evil Reward, or Recompense"];

		for (var i = 0; i < major.descriptions.length; i++) {
			var obj = {};
			obj.name = major.names[i];
			obj.description = major.descriptions[i];
			obj.image = i.toString() + ".jpg";
			obj.upright = major.upsides[i];
			obj.reversed = major.downsides[i];
			arr.push(obj);
		}
		return [{cards: arr}];
	}

	tarotFactory.getMinorArcana = function() {
		var minor = [
			{name: "The Wands", cards: []},
			{name: "The Cups", cards: []},
			{name: "The Pentacles", cards: []},
			{name: "The Swords", cards: []}
		];
		var numbers = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
		var descriptions = {
			wands: [
				"A hand issuing from a cloud grasps a stout wand or club.",
				"A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side.",
				"A calm, stately personage, with his back turned, looking from a cliff's edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them.",
				"From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house.",
				"A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the divinatory meanings.",
				"A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side.",
				"A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below.",
				"The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold.",
				"The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade.",
				"A man oppressed by the weight of the ten staves which he is carrying.",
				"In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
				"He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith.",
				"The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic.",
				"The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne."
			],
			cups: [
				"The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana.",
				"A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place.",
				"Maidens in a garden-ground with cups uplifted, as if pledging one another.",
				"A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment.",
				"A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding.",
				"Children in an old garden, their cups filled with flowers.",
				"Strange chalices of vision, but the images are more especially those of the fantastic spirit.",
				"A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern.",
				"A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects.",
				"Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond.",
				"A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form.",
				"Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision.",
				"Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream.",
				"He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards."
			],
			pentacles: [
				"A hand--issuing, as usual, from a cloud--holds up a pentacle.",
				"A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed.",
				"A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest.",
				"A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has.",
				"Two mendicants in a snow-storm pass a lighted casement.",
				"A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart.",
				"A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there.",
				"An artist in stone at his work, which he exhibits in the form of trophies.",
				"A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being.",
				"A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child's hand is on one of them.",
				"A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him.",
				"He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein.",
				"The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein.",
				"The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money."
			],
			swords: [
				"A hand issues from a cloud, grasping a sword, the point of which is encircled by a crown.",
				"A hoodwinked female figure balances two swords upon her shoulders.",
				"Three swords piercing a heart; cloud and rain behind.",
				"The effigy of a knight in the attitude of prayer, at full length upon his tomb.",
				"A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field.",
				"A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength.",
				"A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand.",
				"A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage.",
				"One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation.",
				"A prostrate figure, pierced by all the swords belonging to the card.",
				"A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment.",
				"He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart.",
				"Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power.",
				"He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office."
			]
		};
		var upsides = {
			wands: ["Creation, invention, enterprise", "Riches, Fortune, Opulence", "Enterprise, Undertaking, Commerce", "Society, Union, Association, Concord", "Gold, Opulence, Gain, Heritage", "Attempt, Hope, Desire, Wish", "Success, Gain, Advantage, Profit", "Understanding, Observation, Direction", "Order, Discipline, Good Arrangement", "Confidence, Security, Honour, Good Faith", "A Good Stranger, Good News", "Departure, Separation, Disunion", "Love of Money, Avarice, Usury", "Knowledge, Education"],
			cups: ["Feasting, Banquet, Good Cheer", "Love, Attachment, Friendship", "Success, Triumph, Victory", "Displeasure, Discontent, Dissatisfaction", "Union, Junction, Marriage, Inheritance", "The Past, passed by, Faded", "Idea, Sentiment, Reflection, Project", "Friendship, Attachment, Tenderness", "Victory, Advantage, Success, Triumph", "The Town wherein one resides, Honour, Consideration", "A fair Youth, Confidence, Probity", "Arrival, Approach, Advance", "Success, Happiness, Advantage", "Goodness, Kindness, Liberality"],
			pentacles: ["Perfect Contentment, Felicity, Prosperity", "Embarrassment, Worry, Difficulties", "Nobility, Elevation, Dignity", "Pleasure, Gaiety, Enjoyment, Satisfaction", "Lover or Mistress, Love, Sweetness, Affection", "Presents, Gifts, Gratification", "Money, Finance, Treasure, Gain, Profit", "A dark Girl, Beauty, Candour, Chastity", "Discretion, Circumspection, Prudence, Discernment", "House, Dwelling, Habitation, Family", "Economy, Order, Rule, Management", "Trustworthy, Wisdom", "Liberality, Greatness of Soul, Generosity", "Victory, Bravery, Courage, Success"],
			swords: ["Triumph, Fecundity, Fertility, Prosperity", "Friendship, Valour, Firmness, Courage", "Separation, Removal, Rupture, Quarrel", "Solitude, Retreat, Abandonment, Solitary", "Mourning, Sadness, Affliction", "Envoy, Messenger, Voyage, Travel", "Hope, Confidence, Desire, Attempt, Wish", "Sickness, Calumny, Criticism, Blame", "Conscience, Probity, Good Faith, Integrity", "Tears, Affliction, Grief, Sorrow", "Overlooking, Authority", "Skilfulness, Capacity, Address, Promptitude", "Loss, Privation, Absence, Separation", "Power, Command, Superiority, Authority"]
		};
		var reverseds = {
			wands: ["Fall, decadence, ruin, perdition", "Surprise, Astonishment", "Hope, Desire, Attempt, Wish", "Prosperity, Success, Happiness, Advantage", "Legal proceedings, Judgment, Law", "Infidelity, Treachery, Disloyalty, Perfidy", "Indecision, Doubt, Hesitation", "Quarrels, Internal disputes, Discord", "Obstacles, Crosses, Delay, Displeasure", "Treachery, Subterfuge, Duplicity", "Ill News, Displeasure", "Rupture, Discord, Quarrel", "Obstacles, Resistance, Opposition", "Counsel, Advice, Deliberation"],
			cups: ["Change, Novelty, Metamorphosis, Inconstancy", "Crossed desires, Obstacles, Opposition", "Expedition of business, Quickness", "New Acquaintance, Conjecture, Sign, Presentiment", "Arrival, Return, News, Surprise, False projects", "The Future, that which is to come, Soon", "Plan, Design, Resolution, Decision", "Gaiety, Feasting, Joy, Pleasure", "Faults, Errors, Mistakes, Imperfections", "Combat, Strife, Opposition, Differences", "A Flatterer, Deception, Artifice", "Duplicity, Abuse of Confidence, Fraud, Cunning", "Success, but with some attendant trouble", "Distrust, Doubt, Suspicion"],
			pentacles: ["Purse of Gold, Money, Gain, Help", "Letter, Missive, Epistle, Message", "Youths, Commencement", "Obstacles, Hindrances", "Disgraceful Love, Imprudence", "Ambition, Desire, Passion, Aim, Longing", "Disturbance, Worry, Anxiety, Melancholy", "Flattery, Usury, Hypocrisy, Shifty", "Deceit, Bad faith, Artifices, Deception", "Gambling, Dissipation, Robbery, Loss", "Prodigality, Profusion, Waste, Dissipation", "Idle, Unemployed, Negligent", "Doubt, Mistrust", "Fear, Peril, Danger"],
			swords: ["Embarrassment, Foolish and Hopeless Love", "False Friends, Treachery, Lies", "Error, Confusion, Misrule, Disorder", "Economy, Precaution, Regulation of Expenditure", "Losses, Trouble", "Declaration, Love proposed, Revelation", "Wise Advice, Good Counsel, Wisdom", "Treachery in the Past, Event, Accident", "Wise distrust, Suspicion, Fear, Doubt", "Passing Success, Momentary Advantage", "That which is unforeseen, Vigilance, Support", "Ingenuousness, Simplicity", "Abundance together with Worry, Joy with Grief", "Chagrin, Worry, Grief, Fear, Disturbance"]
		};
		for (var i = 1; i < 15; i++) {
			minor[0].cards.push({name: numbers[i-1] + " of Wands", image: i.toString() + "wands.jpg", description: descriptions.wands[i-1], upright: upsides.wands[i-1], reversed: reverseds.wands[i-1]});
			minor[1].cards.push({name: numbers[i-1] + " of Cups", image: i.toString() + "cups.jpg", description: descriptions.cups[i-1], upright: upsides.cups[i-1], reversed: reverseds.cups[i-1]});
			minor[2].cards.push({name: numbers[i-1] + " of Pentacles", image: i.toString() + "pentacles.jpg", description: descriptions.pentacles[i-1], upright: upsides.pentacles[i-1], reversed: reverseds.pentacles[i-1]});
			minor[3].cards.push({name: numbers[i-1] + " of Swords", image: i.toString() + "swords.jpg", description: descriptions.swords[i-1], upright: upsides.swords[i-1], reversed: reverseds.swords[i-1]});
		}
		return minor;
	}

	tarotFactory.getWands = function() {
		var arr = tarotFactory.getMinorArcana();
		return arr[0].cards;
	}

	tarotFactory.getCups = function() {
		var arr = tarotFactory.getMinorArcana();
		return arr[1].cards;
	}

	tarotFactory.getPentacles = function() {
		var arr = tarotFactory.getMinorArcana();
		return arr[2].cards;
	}

	tarotFactory.getSwords = function() {
		var arr = tarotFactory.getMinorArcana();
		return arr[3].cards;
	}

	tarotFactory.getAllCards = function() {
		var a = tarotFactory.getWands();
		var b = tarotFactory.getCups();
		var c = tarotFactory.getSwords();
		var d = tarotFactory.getPentacles();

		return tarotFactory.getMajorArcana()[0].cards.concat(a).concat(b).concat(c).concat(d);
	}

	return tarotFactory;
})