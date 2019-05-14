const router = require("express").Router();
const googleController = require("../../controllers/googleapiController");

router
  .route("/")
  .get(googleController.findAll);


module.exports = router;