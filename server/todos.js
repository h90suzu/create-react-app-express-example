import uuid from 'node-uuid';

let todos = [
  { id: uuid.v4(), title:"Learn Javascript" },
  { id: uuid.v4(), title:"Learn Ruby" },
  { id: uuid.v4(), title:"Learn Node.js" },
];

const createTodo = (title) => {
  return {
    id: uuid.v1(),
    title,
  };
};

const todoList = (req, res) => {
  res.send({ todos });
};

const todoCreate = (req, res) => {
  const { title } = req.body;
  const newTodo = createTodo(title);

  todos.push(newTodo);
  res.send({ todos });
};

const todoDelete = (req, res) => {
  const { todoId } = req.params;

  todos = todos.filter((todo) => todo.id !== todoId);
  res.send({ todos });
};

export {
  todoList,
  todoCreate,
  todoDelete,
};
