app.config(function ($stateProvider) {
    $stateProvider.state('minorArcana', {
        url: '/minor-arcana',
        templateUrl: 'arcana.html',
        controller: 'MinorCtrl'
    });
});

app.controller('MinorCtrl', function($scope, TarotFactory, $state) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.decks = TarotFactory.getMinorArcana();
	$scope.title = "The Minor Arcana";
	$scope.buttonOne = "Consult the Cards";
	$scope.buttonTwo = "Explore Major Arcana";
	$scope.modal = false;
	$scope.explore = function() {
		$state.go('majorArcana');
	}
	$scope.openModal = function(card) {
		$scope.cardName = card.name;
		$scope.cardImage = card.image;
		$scope.cardDescription = card.description;
		$scope.modal = true;
	}
	$scope.closeModal = function() {
		$scope.modal = false;
	}
});