(function(module) {
  var repos = {};

  repos.allRepos = [];
// TODONE: create a githubToken.js file that we can use to generate our headers
         // properly.
  repos.requestRepos = function(callback) {
    /* TODONE: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/mikeybkats/repos' + '?per_page=4' + '&sort_updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + irvineToken},
      success: function(data,message,xhr){
        console.log(data);
        // repos.allRepos.push(data);
        repos.allRepos = data;
        // console.log(message);
        // console.log(xhr);
        callback();
      }
    });
  };

  repos.withTheAttribute = function(myAttr) {
    /* NOTE: This Model method filters the full repos collection based
        on a particular attribute. For example, you could use this
        to filter all repos that have a forks_count, stargazers_count,
        or watchers_count. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
