const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/cards"
router.route("/")
  .get(cardsController.findAll)
  .post(cardsController.create)
  .put(cardsController.update);


// Matches with "/api/cards/:id"
router
  .route("/:id")
  .get(cardsController.findById)
  .put(cardsController.update)
  .delete(cardsController.remove)
  .post(cardsController.create)

  // Matches with "/api/cards/board/:id"
  router
  .route("/board/:id")
  .get(cardsController.findBoardById)

module.exports = router;
