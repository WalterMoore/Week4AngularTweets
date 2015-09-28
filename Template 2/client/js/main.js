var app = angular.module('myApp', ['ngRoute']);
	app.controller('MyController', ['$scope', function($scope){

	}]);
	
	app.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
		$scope.continueToNext = function() {
			$location.path('/tweets');
		};
	}]);
	
	app.controller('TweetsController', ['$scope', function($scope) {
		
	}]);
	
	/*app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);

app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

*/
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				controller: "WelcomeController",
				templateUrl: "views/welcome.html"
			})
			.when('/tweets', {
				controller: "TweetsController",
				templateUrl: "views/tweets.html"
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