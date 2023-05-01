const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Route to get all thoughts or create a new thought
router.route("/").get(getAllThought).post(createThought);

// Route to get, update, or delete a single thought by ID
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route to add a reaction to a thought
router.route("/:thoughtId/reactions").post(addReaction);

// Route to remove a reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;