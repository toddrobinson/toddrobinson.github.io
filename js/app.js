/**
 * Application object instantiation.
 * @param  {string} 'trApp'     [Name of angular application]
 * @param  {string} ['ngRoute'] [Requires ngRoute dependency]
 */
var app = angular.module('trApp', ['ngRoute']);
/**
 * Routes for views.
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

$("ul.nav li a ").on("click" , function(){
  $('body').scrollTo('.contentPane', 800);
});

$(document).ready(function(){
  animate($('header > *'), "bounceInDown");
});


/*
Using the animation.css file by Daniel Eden
Takes in element to perform the animation on, and the motion to do as a string.
Executes the animation by adding the two associated classes, and then after the aniamtion is over, removes the classes.

*/
function animate(element, action) {
  var animationName = 'animated ' + action;
  var atEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(element).addClass(animationName).one(atEnd,function(){
    $(element).removeClass(animationName);
  });
}
