const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { registerSchema, loginSchema } = require("../schemas/userSchemas");
const validate = require("../middleware/validate");
const router = express.Router();
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);
module.exports = router;
