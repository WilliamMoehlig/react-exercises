import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        style={{
          backgroundColor: this.props.color,
          height: `${this.props.size}px`,
          width: `${this.props.size}px`,
        }}
      >
        {`${this.props.color} button ${this.props.size}`}
      </button>
    );
  }
}

export default Button;
