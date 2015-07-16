var app = angular.module('trApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/home.html'

  })
  .when('/about', {
    controller: 'MainController',
    templateUrl: 'viws/about.html'
  })

  .otherwise({
    redirectTo: '/'
  });
});
