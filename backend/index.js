import express from 'express';
import accountRouter from './accounts/index.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/accounts', accountRouter);

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('listening'));
