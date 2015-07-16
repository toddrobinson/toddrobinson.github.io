app.controller('MainController', ['$scope', 'repos', function($scope, repos){
  repos.success(function(data){
    $scope.repoData = data;
  });
}]);
