const router = require("express").Router();
const userRoutes = require("./singup");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
