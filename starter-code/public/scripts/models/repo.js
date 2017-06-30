'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // this function is an AJAX request that hits the github route and then calls the proxyGitHub to get repo data from github
  // then the data that is returned gets stored in repos.all and then calls the callback function.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
