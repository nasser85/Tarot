app.config(function ($stateProvider) {
    $stateProvider.state('career', {
        url: '/career/:deck',
        templateUrl: 'career.html',
        controller: 'CareerCtrl'
    });
});

app.controller('CareerCtrl', function($scope, ReadingFactory, $rootScope, $stateParams) {
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
			$scope.position = "fit";
		} else if ($scope.cards.indexOf(card) == 1) {
			$scope.position = "security";
		} else {
			$scope.position = "worth";
		}
	}
	$scope.closeModal = function() {
		$scope.modal = false;
	}
})