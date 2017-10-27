import React, { Component } from 'react';

class EditTodo extends Component {
  render() {
    const fontStyle = {
      fontSize: '18px'
    };
    const saveStyle = {
      fontSize: '18px',
      float: 'right',
    };
    return (
      <div className='form-group'>
        <label className='col-xs-12'>
          <h4>Description</h4>
          <textarea className='update-todo-text' />
        </label>
        <br />
        <div>
          <h4>Priority</h4>
          <select className='update-todo-priority col-xs-12' style={ fontStyle } >
            <option value='1' >High</option>
            <option value='2' >Medium</option>
            <option value='3' >Low</option>
          </select>
        </div>
        <br />
        <br />
        <button className='btn btn-success' style={ saveStyle } >Save</button>
        <br />
        <br />
      </div>
    );
  }
}

export default EditTodo;
