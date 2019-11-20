const db = require("../models");

// Defining methods for the BoardsController
module.exports = {
  findAll: function(req, res) {
    db.Card
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Card
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBoardById: function(req, res) {
    console.log("ID Back")
    console.log(req.params.id)
    db.Board
      .find({_id: req.params.id})
      .populate("card")
      .then(dataUser => res.json(dataUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("card Back")
    console.log(req.body)
    db.Card
    .create(req.body)
    .then(data => {
      return db.Board.findOneAndUpdate({ _id: req.params.id }, { $push: { cards: data._id } }, { new: true });
      })
    .then(data => {
        res.json(data)
    })
    .catch(function (err) {
        res.json(err);
    });

  },
  update: function(req, res) {
    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Card
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
