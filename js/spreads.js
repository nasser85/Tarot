app.config(function ($stateProvider) {
    $stateProvider.state('spreads', {
        url: '/spreads',
        templateUrl: 'spreads.html',
        controller: 'SpreadsCtrl'
    });
});

app.controller('SpreadsCtrl', function($scope, ReadingFactory) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.spreads = ReadingFactory.getSpreads();
})