app.config(function ($stateProvider) {
    $stateProvider.state('consult', {
        url: '/consult',
        templateUrl: 'consult.html',
        controller: 'ConsultCtrl'
    });
});

app.controller('ConsultCtrl', function($scope, ReadingFactory, $state) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.spreads = ReadingFactory.getSpreads();
	$scope.consult = function(spread) {
		$state.go('loading');
		if (spread.name == "Current State") {
			setTimeout(function() {
				$state.go('oneCard', {'deck': 'all'});
			}, 1500);
		} else if (spread.name == "Past, Present, Future") {
			setTimeout(function() {
				$state.go('threeCard', {'deck': 'all'});
			}, 1500);
		} else if (spread.name == "Career") {
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