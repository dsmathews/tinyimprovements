const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {

  app.get('/api/users', function (req, res) {
    User.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.get('/api/users/:id', function (req, res) {
    User.find({_id: req.params.id})
    .populate('kudos')
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/users', function (req, res) {
    User.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.get('/api/kudos', function (req, res) {
    Kudos.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/kudos', function (req, res) {
    const userId = req.body.userId;
    const newEntry = {
      title: req.body.title,
      body: req.body.body,
      from: req.body.from,
      to: req.body.to
    };
    console.log(newEntry);
    Kudos.create(newEntry)
      .then(function (kudosData) {
      return user.findOneAndUpdate({_id: userId}, { $push: { kudos: kudosData._id } }, { new: true });
    })
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function (err) {
      res.json(err);
    });
  });
};