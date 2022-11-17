import express from 'express';

const app = express();

// HTTP GET http://localhost:8080/
app.get('/', (request, response) => {
  // response.send('Hello World');
  response.json({ firstname: 'Klaus!' });
});

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
