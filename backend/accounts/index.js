import { Router } from 'express';
import { getAllAccounts } from './controller.js';

const router = Router();

// GET http://localhost:8080/accounts
router.get('/', getAllAccounts);
// router.post('/accounts', createAccount);

export default router;
