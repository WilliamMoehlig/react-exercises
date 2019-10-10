import React from 'react';

class Mouse extends React.Component {
  render() {
    return (
      <span className="Draggable Mouse" role="img" aria-label="mouse">
        🐭({this.props.x}, {this.props.y})
      </span>
    );
  }
}

export default Mouse;
