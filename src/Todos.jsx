import React, { Component } from 'react';
// import EditTodo from './EditTodo';

class Todos extends Component {
  render() {
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
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action list-group-item-warning" style={ fontStyle } >
            <input type="checkbox" />
            <a className="delte-todo" style={ deleteIcon }>
              <span className="glyphicon glyphicon-trash" />
            </a>
            <a className="edit-todo" style={ floatRight }>
              <span className="glyphicon glyphicon-edit" />
            </a>
            First item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-danger" style={ fontStyle } >
            <input type="checkbox" />
            <a className="delte-todo" style={ deleteIcon }>
             <span className="glyphicon glyphicon-trash" />
            </a>
            <a className="edit-todo" style={ floatRight }>
              <span className="glyphicon glyphicon-edit" />
          </a>
            Second item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-success" style={ fontStyle } >
            <input type="checkbox" />
            <a className="delte-todo" style={ deleteIcon }>
              <span className="glyphicon glyphicon-trash" />
            </a>
            <a className="edit-todo" style={ floatRight }>
              <span className="glyphicon glyphicon-edit" />
            </a>
            Third item
          </li>
        </ul>
      </div>
    );
  }
}

export default Todos;
