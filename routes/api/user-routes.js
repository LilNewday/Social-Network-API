const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// Define routes for /api/users
router.route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

// Define routes for /api/users/:id
router.route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// Define routes for /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
  .post(userController.addFriend)
  .delete(userController.removeFriend);

module.exports = router;