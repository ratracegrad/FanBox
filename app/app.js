angular.module("fanbox", [
  'ngRoute',
  'fanbox.main',
  'fanbox.work',
  'fanbox.order',
  'fanbox.contact'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])
