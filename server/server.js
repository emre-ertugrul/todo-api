const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const todoData = require('../server/data/todos');

server.get('/api/todos', (req, res, next) => {
  res.status(200).send(todoData.getTodos);
});

server.post('/api/todo', (req, res, next) => {
  res.status(200).send(req.body);
});

server.delete('/api/todo/:id', (req, res, next) => {
  res.status(200).send(req.body);
});

server.put('/api/todo/check/:id', (req, res, next) => {
  res.status(200).send(req.body);
});

server.listen(3333, () => {
  console.log('JSON server listening on port 3333');
});

