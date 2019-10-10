import React, { Component } from 'react';

class ToDoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span>
          <p>{this.props.items.length} items left</p>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
          <p>Clear completed</p>
        </span>
      </div>
    );
  }
}

export default ToDoFilter;
