'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This gets all the repo data from the Github api associated with the user specified by the GITHUB_TOKEN and sets the repos.all array to the array of this data. It is called in aboutController.js
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
