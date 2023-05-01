const express = require("express");
const router = express.Router();

// Import the API routes
const apiRoutes = require("./api");

// Mount the API routes under /api
router.use("/api", apiRoutes);

// Define a fallback route to handle 404 errors
router.use((req, res) => {
  res.status(404).send("<h1>404 Error!</h1>");
});

module.exports = router;
