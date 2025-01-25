import express from 'express';
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} = require('../controllers/userController'); // Import user controller functions
const { protect } = require('../middleware/authMiddleware'); // Import middleware for authentication

const router = express.Router();

// Public routes (No authentication required)
router.post('/register', registerUser); // Route to register a new user
router.post('/login', loginUser);       // Route to log in an existing user

// Protected routes (Requires authentication)
router.get('/profile', protect, getUserProfile);           // Route to get the logged-in user's profile
router.put('/profile', protect, updateUserProfile);        // Route to update the logged-in user's profile
router.get('/', protect, getAllUsers);                     // Admin-only route to get all users (requires extra logic in middleware)

export default router;
