app.config(function ($stateProvider) {
    $stateProvider.state('love', {
        url: '/love/:deck',
        templateUrl: 'love.html',
        controller: 'LoveCtrl'
    });
});

app.controller('LoveCtrl', function($scope, ReadingFactory, $rootScope, $stateParams) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.cards = ReadingFactory.drawCards($stateParams.deck, 5);
	$scope.cards1 = [];
	$scope.cards2 = [];
	for (var i = 0; i < 5; i++) {
		if (i < 2) {
			$scope.cards1.push($scope.cards[i]);
		} else {
			$scope.cards2.push($scope.cards[i]);
		}
	}
	$scope.modal = false;
	$scope.openModal = function(card) {
		$scope.cardName = card.card.name;
		$scope.cardImage = card.card.image;
		$scope.cardDescription = card.card.description;
		$scope.reversed = card.card.reversed;
		$scope.upright = card.card.upright;
		$scope.modal = true;
		$scope.orientation = card.orientation;
		if ($scope.cards.indexOf(card) == 0) {
			$scope.position = "Your contribution ";
			$scope.transition = "to the relationship is represented by..."
		} else if ($scope.cards.indexOf(card) == 1) {
			$scope.position = "Your partner's contribution ";
			$scope.transition = "to the relationship is represented by..."
		} else if ($scope.cards.indexOf(card) == 2) {
			$scope.position = "Your happiness ";
			$scope.transition = "in the relationship is represented by..."
		} else if ($scope.cards.indexOf(card) == 3) {
			$scope.position = "The expected length ";
			$scope.transition = "of the relationship is represented by..."
		} else {
			$scope.position = "Your partner's happiness ";
			$scope.transition = "in the relationship is represented by..."
		}
	}
	$scope.closeModal = function() {
		$scope.modal = false;
	}
})