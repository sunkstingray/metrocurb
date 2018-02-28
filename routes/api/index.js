const router = require("express").Router();
const bookRoutes = require("./content");

// Book routes
router.use("/conent", bookRoutes);

module.exports = router;
