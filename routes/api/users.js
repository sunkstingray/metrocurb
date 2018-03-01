const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

  // Matches with "/api/users/"
  router
  .route("/")
  .get(contentController.findById)
  .put(contentController.update)
  .post(contentController.create)
  .delete(contentController.remove);

module.exports = router;