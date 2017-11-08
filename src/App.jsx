import React, { Component } from 'react';

import Header from './Header';
import InputTodo from './InputTodo';
import Todos from './Todos';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: []
    };

    this.handlePrioity = this.handlePrioity.bind(this);
    this.handleText = this.handleText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handlePrioity(e) {
    this.setState({ priority: e.target.value });
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  addTodo(e, text, priority) {
    e.preventDefault();
    // spread array and create new todoArray
    const todoArray = [...this.state.todos];

    // if text area is blank, do nothing so no blank todos are created
    // Fix: before adding text and deleting it, will create blank text arrays
    if (this.state.text !== '') {
      todoArray.unshift(
        {
          // text: this._textArea.value,
          text: this.state.text,
          priority: this.state.priority || 1,
          isDone: false,
          key: Date.now()
        }
      );

      this.setState({
        todos: todoArray
      });

      this.setState.text = '';
    }
    console.log(todoArray);
  }

  // editTodo(id, update) {
  //   // make a copy of the current todos (Array.slice)
  //   // find the old todo (Array.find)
  //   // apply updates (Object.assign)
  //   // update the todo on the copied array (Array.splice)
  //   // setState with the new todos
  // }

  // deleteTodo(id) {

  // }

  render() {
    return (
      <div className='container '>
        <Header />
        <div id='inputCol' className='container col-sm-12 col-lg-4'>
          <InputTodo
            addTodo={ this.addTodo }
            handleText={ this.handleText }
            handlePrioity={ this.handlePrioity }
          />
        </div>
        <div id='todoCol' className='container col-sm-12 col-lg-8'>
          <Todos
            todos={ this.state.todos }
           />
            {/* todos={ this.state.todos }
            deleteTodo={ this.deleteTodo }
            editTodo={ this.editTodo }
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
