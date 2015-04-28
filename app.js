var fanboxApp = angular.module('fanbox', ['ngRoute']);

// configure our routes
fanboxApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the how it works page
		.when('/work', {
			templateUrl : 'pages/work.html',
			controller  : 'workController'
		})

		// route for the order page
		.when('/order', {
			templateUrl : 'pages/order.html',
			controller  : 'orderController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

// create the controller and inject Angular's $scope
fanboxApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Look! Main Page';
});

fanboxApp.controller('workController', function($scope) {
	$scope.message = 'Look! How it works page.';
});

fanboxApp.controller('orderController', function($scope) {
	$scope.message = 'Look! Order page.';

	$scope.quantity = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];

  $scope.georgia = $scope.quantity[0];
  $scope.alabama = $scope.quantity[0];
  $scope.furman = $scope.quantity[0];
});

fanboxApp.controller('contactController', function($scope) {
	$scope.message = 'Look! Contact page';
});