import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoFilter from './ToDoFilter';

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    };
  }

  addItem = e => {
    if (e.key === 'Enter') {
      const newObject = {
        value: e.target.value,
        completed: false,
      };
      const newItems = [...this.state.items, newObject];
      this.setState({
        items: newItems,
        newItem: '',
      });
    }
  };

  setCompleted = item => {
    const newItems = [...this.state.items];
    const index = newItems.findIndex(a => a.value === item);
    newItems[index].completed = !newItems[index].completed;
    this.setState({
      items: newItems,
    });
  };

  setAllCompleted = () => {
    const newItems = [...this.state.items];
    const completedItems = newItems.map(element => {
      const newElement = element;
      newElement.completed = !newElement.completed;
      return newElement;
    });
    this.setState({
      items: completedItems,
    });
  };

  changeItem = e => {
    if (e.key === 'Enter') {
      const newItems = [...this.state.items];
      newItems[e.target.name] = e.target.value;
      this.setState({
        items: newItems,
      });
    }
  };

  deleteItem = item => {
    const newItems = [...this.state.items];
    const filteredItems = newItems.filter(element => {
      if (element.value !== item) {
        return element;
      }
      return null;
    });
    this.setState({
      items: filteredItems,
    });
  };

  handleTextBox = e => {
    this.setState({
      newItem: e.target.value,
    });
  };

  render() {
    const { items, newItem } = this.state;
    return (
      <>
        <div className="todo-container">
          <h1 className="todo-title">todos</h1>
          <span>
            <button onClick={this.setAllCompleted} type="button">
              ▼
            </button>
            <input
              type="text"
              className="todo-text"
              placeholder="What needs to be done?"
              value={newItem}
              onChange={this.handleTextBox}
              onKeyDown={this.addItem}
            />
          </span>
          {items.map(element => {
            return (
              <ToDoItem
                key={element.value}
                item={element}
                changeItem={this.changeItem}
                deleteItem={this.deleteItem}
                setCompleted={this.setCompleted}
                handle={this.handleTextBox}
              />
            );
          })}
          <ToDoFilter items={items} />
        </div>
      </>
    );
  }
}

export default ToDoContainer;
