'use strict';
var app = app || {};

(function(module) {
  const articleController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function is called by a page function in the routes.js file.  The ctx comes from the previous callback function (loadAll) which places the article object array within ctx.articles. It doesn't call other functions, but it calls itself with ctx parameters.
  articleController.index = (ctx) => app.articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article;
      next();
    };

    // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
    // This uses the findWhere function to find articles within the database that match the article ID entered in the search.  It's called within the loadById method which is called within the route.js file when the route/:article_id resource is called.
    app.Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // REVIEW: Middleware for loading up articles by a certain author:
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    app.Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    app.Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = app.Article.all;
      next();
    };

    if (app.Article.all.length) {
      ctx.articles = app.Article.all;
      next();
    } else {
      app.Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(app);
