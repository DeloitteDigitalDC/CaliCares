'use strict';

/**
 * @namespace user.controller
 */

var db = require('../../db');
var user = {};

/**
 * get the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getDetails = function(req, res) {
  var userObj = {
    data: {}
  };

  //TODO: make sure pw and hash arent returned
  db.get('SELECT * FROM users WHERE username = ?', req.params.uid.toLowerCase(), function(err, row) {
    if (err) {
      res.status(500).send(err);
    } else {
      userObj.uid = req.params.uid;
      userObj.data = row;
      userObj.data.email = row.username;
      db.all('SELECT * FROM kids WHERE username = ?', req.params.uid, function(err, rows) {
        if (err) {
          res.status(500).send(err);
        } else {
          userObj.data.kids = rows;

          db.all('SELECT * FROM houseMembers WHERE username = ?', req.params.uid, function(err, memberRows) {
            if (err) {
              res.status(500).send(err);
            } else {
              userObj.data.members = memberRows;
              res.send(userObj);
            }
          });

        }
      });
    }
  });
};


/**
 * set the details for the authenticated user;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.setDetails = function(req, res) {
  db.run('UPDATE USERS SET address = ?, phone1 = ?, phone2 = ?, homeType = ?, providerNum = ?, email1 = ?, email2 = ?, insurance = ? WHERE USERNAME = ?', req.body.address, req.body.phone1, req.body.phone2, req.body.homeType, req.body.providerNum, req.body.email1, req.body.email2, req.body.insurance, req.params.uid.toLowerCase(), function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('updated user');
    }
  });
};

/**
 * set the preferences for the authenticated user;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.setPrefs = function(req, res) {

  db.run('UPDATE USERS SET prefGender = ?, prefUnable = ?, prefAge = ?, prefLanguages = ?, prefNumChildren = ? WHERE USERNAME = ?', req.body.prefGender, req.body.prefUnable, req.body.prefAge, req.body.prefLanguages, req.body.prefNumChildren, req.params.uid.toLowerCase(), function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('updated user');
    }
  });
};

/**
 * set the householdMembers for the authenticated user;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.setHouseholdMembers = function(req, res) {

  db.run('UPDATE houseMembers SET name = ?, birthday = ?, languages = ?, gender = ?, mobile = ?, workNum = ?, email =?, certifications = ?, services = ? WHERE USERNAME = ? AND member_id = ?', req.body.name, req.body.birthday, req.body.languages, req.body.gender, req.body.mobile, req.body.workNum, req.body.email, req.body.certifications, req.body.services, req.params.uid.toLowerCase(), req.body.member_id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('updated user');
    }
  });
};


/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getCabinetDrugs = function(req, res) {
  db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid.toLowerCase(), function(err, rows) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
};


/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 *
 * @TODO do we need this function?
 */
user.getChildren = function(req, res) {
  db.all('SELECT * FROM kids WHERE username = ?', req.params.uid.toLowerCase(), function(err, rows) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
};

/**
 * Add a drug to the users drug cabinet
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.addCabinetDrug = function(req, res) {
  db.run('INSERT INTO drugs (id, username, name, expirationDate) VALUES (?,?,?,?)', [req.body.id, req.params.uid.toLowerCase(), req.body.name, req.body.expirationDate], function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Drug ' + req.body.name + ' Created');
    }
  });
};

/**
 * add drug to your cabinet
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.deleteCabinetDrug = function(req, res) {
  db.run('delete from drugs where drugs.id = ? AND drugs.username = ?', req.params.drugId, req.params.uid.toLowerCase(), function(err, row) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('deleted: ' + row);
    }
  });
};

module.exports = user;
