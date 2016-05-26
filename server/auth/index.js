'use strict';

/**
 * @namespace auth
 *
 * @param {Object} app - the main app
 */

module.exports = function(app) {
  var session = require('express-session'),
    FileStore = require('session-file-store')(session),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    $q = require('q'),
    db = require('../db'),
    md5 = require('MD5');


  //FIXME: Comments on all these functions

  //Session Storage
  app.use(session({
    store: new FileStore({
      path: './server/auth/sessions' //Might want to move this somewhere else or use MemoryStore
    }),
    secret: 'f14b78ecf1cc7e0979d4fd757d7bb68ec27b2a86', //FIXME: change this for PROD, but not actually hashing password
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1800000,
      secure: false,
      httpOnly: false
    }
  }));

  //Authentication
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(function(username, password, done) {
    db.get('SELECT id, username, password FROM users WHERE username = ?', username.toLowerCase(), function(err, row) {
      if (!row) {
        return done(null, false, {
          message: 'User not found.'
        });
      }

      bcrypt.compare(password, row.password, function(err, res) {
        if (res) {
          return done(null, row);
        } else {
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    return done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.get('SELECT id, username FROM users WHERE id = ?', id, function(err, row) {
      if (!row) {
        return done(null, false);
      }
      return done(null, row);
    });
  });

  app.post('/user/login', passport.authenticate('local'), function(req, res) {
    res.status(200).send(req.body.username);
  });

  app.get('/user/logout', function(req, res) {
    req.session.destroy(function() {
      res.clearCookie('connect.sid', {
        path: '/'
      });
      res.redirect('/');
    });
  });


  app.post('/user/create', function(req, res) {
    checkUserExists(req.body.username).then(function() {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.run('INSERT INTO users (username, password, salt, nickName, gravatarHash, address, zip, headHousehold, phone1, phone2, homeType, providerNum, email1, email2, insurance) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
              req.body.username.toLowerCase(),
              hash,
              salt,
              req.body.firstName,
              md5(req.body.username.toLowerCase()),
              '360 Grand Ave, Oakland, CA 94610',
              '94610',
              'Chuck Taylor, Sarah Taylor',
              '123-456-7890',
              '555-555-5555',
              'Foster',
              '1234-5678',
              req.body.username.toLowerCase(),
              'myemail@email.com',
              'USAA'
            ],
            function(err) {
              if (err) {
                console.log(err);
              }
            });

          var stmt = db.prepare("INSERT INTO kids (id, username, name, age, birthday) VALUES (?,?,?,?,?)");
          for (var i = 0; i < 10; i++) {
            var birthdayYear = 2014 - i;
            stmt.run([req.body.id, req.body.username.toLowerCase(), 'Sally Smith', 2 + i, '1/1/' + birthdayYear]);
          }
          stmt.finalize();

          res.status(201).send('User ' + req.body.username + ' Created');
        });
      });
    }, function() {
      //TODO: More verbose error handling
      res.status(400).send();
    });

  });

  /**
   * Checks to see if the username already exists in the database.
   *
   * @memberof auth
   *
   * @param username
   *
   * @returns promise
   */
  function checkUserExists(username) {
    var usercheckPromise = $q.defer();

    db.get('SELECT id, username FROM users WHERE username = ?', username, function(err, row) {
      if (err) {
        console.error(err);
      }
      if (row) {
        usercheckPromise.reject(row);
      } else {
        usercheckPromise.resolve();
      }
    });

    return usercheckPromise.promise;
  }

  /**
   * Simple Route middleware to cehck for authentication
   *
   * @memberof auth
   *
   * @param req
   * @param res
   * @param next
   *
   * @returns {*}
   */
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    //TODO: More verbose error handling
    res.status(401).send();
  }

  return {
    passport: passport,
    ensureAuthenticated: ensureAuthenticated
  };
};
