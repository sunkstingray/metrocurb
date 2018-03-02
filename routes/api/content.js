const router = require("express").Router();
const contentController = require("../../controllers/contentController");


// Matches with "/api/content/:component"
router
  .route("/")
  .get(contentController.findContent)
  .put(contentController.update)


  // .get(contentController.findById)
  // .put(contentController.update)
  // .delete(contentController.remove);

module.exports = router;
