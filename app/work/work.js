angular.module('fanbox.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'app/work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', [function() {

}]);