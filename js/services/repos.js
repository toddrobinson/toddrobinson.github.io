/**
 * Service to pull information from Github api for user 'toddrobinson'
 * @param  {string} 'repos'          [Title of service, to be used elsewhere.]
 * @param  {string} ['$http'         [Http dependency]
 * @return {object}                  [Return data from api on success, return error message on failure]
 */
app.factory('repos', ['$http', function($http){
  return $http.get('https://api.github.com/users/toddrobinson/repos')
    .success(function(data){
      return data;
    })
    .error(function(err){
      return err;
    });
}]);
