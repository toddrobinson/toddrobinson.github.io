var app = angular.module('trApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/repos', {
    controller: 'MainController',
    templateUrl: 'views/repos.html'

  })
  .when('/about', {
    controller: 'MainController',
    templateUrl: 'views/about.html'
  })

  .when('/',{
    controller: 'MainController',
    templateUrl: 'views/intro.html'
  })

  .otherwise({
    redirectTo: '/'
  });
});
