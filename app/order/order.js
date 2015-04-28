angular.module('fanbox.order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'app/order/order.html',
    controller: 'OrderCtrl'
  });
}])

.controller('OrderCtrl', function($scope) {
  $scope.quantity = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];

  $scope.teamList = [
    { name: 'Georgia', price: 97 },
    { name: 'Alabama', price: 67 },
    { name: 'Furman', price: 47 }
  ];

  $scope.georgia = $scope.quantity[0];
  $scope.alabama = $scope.quantity[0];
  $scope.furman = $scope.quantity[0];
});