const router = require("express").Router();
const userController = require("../../controllers/userController");
const zoho = require("../zoho");


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

router
  .route("/zoho/:zohoId")
  .get(zoho.findById)
  .put(zoho.updateContact)


router
  .route("/zoho/cc")
  .post(zoho.getForm)

router
  .route("/subscriptions/new")
  .get(zoho.updateHostedPageId)

router
  .route("/subscriptions/update/:subId")
  .put(zoho.getSubscription)

module.exports = router;