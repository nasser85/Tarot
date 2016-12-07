app.config(function ($stateProvider) {
    $stateProvider.state('oneCard', {
        url: '/one-card/:deck',
        templateUrl: 'one-card.html',
        controller: 'OneCardCtrl'
    });
});

app.controller('OneCardCtrl', function($scope, ReadingFactory, $stateParams) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.cards = ReadingFactory.drawCards($stateParams.deck, 1);
	$scope.modal = false;
	$scope.openModal = function(card) {
		$scope.cardName = card.card.name;
		$scope.cardImage = card.card.image;
		$scope.cardDescription = card.card.description;
		$scope.reversed = card.card.reversed;
		$scope.upright = card.card.upright;
		$scope.modal = true;
		$scope.orientation = card.orientation;
		console.log($scope.orientation);
	}
	$scope.closeModal = function() {
		$scope.modal = false;
	}
})