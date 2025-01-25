import express from 'express'
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route to register a new user
router.post("/register", registerUser);

// Route to log in a user
router.post("/login", loginUser);

// Route to get user profile (protected route)
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
