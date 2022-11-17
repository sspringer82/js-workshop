import { createServer } from 'node:http';

const server = createServer(function (request, response) {
  response.end('Hallo Welt');
});

server.listen(8080, function () {
  console.log('Server is listening to http://localhost:8080');
});
