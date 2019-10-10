import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="todo-item">
        <span>
          <input
            type="checkbox"
            value={this.props.item.completed}
            onClick={() => this.props.setCompleted(this.props.item.value)}
            checked={this.props.item.completed}
            onChange={() => this.props.handleTextBox}
          />
          <input
            type="text"
            name={this.props.item}
            defaultValue={this.props.item.value}
            onKeyDown={this.props.changeItem}
          />
          <button type="button" className="destroy" onClick={() => this.props.deleteItem(this.props.item.value)}>
            X
          </button>
        </span>
      </div>
    );
  }
}

export default ToDoItem;
