app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, $rootScope) {
	document.body.style.backgroundImage = "url(back.jpg)";
});