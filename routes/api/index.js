const router = require("express").Router();
const path = require("path");
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes);

// google route
router.use("/google", googleRoutes);

//all other routes
router.use(funtion(req, res) {
  res.sendFile(path.join(_dirname, "../../client/build/index.html"));
});

module.exports = router;
