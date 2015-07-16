app.factory('repos', ['$http', function($http){
  return $http.get('https://api.github.com/users/toddrobinson/repos')
    .success(function(data){
      return data;
    })
    .error(function(err){
      return err;
    });
}]);
