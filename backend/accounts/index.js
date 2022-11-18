import { Router } from 'express';
import {
  getAllAccounts,
  createAccount,
  updateAccount,
  removeAccount,
  fillAccounts,
} from './controller.js';

const router = Router();

// GET http://localhost:8080/accounts
router.get('/', getAllAccounts);
router.post('/', createAccount);
router.put('/:id', updateAccount);
router.delete('/:id', removeAccount);
router.get('/fill', fillAccounts);

export default router;
