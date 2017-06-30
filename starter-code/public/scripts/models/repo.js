'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //ANSWER: requestRepos is making a get request to the server where it makes a proxy call to the github api for the data on a user's repos. It takes that data and plugs it into an array attached to the repo object. The callback function that is passed lives in the view layer and this function gets called in the controller layer when the user goes to the url 'about'. 
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
