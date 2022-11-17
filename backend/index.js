import express from 'express';
import { getAllAccounts } from './controller.js';

const app = express();

app.get('/accounts', getAllAccounts);

app.listen(8080, () => console.log('listening'));
