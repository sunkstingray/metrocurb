const router = require("express").Router();
const contentRoutes = require("./content");
const usersRoutes = require("./users");

// Content routes
router.use("/conent", contentRoutes);

// Users routes
router.use("/users", usersRoutes);

module.exports = router;
