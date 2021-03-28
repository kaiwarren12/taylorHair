const router = require("express").Router();
const signupController = require("../../controller/signupcontroller");

// Matches with "/api/users"
router.route("/")
  .get(signupController.findAll)
  .post(signupController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(signupController.findById)
  .put(signupController.update)
  .delete(signupController.remove);

module.exports = router;