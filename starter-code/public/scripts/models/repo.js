'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //requestRepos takes a callback function a a paramter. requestRepos makes a get request passing /github/user/repo as the path. It then passes data as a paramter in a callback function, where repos.data is assiged to the value of data. The second call back fucntion for then returns a console.log(err). A second then method is fired which takes th inital callback paramter as it's own paramter.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
