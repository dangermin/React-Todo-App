import React, { Component } from 'react';
import EditTodo from './EditTodo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.createTodos = this.createTodos.bind(this);
    this.editDiv = this.editDiv.bind(this);
  }

  editDiv() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  createTodos(todo) {
    const floatRight = {
      float: 'right',
      margin: '5px',
    };
    const deleteIcon = {
      float: 'right',
      margin: '5px',
      color: 'red',
    };
    const fontStyle = {
      fontSize: '18px'
    };

    const priority = (p) => {
        if (p === 1) return 'danger';
        else if(p === 2) return 'warning';
        else return 'success';
    };

    return (
      <li className={`list-group-item list-group-item-action list-group-item-${priority(todo.priority)}`} style={ fontStyle }>
        <input type="checkbox" />
        <a className="delete-todo" style={ deleteIcon }>
          <span className="glyphicon glyphicon-trash" />
        </a>
        <a className="edit-todo" style={ floatRight } onClick={ this.editDiv } >
          <span className="glyphicon glyphicon-edit" />
        </a>
        { todo.text }
        { this.state.show && <EditTodo /> }
      </li>
    );
  }

  render() {
    const todoEntries = this.props.todos;
    const listItems = todoEntries.map(this.createTodos);
    console.log(listItems);
    return (
      <div>
        <ul className="todoList" >
          { listItems }
        </ul>


      </div>
    );
  }
}

export default Todos;
