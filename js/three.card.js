app.config(function ($stateProvider) {
    $stateProvider.state('threeCard', {
        url: '/three-card',
        templateUrl: 'three-card.html',
        controller: 'ThreeCardCtrl'
    });
});

app.controller('ThreeCardCtrl', function($scope, ReadingFactory, $rootScope) {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
	$scope.cards = ReadingFactory.drawCards(null, 3);
	console.log($scope.cards);
})