app.config(function ($stateProvider) {
    $stateProvider.state('majorArcana', {
        url: '/major-arcana',
        templateUrl: 'arcana.html',
        controller: 'MajorCtrl'
    });
});

app.controller('MajorCtrl', function($scope, TarotFactory, $state) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.decks = TarotFactory.getMajorArcana();
	$scope.title = "The Major Arcana";
	$scope.buttonOne = "Consult Major Arcana";
	$scope.buttonTwo = "Explore Minor Arcana";
	$scope.explore = function() {
		$state.go('minorArcana');
	}
});