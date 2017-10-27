import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import ViewTodos from './ViewTodos';

class App extends Component {

  render() {
    return (
      <div className='container '>
        <Header />
        <div id='inputCol' className='container col-sm-12 col-lg-4'>
          <InputTodo />
        </div>
        <div id='todoCol' className='container col-sm-12 col-lg-8'>
          <ViewTodos />
        </div>
      </div>
    );
  }
}

export default App;
