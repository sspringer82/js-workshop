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

// PUT http://localhost:8080/accounts/4
router.put('/:id', updateAccount);

// DELETE http://localhost:8080/accounts/4
router.delete('/:id', removeAccount);

router.get('/fill', fillAccounts);

export default router;
