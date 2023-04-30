const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Mount the userRoutes module on the "/users" path and thoughtRoutes module on the "/thoughts" path
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;