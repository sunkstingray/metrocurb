const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/users/"
router
  .route("/")
  .get(userController.findById)
  .put(userController.update)
  .post(userController.create)
  .delete(userController.remove);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



module.exports = router;