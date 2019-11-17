const db = require("../models");

// Defining methods for the BoardsController
module.exports = {
  findAll: function(req, res) {
    db.Board
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Board
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Board
      .create(req.body)
      .then(dbModel => res.json(dbModel))
    //   $push card to board
    // { $push: 
    //   {
    //     cards: 
    //     {
    //       $each: [
    //         {
    //           image: , 
    //           cardTitle: 
    //         }
    //       ]
    //     }
    //   }
    // }
      // .populate('cards')
      .catch(err => res.status(422).json(err));

  },
  update: function(req, res) {
    db.Board
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      //.update({ _id: req.params.id }, req.body)
      //.findOneAndUpdate({"cards.$": req.body})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Board
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
