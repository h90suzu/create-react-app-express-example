import express from 'express';
import bodyParser from 'body-parser';

import {
  todoList,
  todoCreate,
  todoDelete,
} from './todos';

const app = express();
const port = 4000;

app.use(bodyParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/todos', todoList);
app.post('/api/todos', todoCreate);
app.delete('/api/todos/:todoId', todoDelete);

app.listen(port, () => {
  console.log(`Express Server Listening on ${port}...`);
});
