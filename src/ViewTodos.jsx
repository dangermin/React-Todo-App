import React, { Component } from 'react';
import Todos from './Todos';

class ViewTodos extends Component {
  constructor(props) {
    super(props);

  render() {
    return (
      <div className='well'>
        <h3>Things Todos</h3>
        {/* <EditTodo /> */}
        <Todos />
      </div>
    );
  }
}

export default ViewTodos;
