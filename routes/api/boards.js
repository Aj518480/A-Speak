const router = require("express").Router();
const boardsController = require("../../controllers/boardsController");

// Matches with "/api/boards"
// router.route("/")
//   .get(boardsController.findAll)
//   .post(boardsController.create)
//   .put(boardsController.update);

// Matches with "/api/boards/:id"
router
  .route("/:username")
  .get(boardsController.findById)
  .put(boardsController.update)
  .delete(boardsController.remove)
  .post(boardsController.create)

// Matches with "/api/boards/user/:username"
  router
  .route("/user/:username")
  .get(boardsController.findUserByUsername)

module.exports = router;
