import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    const fontStyle = {
      fontSize: '18px'
    };
    return (
        <div className='well'>
          <h3>Add New Todo</h3>
          <div className='form-group'>
            <label className='col-xs-12'>
              <h4>I want to do...</h4>
              <textarea className='create-todo-text' />
            </label>
            <br />
            <div>
              <h4>Priority level</h4>
              <select className='create-todo-priority col-xs-12' style={ fontStyle } >
                <option value='' selected disabled >Select Priority Level</option>
                <option value='1' >High</option>
                <option value='2' >Medium</option>
                <option value='3' >Low</option>
              </select>
            </div>
            <br />
            <br />
            <button className='btn btn-primary col-xs-12' style={ fontStyle } >Add Todo</button>
            <br />
          </div>
        </div>
    );
  }
}

export default InputForm;
