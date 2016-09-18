import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

import CreateTodoInput from './CreateTodoInput';
import TodoItem from './TodoItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  componentDidMount() {
    request
      .get('/api/todos')
      .end((err, res) => {
        this.setState({ todos: res.body.todos });
      });
  }

  handleCreateTodo(title) {
    request
      .post('/api/todos')
      .send({ title })
      .end((err, res) => {
        this.setState({ todos: res.body.todos });
      });
  }

  handleDeleteTodo(id) {
    request
      .delete(`/api/todos/${id}`)
      .end((err, res) => {
        this.setState({ todos: res.body.todos });
      });
  }

  render() {
    return (
      <div className="App">
        <CreateTodoInput
          handleSubmit={this.handleCreateTodo}
        />
        <ul>
          {this.state.todos.map((todo) =>
            <TodoItem
              key={todo.id}
              {...todo}
              handleDelete={this.handleDeleteTodo}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
