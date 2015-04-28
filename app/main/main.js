angular.module('fanbox.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function() {

}]);