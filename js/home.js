app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, $state) {
	document.body.style.backgroundImage = "url(back.jpg)";
	$scope.consult = function() {
		$state.go('loading');
		setTimeout(function() {
			$state.go('oneCard', {'deck': 'all'});
		}, 1500);
	}
});