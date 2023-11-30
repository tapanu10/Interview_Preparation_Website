import express from 'express';
import {signup,login,uploadQuestion,fetchQuestion} from '../controllers/auth.js'
const router = express.Router();

router.post('/signup',signup) // if user/signup => this function is being excuted, signup imported from controllers auth.js as beingg used as callback function
router.post('/login',login)  // if localhost/3000/user/login => this function is being excuted,d, login imported from controllers auth.js as beingg used as callback function
router.post('/uploadQuestion',uploadQuestion);
router.get('/fetchQuestion',fetchQuestion)

export default router