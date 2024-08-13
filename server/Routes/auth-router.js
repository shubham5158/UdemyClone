const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
const signupSchema = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js");

router.route("/").get(authcontrollers.home);

//Registration Swagger Api 

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: User object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "john_doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 example: "your_secure_password"
 *             required:
 *               - username
 *               - email
 *               - phone
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Registration successfully"
 *                 token:
 *                   type: string
 *                   example: "your_jwt_token"
 *                 userId:
 *                   type: string
 *                   example: "user_id"
 *       404:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);


//Login Swagger Api

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "your_secure_password"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Login successful"
 *                 token:
 *                   type: string
 *                   example: "your_jwt_token"
 *                 userId:
 *                   type: string
 *                   example: "user_id"
 *       404:
 *         description: Invalid Credentials
 *       500:
 *         description: Internal server error
 */
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authcontrollers.user);

module.exports = router;
