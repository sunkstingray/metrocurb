const router = require("express").Router();
const userController = require("../../controllers/userControllers");


// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(contentController.findById)
//   .put(contentController.update)
//   .delete(contentController.remove);

  // Matches with "/api/users/"
  router
  .route("/")
  //.get(contentController.findById)
  .get(function(req,res){
    res.send("get worked")})
  // .put(contentController.update)
  // .post(contentController.create)
  // .delete(contentController.remove);

module.exports = router;