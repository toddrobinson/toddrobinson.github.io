/**
 * Application object instantiation.
 * @param  {string} 'trApp'     [Name of angular application]
 * @param  {string} ['ngRoute'] [Requires ngRoute dependency]
 */
var app = angular.module('trApp', ['ngRoute']);
/**
 * Routes for viws.
 * / ==> Home view/Hello!
 * /repos ==> repository view
 * /about ==> about view
 * Redirect to home view if anything else.
 */
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
