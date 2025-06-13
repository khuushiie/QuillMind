import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { updateProfile, getProfile } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ New routes:
router.get('/profile', verifyToken, getProfile);
router.put('/update', verifyToken, updateProfile);

export default router;