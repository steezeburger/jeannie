'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Temperature, app, auth, database) {

  app.get('/api/temperature/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/temperature/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/temperature/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/temperature/example/render', function(req, res, next) {
    Temperature.render('index', {
      package: 'temperature'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
