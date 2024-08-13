const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller.js");


/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Submit a contact form
 *     description: Handle the submission of a contact form by creating a new entry in the database.
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "John Doe"
 *                 description: "The name of the user"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *                 description: "The email of the user"
 *               message:
 *                 type: string
 *                 example: "This is a sample message."
 *                 description: "The message from the user"
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Message Send Successfully"
 *       500:
 *         description: Message not delivered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Message Not Delivered"
 */

router.route("/contact").post(contactForm);

module.exports = router;
