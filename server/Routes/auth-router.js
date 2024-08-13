const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
const signupSchema = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js")

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(authcontrollers.login);

router.route("user").get(authcontrollers.user)

module.exports = router;