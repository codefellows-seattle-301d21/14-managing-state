'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //this function makes an ajax request to request the github api. It's called in aboutController.  
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
