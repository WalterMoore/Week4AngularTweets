var app = angular.module('myApp', ['ngRoute']);
	app.controller('MyController', ['$scope', function($scope){

	}]);
	
	app.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
		$scope.continueToNext = function() {
			$location.path('/tweets');
		};
	}]);
	
	app.controller('TweetsController', ['$scope', '$http', function($scope, $http) {
		$scope.name = '';
		$scope.twit = '';
		$scope.tweets = [];
		
		/*         $scope.addName = function() {
          $scope.names.push($scope.enteredName);
          $scope.enteredName = '';
        };
        $scope.removeName = function(name) {
          var i = $scope.names.indexOf(name);
          $scope.names.splice(i, 1);
        };
		
		-------------------
		
		     var nameApp = angular.module('nameApp', []);
      nameApp.controller('NameCtrl', function ($scope){
        $scope.names = ['Larry', 'Curly', 'Moe'];
        $scope.addName = function() {
          $scope.names.push($scope.enteredName);
          $scope.enteredName = '';
        };
      });*/
		
		$scope.submitTweet = function() {
			//push to array, make spaces blank
			console.log('inside submitTweet!');
			var tweet = {
				text: $scope.twit,
				user: $scope.name,
				date: new Date()
			};
			$http.post('/messages', tweet)
				.success(function() {
					$scope.name = '';
					$scope.twit = '';
				$http.get('/messages')
					.success(function(tweets) {
					console.log('got tweets');
					console.log(tweets);
				tweets.forEach(function(tweet) {
					console.log('i am inside the forEach function');
					$scope.tweets.unshift(tweet);
					//^returns tweets in reverse order
					})
				})
			.error(function(err) {
				console.error(err);
			});
				})
				.error(function(err) {
					console.error(err);
				});
		};
	
		$http.get('/messages')
			.success(function(tweets) {
				console.log('got tweets');
				console.log(tweets);
			tweets.forEach(function(tweet) {
			console.log('i am inside the forEach function');
				$scope.tweets.unshift(tweet);
				//^returns tweets in reverse order
			})
			})
			.error(function(err) {
				console.error(err);
			});
		
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