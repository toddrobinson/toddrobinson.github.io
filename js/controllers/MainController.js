/**
 * [Controller for application]
 * @param  {string} 'MainController' [Controller name]
 * @param  {[]} ['$scope'        [Allows access to variable from view]
 * @param  {string} 'repos'          [Requires the repos.js service]
 * @return {[]}                  [On success, set scope variable to data returned]
 */
app.controller('MainController', ['$scope', 'repos', function($scope, repos){
  repos.success(function(data){
    $scope.repoData = data;
  });
}]);
