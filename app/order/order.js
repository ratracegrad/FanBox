angular.module('fanbox.order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'app/order/order.html',
    controller: 'OrderCtrl'
  });
}])

.controller('OrderCtrl', function($scope) {
  $scope.quantity = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];

  $scope.georgia = $scope.quantity[0];
  $scope.alabama = $scope.quantity[0];
  $scope.furman = $scope.quantity[0];
});