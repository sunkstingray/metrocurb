
const router = require("express").Router();
const contentController = require("../../controllers/contentController");


// Matches with "/api/content/"
router
  .route("/:component")
  .get(contentController.findContent)
  .put(contentController.update)

router
  .route("/")
  .get(contentController.findAll)
  
module.exports = router;