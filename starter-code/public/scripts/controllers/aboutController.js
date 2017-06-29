'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // this function grabs the #about element and shows it while hiding its siblings.  It then calls the app.repos requestRepos method which gets the
  // repo data from Github using proxyGitHub function that then stores it into repos.all and then runs the app.repoView.index function to render
  // the DOM with the data from Github.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
