angular.module('myApp', ['ngRoute'])
	.controller('MyController', ['ngView', function(){

	}])
	
	.controller('WelcomeController', function () {
		
	})
	
	.controller('TweetsController', function() {
		
	})
	
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				controller: "WelcomeController",
				templateUrl: "views/welcome.html"
			})
			.when('', {
				controller: "TweetsController",
				templateUrl: "veiws/tweets.html"
			})
			.otherwise({
				redirectTo: '/'
			});
		

});

/*
var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});*/


 /*app.controller('StoreController', function(){
    this.product = gem;
  });*/