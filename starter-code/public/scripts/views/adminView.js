'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

        //ANSWER: This function calls numWordsByAuthor and for each author appends the authors name and total words to the dom using handlebars. It also sets blog stats articles text value to the total number of articles. And finally sets the blog stats words text values to the total number of words by calling the numWordsAll function. Inside the adminView IIFE. numWordsAll and numWordsByAuthor live in the article.js file. 
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
