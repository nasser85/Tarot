app.config(function ($stateProvider) {
    $stateProvider.state('loading', {
        url: '/loading',
        templateUrl: 'loading.html',
        controller: 'LoadingCtrl'
    });
});

app.controller('LoadingCtrl', function() {
	document.body.style.backgroundImage = "url()";
	window.scroll(0,0);
});