const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const boardRoutes = require("./boards");
const cardRoutes = require("./cards");

//User Routes
router.use("/users", userRoutes);
router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes)
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
