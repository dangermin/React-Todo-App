import React, { Component } from 'react';

class InputTodo extends Component {
constructor(props) {
  super(props)
}

  render() {
    const fontStyle = {
      fontSize: '18px'
    };
    return (
        <div className='well'>
          <h3>Add New Todo</h3>
          <form className='form-group' onSubmit={ this.props.addTodo } >
            <label className='col-xs-12'>
              <h4>I want to do...</h4>
              <textarea className='create-todo-text text' value={ this.value } onChange={ this.props.handleText } />
            </label>
            <br />
            <div>
              <h4>Priority level</h4>
              <select className='create-todo-priority priority col-xs-12' style={ fontStyle } value={ this.value } onChange={ this.props.handlePrioity }>
                <option value='' selected disabled >Select Priority Level</option>
                <option value='1' >High</option>
                <option value='2' >Medium</option>
                <option value='3' >Low</option>
              </select>
            </div>
            <br />
            <br />
            <button className='create-todo btn btn-primary col-xs-12' type="submit" style={ fontStyle } >Add Todo</button>
            <br />
          </form>
        </div>
    );
  }
}

export default InputTodo;
