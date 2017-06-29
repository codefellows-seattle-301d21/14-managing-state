'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (Shows the about section and hides all siblings. The requestRepos method is invoked with callback function of app.repoView.index. These files live in repos.js and repoView.js respectively. Lastly attaches to app object.  )
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
