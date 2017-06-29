'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // requestRepos invokes a function with a callback paremeter. We use a get request on the path of /github/user/repos and receives data. Then the data is stored in repos.all if data was sent, if it fails the console.error is logged. Then callback is fired.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
