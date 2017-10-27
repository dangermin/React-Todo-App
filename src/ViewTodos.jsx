import React, { Component } from 'react';
import Todos from './Todos';
import EditTodo from './EditTodo';

class ViewTodos extends Component {
  render() {
    return (
      <div className='well'>
        <h3>View Todos</h3>
        <EditTodo />
        <Todos />
      </div>
    );
  }
}

export default ViewTodos;
