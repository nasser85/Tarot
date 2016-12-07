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
	console.log($scope.cards);
})