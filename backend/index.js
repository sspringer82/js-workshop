import express from 'express';

const app = express();

app.get('/accounts', (request, response) => {
  const accounts = [
    {
      firstName: 'Klaus',
      lastName: 'Müller',
      age: 42,
      userName: 'kMüller',
    },
    {
      firstName: 'Claudia',
      lastName: 'Meier',
      age: 42,
      userName: 'cMeier',
    },
  ];
  response.json(accounts);
});

app.listen(8080, () => console.log('listening'));
