var theaterApp = angular.module("theaterApp", []);

//Do configuration and routing here
theaterApp.config(function($routeProvider){
    console.log($routeProvider);
    $routeProvider
        .when("/",{
            controller: "MoviesCtrl",
            templateUrl: "js/views/moviesView.html"
        });

    $routeProvider.otherwise({"redirectTo": "/"});  //.otherwise("/"); //does not work
});



