import React from 'react';

class Mouse extends React.Component {
  render() {
    return (
      <span className="Draggable Cat" role="img" aria-label="cat">
        😼({this.props.x}, {this.props.y})
      </span>
    );
  }
}

export default Mouse;
