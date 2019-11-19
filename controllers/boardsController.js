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
      .findById(req.params.username)
      .populate("cards")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserByUsername: function(req, res) {
    db.Account
      .find({username: req.params.username})
      .populate("boards")
      .then(dataUser => res.json(dataUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let boardData = ""
    db.Board
        .create(req.body)
        .then(data => {
          boardData = {boardData: data};
          return db.Account.findOneAndUpdate({ username: req.params.username }, { $push: { boards: data._id } }, { new: true });
          })
        .then(data => {
            
            res.json({data:data, boardData: boardData})
        })
        .catch(function (err) {
            res.json(err);
        });

  },
  update: function(req, res) {
    db.Board
      //.findOneAndUpdate({ _id: req.params.id }, req.body)
      //.update({ _id: req.params.id }, req.body)
      //.findOneAndUpdate({"cards.$": req.body})
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      //.then(dbModel => res.json(dbModel))
      .then(dbModel => 
        res.json(dbModel),
        { $push: 
            {
              cards: 
              {
                $each: [
                  {
                    image, 
                    cardTitle 
                  }
                ]
              }
            }
          }
        )
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
