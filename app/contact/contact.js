angular.module('fanbox.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'app/contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', [function() {

}]);