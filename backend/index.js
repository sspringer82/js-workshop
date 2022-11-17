import express from 'express';
import accountRouter from './accounts/index.js';

const app = express();

app.use('/accounts', accountRouter);

app.listen(8080, () => console.log('listening'));
