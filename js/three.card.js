app.config(function ($stateProvider) {
    $stateProvider.state('threeCard', {
        url: '/three-card/:deck',
        templateUrl: 'three-card.html',
        controller: 'ThreeCardCtrl'
    });
});

app.controller('ThreeCardCtrl', function($scope, ReadingFactory, $rootScope, $stateParams) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.cards = ReadingFactory.drawCards($stateParams.deck, 3);
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
			$scope.position = "past";
		} else if ($scope.cards.indexOf(card) == 1) {
			$scope.position = "present";
		} else {
			$scope.position = "future";
		}
	}
	$scope.closeModal = function() {
		$scope.modal = false;
	}
})