import express from 'express';
import { User } from './User.js';

const app = express();

// HTTP GET http://localhost:8080/
app.get('/', (request, response) => {
  // response.send('Hello World');
  response.json(new User());
});

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
