import express from 'express';
const router = express.Router();
import { userSignup } from '../controller/user-controller.js'; // Corrected folder name & added .js

router.post('/signup', userSignup); // Ensure this route exists

export default router;
