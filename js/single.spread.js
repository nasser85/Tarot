app.config(function ($stateProvider) {
    $stateProvider.state('singleSpread', {
        url: '/single-spread/:type',
        templateUrl: 'single-spread.html',
        controller: 'SingleSpreadCtrl'
    });
});

app.controller('SingleSpreadCtrl', function($scope, ReadingFactory, $stateParams, $state) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.spread = ReadingFactory.getSpreads()[parseInt($stateParams.type)];
	$scope.consult = function() {
		$state.go('loading');
		if ($scope.spread.name == "Current State") {
			setTimeout(function() {
				$state.go('oneCard', {'deck': 'all'});
			}, 1500);
		} else if ($scope.spread.name == "Past, Present, Future") {
			setTimeout(function() {
				$state.go('threeCard', {'deck': 'all'});
			}, 1500);
		} else if ($scope.spread.name == "Career") {
			setTimeout(function() {
				$state.go('career', {'deck': 'all'});
			}, 1500);
		} else {
			setTimeout(function() {
				$state.go('love', {'deck': 'all'});
			}, 1500);
		}
	}
})