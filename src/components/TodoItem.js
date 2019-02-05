import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
      return {
          background: 'lightgrey',
          fontSize: '20px',
          padding: '15px',
          borderBottom: '2px #ccc dotted',
          textDecoration: this.props.todo.completed ? 
          'line-through' : 'none'
      }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind
            (this, id)}/> {'  '}  
            { title }
            <button onClick={this.props.delTodo.bind(this,id)} style={ btnSyle }>X</button>
            </p>
        </div>
    )
  }
}

const btnSyle = {
    background: 'red',
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: '50%',
    cursor: "pointer",
    float:'right'
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired, 
}
export default TodoItem;