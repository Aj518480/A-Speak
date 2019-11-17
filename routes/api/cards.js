const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

// Matches with "/api/boards"
router.route("/")
  .get(cardsController.findAll)
  .post(cardsController.create);

// Matches with "/api/boards/:id"
router
  .route("/:id")
  .get(cardsController.findById)
  .put(cardsController.update)
  .delete(cardsController.remove);

module.exports = router;
